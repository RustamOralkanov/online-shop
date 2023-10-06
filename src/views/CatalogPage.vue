<template>
    <h1 class="text-h3 text-center mb-12 mt-4">Catalog</h1>
    <div class="products-list d-flex flex-wrap">
        <v-card class="product" v-for="product in store.products" :key="product.id">
            <v-img class=" align-end text-white" height="200" :src="product.thumbnail" cover>
                <v-card-title>{{ product.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">
                {{ product.category }}
            </v-card-subtitle>

            <v-card-text>
                <div>Brand: {{ product.brand }}</div>

                <div>$ {{ product.price.toFixed(2) }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange" @click="addToCart(product)">
                    Add To Cart
                </v-btn>

                <v-btn color="orange" @click="goToProductPage(product.id)">
                    More
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { addToCart } from '@/composables/addToCart';
import { useProductsStore } from '@/stores/store';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useProductsStore()
const router = useRouter()

const goToProductPage = (id: number) => {
    router.push({ name: 'product', params: { id } })
}

onMounted(() => {
    store.fetchProductsFromDb()
})
</script>

<style scoped>
.products-list {
    gap: 20px;
}

.product {
    width: calc(50% - 10px)
}
</style>