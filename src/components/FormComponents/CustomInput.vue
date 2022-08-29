<template>
  <div class="form-group">
    <label>{{ this.CustomLabel }}</label>
    <textarea
      v-if="inputType == 'textarea'"
      :type="inputType"
      :name="inputName"
      class="form-control input-lg"
      :required="inputRequired"
      :placeholder="inputPlaceholder"
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
    />
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
</style>
