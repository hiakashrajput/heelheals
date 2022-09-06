<template>
  <form class="billing-form-container" novalidate>
    <h3 class="title">Billing Address</h3>
    <div class="name-inputs">
      <CustomInput
        inputType="text"
        inputName="firstName"
        CustomLabel="First Name"
        v-model="billingForm.firstName"
        validateRules="required|alpha|min:3"
        ref="firstName"
      />
      <CustomInput
        inputType="text"
        inputName="lastName"
        CustomLabel="Last Name"
        v-model="billingForm.lastName"
        validateRules="required|alpha|min:3"
        ref="lastName"
      />
    </div>
    <CustomInput
      inputType="email"
      inputName="email"
      CustomLabel="E-mail"
      v-model="billingForm.email"
      validateRules="required|email"
      ref="email"
    />
    <CustomInput
      inputType="text"
      inputName="addressLineOne"
      CustomLabel="Street Address"
      v-model="billingForm.streetAddressLineOne"
      validateRules="required"
      ref="streetAddress"
    />
    <CustomInput
      inputType="text"
      inputName="addressLineTwo"
      CustomLabel=""
      :inputRequired="false"
      v-model="billingForm.streetAddressLineTwo"
      validateRules=""
    />
    <div class="state-inputs">
      <CustomSelect
        inputName="state"
        :options="stateOptions"
        CustomLabel="State/Province"
        v-model="billingForm.state"
        validateRules="required"
        ref="state"
      />
      <CustomInput
        inputType="text"
        inputName="city"
        CustomLabel="City"
        v-model="billingForm.city"
        validateRules="required|alpha"
        ref="city"
      />
    </div>
    <div class="zip-phone-inputs">
      <CustomInput
        CustomLabel="Zip/Postal"
        inputType="text"
        inputName="zipCode"
        v-model="billingForm.zipCode"
        :inputMinLength="6"
        :inputMaxLength="6"
        inputPattern="[0-9]*"
        validateRules="required|numeric|min:6|max:6|regex:[0-9]*"
        ref="zipCode"
      />
      <CustomInput
        CustomLabel="Phone"
        inputType="tel"
        inputName="phone"
        v-model="billingForm.phoneNumber"
        :inputMinLength="10"
        :inputMaxLength="10"
        validateRules="required|numeric|min:10|max:10|regex:[6-9]{1}[0-9]*"
        ref="phoneNumber"
      />
    </div>
    <div class="checkbox-container">
      <input
        type="checkbox"
        value="sameShippingAddress"
        name="sameShippingAddress"
        v-model="billingForm.sameShippingAddress"
      /><label class="checkbox-label"
        >My billing and shipping address are the same</label
      >
    </div>
    <div class="checkbox-container">
      <input
        type="checkbox"
        value="createAccount"
        name="createAccount"
        v-model="billingForm.createAccount"
      /><label class="checkbox-label">Create an account for later use</label>
    </div>
  </form>
</template>

<script>
import CustomInput from "./FormComponents/CustomInput.vue";
import CustomSelect from "./FormComponents/CustomSelect.vue";
import { State } from "country-state-city";
export default {
  name: "BillingForm",
  components: {
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      stateOptions: State.getStatesOfCountry("IN"),
      billingForm: {
        firstName: "",
        lastName: "",
        email: "",
        state: "",
        city: "",
        zipCode: "",
        phoneNumber: "",
        sameShippingAddress: "",
        createAccount: "",
      },
    };
  },
  methods: {
    validateAllFields() {
      this.$refs.firstName.validateField();
      this.$refs.lastName.validateField();
      this.$refs.email.validateField();
      this.$refs.streetAddress.validateField();
      this.$refs.state.validateField();
      this.$refs.city.validateField();
      this.$refs.zipCode.validateField();
      this.$refs.phoneNumber.validateField();
    },
    resetForm() {
      this.billingForm = {};
    },
  },
};
</script>

<style scoped>
.billing-form-container {
  margin: 20px 10px;
  background-color: white;
  width: 30vw;
  box-shadow: 1px 1px 4px;
  padding: 10px 30px;
  text-align: left;
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
}
.checkbox-container input[type="checkbox"] {
  outline: #c1cbd6;
}

@media (min-device-width: 360px) and (max-device-width: 740px) {
  .billing-form-container {
    width: 100%;
    background-color: white;
    box-shadow: 1px 1px 4px;
    padding: 4px 10px;
    text-align: left;
  }
}
</style>
