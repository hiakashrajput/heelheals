<template>
  <div class="home-page">
    <Header :logoImg="require('@/assets/logoipsum.svg')" />

    <HeroSection
      :heroProductImage="require('@/assets/shoe.png')"
      :backgroundImg="require('@/assets/dot.svg')"
      angle="90deg"
      heroTitlePrefix="New"
      heroTitleColoredContent="Winter"
      heroTitleSuffix="Arrival"
      colorCode="F1A030"
      heroProductDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor sed do eiusmod tempor incididunt sed do eiusmod tempor"
    />
    <div class="display-product-cards">
      <ProductCard
        :productImage="require('@/assets/1-shoe.png')"
        angle="90deg"
        colorCode="CB0034"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor"
      />
      <ProductCard
        :productImage="require('@/assets/2-shoe.png')"
        angle="90deg"
        colorCode="C59276"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor"
      />
      <ProductCard
        :productImage="require('@/assets/3-shoe.png')"
        angle="90deg"
        colorCode="2D3763"
        productDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import HeroSection from "../components/HeroSection.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    ProductCard,
    HeroSection,
    Header,
  },
};
</script>

<style>
.home-page li > a {
  color: black;
}
.home-page a.router-link-exact-active {
  border-bottom: 2px solid black;
}
</style>
<style scoped>
.display-product-cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 10%;
}

@media (min-device-width: 360px) and (max-device-width: 740px) {
  .display-product-cards {
    display: block;
  }
}
</style>
