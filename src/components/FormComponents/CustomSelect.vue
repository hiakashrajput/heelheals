<template>
  <div class="form-group">
    <label>{{ this.CustomLabel }}</label>
    <select
      v-model="selected"
      class="form-control input-lg"
      :pattern="inputPattern"
      required
    >
      <option disabled value="">Please select one</option>
      <option :key="option" v-for="option in options">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    CustomLabel: String,
    options: Array,
    inputValue: String,
    inputPattern: String,
  },
  data() {
    return {
      selected: "",
    };
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
</style>
