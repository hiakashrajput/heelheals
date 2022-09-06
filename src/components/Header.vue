<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo">
        <img :src="logoImg" alt="logo" />
      </div>
      <ul class="ul-menu-items">
        <li>
          <router-link to="/" @click.native="$router.go()">Home</router-link>
        </li>
        <li>
          <router-link to="/buy" @click.native="$router.go()">Buy</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    logoImg: String,
  },
};
</script>

<style scoped>
.header-wrap {
  padding: 5% 10% 3% 10%;
  margin-bottom: -1px;
}
.header {
  width: 100%;
  height: auto;
  padding-bottom: 4vh;
  display: flex;
  justify-content: space-between;
}

.ul-menu-items {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
  height: 100%;
  display: flex;
  flex-direction: row;
}

li a {
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
a.router-link-exact-active {
  cursor: pointer;
}
</style>
