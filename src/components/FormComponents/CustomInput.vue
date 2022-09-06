//* This is a custom input with predefined design. It uses with extra props:
validationRules takes rules for validation of input *//

<template>
  <div class="form-group" :class="errors.first(inputName) ? 'input-error' : ''">
    <label>{{ this.CustomLabel }}</label>
    <textarea
      v-if="inputType == 'textarea'"
      :type="inputType"
      :name="inputName"
      class="form-control input-lg"
      :placeholder="inputPlaceholder"
      :value="value"
      v-validate="validateRules"
      :data-vv-as="CustomLabel"
      @blur="$emit('blur')"
      v-model="innerValue"
    />
    <input
      v-else
      :type="inputType"
      :name="inputName"
      class="form-control input-lg"
      :required="inputRequired"
      :maxlength="inputMaxLength"
      :placeholder="inputPlaceholder"
      :minlength="inputMinLength"
      :pattern="inputPattern"
      @blur="$emit('blur')"
      v-validate="validateRules"
      :data-vv-as="CustomLabel"
      v-model="innerValue"
    />
    <span class="error-message" v-if="errors.first(inputName)">{{
      errors.first(inputName)
    }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomInput",

  props: {
    CustomLabel: String,
    inputType: String,
    inputName: String,
    inputRequired: { type: Boolean, default: true },
    inputMaxLength: Number,
    inputMinLength: Number,
    inputPlaceholder: String,
    value: String,
    validateRules: String,
    inputPattern: String,
  },
  methods: {
    // this function is used to validate the input.
    validateField() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
      });
    },
  },
  data: () => ({
    innerValue: "",
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style scoped>
.form-group {
  position: relative;
  width: 100%;
  margin: 10px 10px 10px 0;
  text-align: left;
  border-radius: 5px;
  align-self: start;
}
.form-group > label {
  color: #999999;
  position: absolute;
  top: -8px;
  left: 20px;
  background-color: white;
}

.form-group > input,
textarea {
  border: 2px solid #c1cbd6;
  width: 98%;
  height: 35px;
  border-radius: inherit;
}
.form-group textarea {
  padding-top: 10px;
  height: 60px;
  resize: none;
}
.input-error > input,
.input-error > textarea {
  border: 2px solid red !important;
}
.input-error > label {
  color: red;
}
.input-error > .error-message {
  color: red;
  font-size: 0.8rem;
}
</style>
