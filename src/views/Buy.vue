<template>
  <div class="buy-page">
    <Header :logoImg="require('@/assets/logoipsum.svg')" />

    <HeroSection
      customClass="hero-container-custom"
      :heroProductImage="require('@/assets/shoe.png')"
      angle="90deg"
      heroTitlePrefix="Buy"
      heroTitleColoredContent="Women Shoe"
      heroTitleSuffix="Now"
      :colorCode="heroSectionBackgrondColor"
      heroProductDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do eiusmod tempor sed do eiusmod tempor incididunt sed do eiusmod tempor"
      :actionButtonVisible="false"
    />
    <div class="buy-page-content">
      <BillingForm />
      <BillSummary
        :subtotal="3720.27"
        :discount="749.99"
        :warrantyCharge="259.99"
        :shippingCharge="0.0"
        :tax="228.72"
      />
      <PaymentMethods />
    </div>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import BillingForm from "../components/BillingForm.vue";
import BillSummary from "../components/BillSummary.vue";
import PaymentMethods from "../components/PaymentMethods.vue";
import Header from "../components/Header.vue";
export default {
  name: "Buy",
  components: {
    HeroSection,
    BillingForm,
    BillSummary,
    PaymentMethods,
    Header,
  },
  data() {
    return {
      heroSectionBackgrondColor: "F1A030",
      heroSectionBackgrondColorFaded: "" + this.heroSectionBackgrondColor,
    };
  },
};
</script>

<style scoped>
.header-wrap,
.header {
  background-color: #282828;
  width: 100%;
}
</style>
<style>
.buy-page {
  display: flex;
  flex-wrap: wrap;
}
.buy-page li > a {
  color: white;
}
.buy-page a.router-link-exact-active {
  border-bottom: 2px solid white;
}
.buy-page-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15%;
}
.hero-container-custom {
  background-color: #282828;
  color: white;
}
.hero-container-custom .hero-title {
  font-size: 3rem;
  font-weight: 700;
}
.hero-product-image {
}
@keyframes zoomOut {
  from {
  }
  to {
    border-radius: 50%;
  }
}

.hero-container-custom .colored-container {
  width: 300px;
  margin-top: 0;
  height: 300px;
  animation: zoomOut 1s forwards;
  background-color: #7a5932;
  background-image: none !important;
  animation-duration: 1s;
}
.hero-container-custom .hero-product-image {
  margin-left: -10%;
  width: 120%;
  margin-top: 20%;
}
@media (min-device-width: 360px) and (max-device-width: 740px) {
  .buy-page-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 3%;
  }

  .buy-page-content :nth-child(1) {
    order: 1;
  }
  .buy-page-content :nth-child(2) {
    order: 3;
  }
  .buy-page-content :nth-child(3) {
    order: 2;
  }
}
</style>
