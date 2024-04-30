Code snippet
<template>
  <div v-if="product" class="product-details">
    <h2 class="product-title">{{ product.name }}</h2>
    <p class="product-description">{{ product.description }}</p>
    <p class="product-price">Price: ${{ product.price }}</p>
  </div>
</template>

<script>
import axios from '@/axios'; // Assuming you have a centralized Axios instance

export default {
  data() {
    return {
      product: null,
    };
  },

  async mounted() {
    const productId = this.$route.params.id;

    try {
      const response = await axios.get(`/products/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.error("An error occured while fetching the product:", error);
      // You can optionally display an error message to the user here
    }
  },
};
</script>

<style scoped>
.product-details {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.product-title {
  margin-bottom: 20px;
  font-size: 2em;
}

.product-description {
  font-size: 1.2em;
}

.product-price {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}
</style>