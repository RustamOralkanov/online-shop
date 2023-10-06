<template>
    <h1 class="text-h3">Cart</h1>
    <div class="cart">
        <v-list lines="three" v-if="store.cart.length">
            <v-list-item v-for="cart in store.cart" :key="cart.id" :title="cart.title" :subtitle="cart.description"
                :prepend-avatar="cart.thumbnail" :value="cart.price">
            </v-list-item>
        </v-list>
        <div class="text-center pa-16 text-h2" v-else>
            Empty...
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductsStore } from '@/stores/store';

const store = useProductsStore()
</script>

<style scoped></style>