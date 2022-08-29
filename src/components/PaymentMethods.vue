<template>
  <div class="payment-methods-container">
    <h3 class="title">Payment Method</h3>
    <div class="payment-option">
      <div class="radio-button-container">
        <input type="radio" name="paymentMethod" checked="checked" /><strong>
          PayPal</strong
        >
      </div>

      <p>You will be redirectedto the Paypal website after submitting order</p>
      <img
        src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/Online_Primary_Acceptance_Mark_RGB_V2_small.jpg"
        alt="PayPal"
      />
    </div>
    <div class="payment-option">
      <div id="credit-card-radio-button" class="radio-button-container">
        <input type="radio" name="paymentMethod" /><strong>
          Pay with Credit Card</strong
        >
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
      />
      <CustomInput
        CustomLabel="Expiration Date"
        inputName="expirationDate"
        inputType="text"
        inputPlaceholder="MM/YY"
      />
      <CustomInput
        CustomLabel="Card Security Code"
        inputName="cardSecurityCode"
        inputType="password"
        inputMinLength="3"
        inputMaxLength="3"
        inputmode="numeric"
      />
      <a href="#">What is this?</a>
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
</style>
