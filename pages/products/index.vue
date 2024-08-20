<script setup lang="ts">
import Product from '~/components/Product.vue';

const productStore = useProductStore();

await callOnce(productStore.fetchProducts);

async function handleOnNewProduct() {
    productStore.addNewProduct();
}

</script>


<template>

    <div class="products-container">
        <div>
            <h1 class="title">Products</h1>

            <button class="btn" @click="handleOnNewProduct">Add New Product</button>

            <div class="products">
                <div v-for="product in productStore.products" :key="product.id">
                    <Product :product="product" />
                </div>
            </div>

        </div>
    </div>

</template>

<style>
.products-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.title {
    text-align: center;
}

.products {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 20px;
}

.btn {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    color: white;
    background-color: rgb(38, 38, 210);
    cursor: pointer;
}
</style>
