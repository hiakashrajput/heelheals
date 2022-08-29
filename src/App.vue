<template>
  <div id="app">
    <!-- <Header :logoImg="require('@/assets/logoipsum.svg')" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    // Header,
  },
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  background-color: #fcfcfc;
  margin: 0 0 5% 0;
}
input,
textarea {
  outline: none;
}
input:focus,
textarea:focus {
  border: 2px solid blue !important;
}
</style>
