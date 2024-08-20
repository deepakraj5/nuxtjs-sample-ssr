import type { Product } from "~/model/Product";

export const useProductStore = defineStore('productStore', {
    state: () => ({
        products: [] as Product[],
    }),
    actions: {
        async fetchProducts() {
            const response: any = await $fetch("https://dummyjson.com/products?limit=6&skip=10");
            this.products = response.products as Product[];
        },
        async addNewProduct() {
            const response: Product = await $fetch("https://dummyjson.com/products/30");
            this.products.push(response);
        }
    }
})
