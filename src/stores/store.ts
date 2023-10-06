import { defineStore } from 'pinia'
import { newInstance } from '@/plugins/axios/axios'

interface State {
  products: Products[]
  cart: Products[]
}

interface Products {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const useProductsStore = defineStore('products', {
  state: (): State => ({
    products: [],
    cart: []
  }),
  getters: {},
  actions: {
    fetchProductsFromDb() {
      newInstance
        .get('/products')
        .then((res) => res.data)
        .then((res) => {
          this.products = res.products
        })
    },
    addToCart(product: Products) {
      this.cart?.push(product)
    }
  }
})
