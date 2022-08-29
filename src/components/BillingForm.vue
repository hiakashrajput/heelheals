<template>
  <form class="billing-form-container">
    <h3 class="title">Billing Address</h3>
    <div class="name-inputs">
      <CustomInput
        inputType="text"
        inputName="firstName"
        CustomLabel="First Name"
      />
      <CustomInput
        inputType="text"
        inputName="lastName"
        CustomLabel="Last Name"
      />
    </div>
    <CustomInput inputType="email" inputName="email" CustomLabel="E-mail" />
    <CustomInput
      inputType="text"
      inputName="addressLineOne"
      CustomLabel="Street Address"
    />
    <CustomInput
      inputType="text"
      inputName="addressLineTwo"
      CustomLabel=""
      :inputRequired="false"
    />
    <div class="state-inputs">
      <CustomSelect :options="stateOptions" CustomLabel="State/Province" />
      <CustomInput inputType="text" inputName="city" CustomLabel="City" />
    </div>
    <div class="zip-phone-inputs">
      <CustomInput
        inputPattern="[0-9]{5}"
        CustomLabel="Zip/Postal"
        inputType="number"
        inputName="zipCode"
      />
      <CustomInput CustomLabel="Phone" inputType="tel" inputName="phone" />
    </div>
    <div class="checkbox-container">
      <input
        type="checkbox"
        value="sameShippingAddress"
        name="sameShippingAddress"
      /><label class="checkbox-label"
        >My billing and shipping address are the same</label
      >
    </div>
    <div class="checkbox-container">
      <input type="checkbox" value="createAccount" name="createAccount" /><label
        class="checkbox-label"
        >Create an account for later use</label
      >
    </div>
  </form>
</template>

<script>
import CustomInput from "./FormComponents/CustomInput.vue";
import CustomSelect from "./FormComponents/CustomSelect.vue";
export default {
  name: "BillingForm",
  components: {
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      stateOptions: ["Punjab", "Delhi", "Banglore"],
    };
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
</style>
>
