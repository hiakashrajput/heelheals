<template>
  <div class="payment-methods-container">
    <h3 class="title">Payment Method</h3>
    <div
      class="payment-option"
      @click="updatePaymentMethod('payPal')"
      :class="{ isActive: paymentMethod.type === 'payPal' }"
    >
      <div class="radio-button-container">
        <input
          type="radio"
          name="paymentMethod"
          v-model="paymentMethod.type"
          value="payPal"
        /><strong> PayPal</strong>
      </div>

      <p>You will be redirectedto the Paypal website after submitting order</p>
      <img
        src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/Online_Primary_Acceptance_Mark_RGB_V2_small.jpg"
        alt="PayPal"
      />
    </div>
    <div
      class="payment-option"
      id="creditCard"
      @click="updatePaymentMethod('creditCard')"
      :class="{ isActive: paymentMethod.type === 'creditCard' }"
    >
      <div id="credit-card-radio-button" class="radio-button-container">
        <input
          type="radio"
          name="paymentMethod"
          value="creditCard"
          v-model="paymentMethod.type"
        /><strong> Pay with Credit Card</strong>
      </div>
      <img
        src="https://camo.githubusercontent.com/b45d680d48b4b642b19ac7308567ea61f995a566d8b2a9165def53740574f3b5/687474703a2f2f73746f726167652e6a302e686e2f6372656469742d636172642d6c6f676f732d322e706e67"
        alt="Credit Cards"
      />
      <CustomInput
        CustomLabel="Card Number"
        inputName="cardNumber"
        inputType="text"
        inputmode="numeric"
        v-model="paymentMethod.creditCardNumber"
        :validateRules="addValidationRules('required|credit_card')"
        ref="paymentMethodChanged"
      />
      <CustomInput
        CustomLabel="Expiration Date"
        inputName="expirationDate"
        inputType="text"
        v-model="paymentMethod.cardExpiryDate"
        inputPlaceholder="MM/YY"
        :validateRules="addValidationRules('required|date_format:MM/YY')"
      />
      <CustomInput
        CustomLabel="Card Security Code"
        inputName="cardSecurityCode"
        inputType="password"
        :inputMinLength="3"
        :inputMaxLength="3"
        v-model="paymentMethod.cvv"
        :validateRules="addValidationRules('required|digits:3')"
      />
      <a
        ><abbr title="On the back of your card there will be a 3 digit number.">
          What is this?</abbr
        ></a
      >
    </div>
    <div class="security-info-container">
      <img
        class="lockIcon"
        src="https://i.pinimg.com/originals/67/9a/8c/679a8ce044245372ca495c4c9c151225.png"
        alt="lockIcon"
      />
      <p>
        We protect your payment information using encryption to provide
        bank-level security.
      </p>
    </div>
  </div>
</template>

<script>
import CustomInput from "./FormComponents/CustomInput.vue";

export default {
  name: "PaymentMethods",
  components: { CustomInput },
  data() {
    return {
      paymentMethod: {
        type: "payPal",
        creditCardNumber: "",
        cvv: "",
        cardExpiryDate: "",
      },
    };
  },
  methods: {
    updatePaymentMethod(value) {
      this.paymentMethod.type = value;
    },
    addValidationRules(validationRule) {
      return this.paymentMethod.type === "creditCard" ? validationRule : "";
    },
    validationCardExpiryRules() {
      //   var today = new Date();
      //   var MM = today.getMonth();
      //   var YY = today.getFullYear().toString().substr(-2);
      //   var expiryYY = (today.getFullYear() + 30).toString().substr(-2);
      //   |date_between:"${MM}/${YY},${MM}/${expiryYY}
      return this.paymentMethod.type === "creditCard"
        ? `required|date_format:MM/YY`
        : "";
    },
    validateAllFields() {
      if (this.paymentMethod.type === "creditCard") {
        this.$refs.paymentMethodChanged.validateField();
        this.$refs.expirationDate.validateField();
        this.$refs.cardSecurityCode.validateField();
      }
    },
    resetForm() {
      this.paymentMethod = {
        type: "payPal",
      };
    },
  },
};
</script>

<style scoped>
.payment-methods-container {
  margin: 20px 10px;
  background-color: white;
  width: 30vw;
  box-shadow: 1px 1px 4px;
  padding: 10px 30px;
  text-align: left;
}
.payment-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #c1cbd6;
  border-radius: 5px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.isActive {
  border: 2px solid #006bd7 !important;
}
.payment-option .form-group {
  width: 45%;
  margin: 10px 10px 10px 10px;
}
.payment-option p {
  flex: 3;
}
.payment-option CustomInput {
  flex: 1;
}
.radio-button-container {
  display: inline-flex;
  align-items: center;
  height: 100%;
}
.payment-option a {
  width: 47%;
}
.payment-option p {
  margin: 20px;
}
.payment-option img {
  align-self: flex-start;
  height: 30px;
  margin: 10px;
}
.lockIcon {
  padding: 2px;
  border: 2px solid #157efb;
  height: 20px;
  border-radius: 50%;
}
.security-info-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.security-info-container p {
  width: 90%;
  font-size: 1rem;
}
abbr {
  cursor: pointer;
  text-decoration: none;
  color: #006bd7;
}

@media (min-device-width: 360px) and (max-device-width: 740px) {
  .payment-methods-container {
    width: 100%;
    padding: 4px 10px;
    text-align: left;
  }
}
</style>
