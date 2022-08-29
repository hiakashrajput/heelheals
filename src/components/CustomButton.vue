<template>
  <button class="custom-button" :class="customClass" @click="onClickHandler">
    {{ buttonLabel }}
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    buttonLabel: { type: String, required: true },
    buttonColor: { type: String, required: true },
    onClickHandler: { type: Function, required: true },
    customClass: { type: String, required: false },
  },
};
</script>

<style scoped>
.custom-button {
  border: none;
  text-align: center;
  font-size: 1rem;
  background-color: v-bind(buttonColor);
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button:active {
  scale: 0.97;
}
</style>
