<script setup lang="ts">
import type { Product } from '~/model/Product';

const props = defineProps<{
    product: Product;
}>();

</script>

<template>
    <div class="product-card-container">
        <img :src="product.images[0]" alt="product image" class="product-image" />
        <div>{{ product.title }}</div>
        <div>{{ product.category }}</div>
        <div>$ {{ product.price }}</div>
    </div>
</template>

<style>
.product-card-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    text-align: center;
    width: 20rem;
    cursor: pointer;
}

.product-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
}
</style>
