<template>
  <div class="bill-summary-container">
    <details open>
      <summary class="title">
        <strong>Bill summary</strong>
      </summary>
      <div class="bill-row-container">
        <label>Subtotal</label>{{ formatter.format(subtotal) }}
      </div>
      <div class="bill-row-container">
        <label>Discount</label>- {{ formatter.format(discount) }}
      </div>
      <div class="bill-row-container warranty-info">
        <label>Warranty(Platinum)</label
        >{{ formatter.format(updatedWarrantyCharge) }}
      </div>
      <a class="remove-warranty-text" @click="removeWarranty()">{{
        warrantyToggleButtonText
      }}</a>
      <div class="bill-row-container">
        <label>Shipping</label>{{ formatter.format(shippingCharge) }}
      </div>
      <div class="bill-row-container">
        <label>Tax</label>{{ formatter.format(tax) }}
      </div>
    </details>
    <hr />
    <div class="bill-row-container grand-total-row">
      <label><strong>Grand Total</strong></label
      >{{ grandTotal }}
    </div>
    <form @submit.prevent="payButtonHandler">
      <CustomInput
        CustomLabel="Order Comment"
        inputName="orderComment"
        inputType="textarea"
        :inputRequired="false"
        inputPlaceholder="Type here..."
        v-model="billSummary.orderComment"
      />
      <div class="checkbox-container">
        <input
          type="checkbox"
          value="acknowledgePrivacyPolicy"
          name="acknowledgePrivacyPolicy"
          required
          v-model="billSummary.acknowledgePrivacyPolicy"
          oninvalid="this.setCustomValidity('Please agree to our Privary & Terms to proceed.')"
          oninput="setCustomValidity('')"
        /><label class="checkbox-label"
          >Please check to acknowledge our
          <a href="#">Privacy & Terms Policy</a></label
        >
      </div>
      <CustomButton
        buttonColor="#006BD7"
        v-bind:buttonLabel="'Pay ' + grandTotal"
        customClass="pay-button"
      />
    </form>
  </div>
</template>

<script>
import CustomInput from "./FormComponents/CustomInput.vue";
import CustomButton from "./CustomButton.vue";
export default {
  name: "BillSummary",
  components: {
    CustomInput,
    CustomButton,
  },
  props: {
    subtotal: { default: 0, type: Number },
    discount: { default: 0, type: Number },
    warrantyCharge: { default: 0, type: Number },
    shippingCharge: { default: 0, type: Number },
    tax: { default: 0, type: Number },
  },
  data() {
    return {
      billSummary: {
        acknowledgePrivacyPolicy: "",
        orderComment: "",
      },
      formatter: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      }),
      warrantyToggleButtonText: "Remove",
      initialWarrantyCharge: this.warrantyCharge,
      updatedWarrantyCharge: this.warrantyCharge,
    };
  },
  methods: {
    removeWarranty() {
      if (this.warrantyToggleButtonText == "Remove") {
        this.updatedWarrantyCharge = 0;
        this.warrantyToggleButtonText = `Add for $${this.initialWarrantyCharge} only`;
      } else {
        this.updatedWarrantyCharge = this.initialWarrantyCharge;
        this.warrantyToggleButtonText = "Remove";
      }
    },
    payButtonHandler() {
      console.log("Pay button clicked");
      this.$emit("PayButtonClicked", true);
    },
  },
  computed: {
    grandTotal() {
      return this.formatter.format(
        Math.round(
          (this.subtotal +
            this.updatedWarrantyCharge +
            this.shippingCharge +
            this.tax -
            this.discount) *
            100
        ) / 100
      );
    },
  },
};
</script>

<style scoped>
.bill-summary-container {
  margin: 20px 10px;
  background-color: white;
  width: 20vw;
  box-shadow: 1px 1px 4px;
  padding: 10px 30px;
  text-align: left;
}
.title {
  font-size: 1.3rem;
}

.name-inputs,
.state-inputs,
.zip-phone-inputs {
  display: flex;
  margin: 0px;
  padding: 0px;
}
.checkbox-container {
  margin: 5px 0px;
  font-size: 1rem;
  color: #999999;
  display: flex;
  align-items: flex-start;
}
.checkbox-container input[type="checkbox"] {
  outline: #c1cbd6;
}

a {
  text-decoration: none;
  color: blue;
  font-size: 0.9rem;
}
.bill-row-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0px;
}
.warranty-info {
  margin-bottom: 0px;
}
.remove-warranty-text {
  font-size: 0.8rem;
  cursor: pointer;
}
.grand-total-row {
  margin-bottom: 20px;
}
.pay-button {
  background-color: #006bd7;
  color: white;
  font-size: 1.3rem;
  width: 100%;
}
@media (min-device-width: 360px) and (max-device-width: 740px) {
  .bill-summary-container {
    width: 100%;
    padding: 4px 10px;
    text-align: left;
  }
}
</style>
>
