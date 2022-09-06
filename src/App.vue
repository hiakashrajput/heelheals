<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script></script>

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
textarea,
select {
  outline: none;
}
input:focus,
textarea:focus,
select:focus {
  border: 2px solid blue !important;
}
</style>
