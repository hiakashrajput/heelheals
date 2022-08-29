<template>
  <div class="product-card" :style="createBackgroudGradient">
    <div class="product-image-container">
      <img class="product-image" :src="productImage" />
    </div>
    <div class="product-content-container">
      <p class="product-description">
        {{ productDescription }}
      </p>
      <router-link to="/buy">
        <CustomButton
          customClass="action-button"
          buttonColor="#FFFFFF"
          buttonLabel="Buy Now"
          :onClickHandler="consoleClick"
      /></router-link>
      <!-- <button class="buy-now-button" value="Buy Now">Buy Now</button> -->
    </div>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  name: "ProductCard",
  props: {
    angle: String,
    colorCode: String,
    productImage: String,
    productDescription: String,
  },
  data() {
    return {};
  },
  methods: {
    consoleClick() {
      console.log("Button Clicked");
    },
  },
  computed: {
    createBackgroudGradient() {
      return {
        "background-image": `linear-gradient(${this.angle}, #${this.colorCode} 35%,#${this.colorCode})`,
      };
    },
  },
  components: { CustomButton },
};
</script>

<style scoped>
/* img {
  border: 2px solid green;
} */

.product-card {
  border-radius: 0.5em;
  /* background-image: linear-gradient(
    to right,
    rgba(218, 0, 54, 0.95),
    rgba(218, 0, 54)
  ); */
  /* height: 24vh; */
  width: 30%;
  display: flex;
  padding: 0 10px 10px 0;
  margin-right: 2px;
  box-shadow: 1px 1px 2px #000000;
}

@keyframes increaseWidth {
  0% {
    min-width: 60%;
  }

  50% {
    min-width: 66%;
  }

  100% {
    min-width: 70%;
  }
}
@keyframes marginTop {
  0% {
    margin-top: -10%;
    margin-left: -10%;
  }

  50% {
    margin-top: -15%;
    margin-left: -15%;
  }
  70% {
    margin-top: -22%;
    margin-left: -22%;
  }

  100% {
    margin-top: -30%;
    margin-left: -30%;
  }
}
.product-card:hover > .product-content-container {
  animation: increaseWidth 0.3s forwards;
}
.product-card:hover .action-button {
  min-width: 100%;
}
.product-card:hover .product-image {
  animation: marginTop 0.3s forwards;
}
.product-card:hover .product-content-container > a {
  width: 100%;
}
@media (min-device-width: 360px) and (max-device-width: 740px) {
  .product-description {
    font-size: 0.8rem !important;
  }
  .product-card {
    width: 100%;
    margin: 10% 0;
  }
}
.product-card > .product-image-container {
  width: 40%;
  height: 100%;
}
.product-card img {
  width: 110%;
  height: 110%;
  object-fit: contain;
  margin-left: -30%;
}
.product-card > .product-content-container {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.product-description {
  width: auto;
  height: 60%;
  color: white;
  text-align: justify;
  margin: 7% 0 5% 0;
  font-size: 1rem;
  line-height: 1.5rem;
}

.action-button {
  font-size: 1rem;
  padding: 10px 18px;
  width: fit-content;
  align-self: flex-end;
  mix-blend-mode: screen;
}
.product-content-container > a {
  align-self: end;
}
</style>
