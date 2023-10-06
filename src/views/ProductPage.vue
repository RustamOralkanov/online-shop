<template>
    <button @click="router.push({ name: 'catalog' })" class="mb-6">&larr; Back to catalog</button>
    <div class="product" v-if="selectedProduct">
        <div class="product-image">
            <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title">
        </div>
        <div class="product-info">
            <p>Brand: {{ selectedProduct.brand }}</p>
            <p>Category: {{ selectedProduct.category }}</p>
            <p>Rating: {{ selectedProduct.rating }}</p>
            <p>Description: {{ selectedProduct.description }}</p>
            <p class="text-h5 font-weight-bold">Price: $ {{ selectedProduct.price.toFixed(2) }}</p>
            <v-btn density="default" @click="addCart" class="mt-6">Add to cart</v-btn>
        </div>
    </div>
    <div class="product" v-else>
        Waiting...
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/store';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { addToCart } from '../composables/addToCart'

const store = useProductsStore()
const route = useRoute()
const router = useRouter()
const routeId: number = +route.params.id

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === routeId)
})

const addCart = addToCart(selectedProduct.value)
</script>

<style scoped></style>