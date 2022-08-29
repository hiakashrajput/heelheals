<template>
  <div class="hero-container" :class="customClass">
    <div class="hero-product-image-container">
      <div class="colored-container" :style="createBackgroudGradient">
        <img
          class="hero-product-image"
          :src="heroProductImage"
          alt="product-image"
        />
      </div>
    </div>
    <div class="hero-content-container" :style="backgroundImage">
      <!-- <div class="hero-title">{{ createHeroTitle }}</div> -->
      <div class="hero-title" v-html="rawHTML"></div>
      <p class="hero-product-description">{{ heroProductDescription }}</p>
      <router-link to="/buy">
        <CustomButton
          v-if="actionButtonVisible"
          customClass="hero-button"
          buttonLabel="Buy Now"
          :buttonColor="`#${colorCode}`"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton";
export default {
  name: "MainProductCard",
  data() {
    return {
      rawHTML: `<div> ${this.heroTitlePrefix} <font style="color:#${this.colorCode}">${this.heroTitleColoredContent}</font><br> ${this.heroTitleSuffix}</div> `,
      backgroundImage: `{"background-image":${this.backgroundImg} }`,
    };
  },
  props: {
    customClass: { type: String, required: false },
    backgroundImg: { type: String, required: false },
    angle: { type: String, required: true },
    colorCode: { type: String, required: true },
    heroProductImage: { type: String, required: true },
    heroProductDescription: { type: String, required: true },
    heroTitlePrefix: String,
    heroTitleColoredContent: String,
    heroTitleSuffix: String,
    actionButtonVisible: { type: Boolean, default: true },
  },
  computed: {
    createBackgroudGradient() {
      return {
        "background-image": `linear-gradient(${this.angle}, #${this.colorCode} 35%,#${this.colorCode})`,
      };
    },
  },
  components: {
    CustomButton,
  },
};
</script>

<style scoped>
.hero-container {
  width: auto;
  padding: 2% 10%;
  /* height: auto; */
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 12%;
}

.hero-product-image-container {
  /* height: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}
.colored-container {
  width: 30vw;
  /* overflow: visible; */
  margin-left: 20px;
  /* float: left; */
  /* position: relative; */
  z-index: 99;
  margin-top: 20%;
  height: 230px;
  border-radius: 10px;
}
.hero-product-image {
  z-index: 1000;
  width: 100%;
  margin-top: -20%;
}
.hero-product-content-container {
  width: 55%;
}
.hero-content-container {
  inline-size: 50%;
  text-align: left;
  overflow-wrap: break-word;
}
.hero-title {
  font-size: 6rem;
  font-weight: 500;
  font-style: italic;
}
.hero-product-description {
  font-size: 1.2rem;
}
.hero-button {
  font-size: 1.3rem;
  padding: 15px 35px;
  color: #fcfcfc;
}

@media (min-device-width: 360px) and (max-device-width: 740px) {
  .hero-container {
    flex-direction: column;
  }
  .hero-product-image-container {
    width: 100%;
  }
  .colored-container {
    width: 100%;
    margin: 15% 0;
    height: 180px;
  }
  .hero-content-container {
    width: 100%;
    font-size: 10px;
  }
  .hero-title {
    font-size: 3rem;
  }
}
</style>
