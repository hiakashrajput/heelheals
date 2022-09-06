<template>
  <div class="form-group" :class="errors.first(inputName) ? 'input-error' : ''">
    <label>{{ this.CustomLabel }}</label>
    <select
      class="form-control input-lg"
      required
      :name="inputName"
      :value="value"
      @input="updateInputValue($event.target.value)"
      v-validate="validateRules"
      :data-vv-as="CustomLabel"
    >
      <option disabled value="">Please select one</option>
      <option :key="option.name" v-for="option in options">
        {{ option.name }}
      </option>
    </select>
    <span class="error-message" v-if="errors.first(inputName)">{{
      errors.first(inputName)
    }}</span>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    CustomLabel: String,
    options: Array,
    validateRules: String,
    value: String,
    inputName: String,
  },
  methods: {
    updateInputValue(value) {
      this.$emit("input", value);
    },
    validateField() {
      this.$validator
        .validateAll()
        .then((result) => {
          if (!result) {
            return;
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.form-group {
  font-family: arial;
  position: relative;
  width: 100%;
  margin: 10px 10px 10px 0;
  text-align: left;
  border-radius: 5px;
}
.form-group > label {
  color: #999999;
  position: absolute;
  top: -8px;
  left: 20px;
  background-color: white;
}

.form-group > select {
  border: 2px solid #c1cbd6;
  width: 100%;
  height: 40px;
  border-radius: inherit;
}
.input-error > select {
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
