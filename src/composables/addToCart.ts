import { useProductsStore } from '@/stores/store'

const store = useProductsStore()

export function addToCart(selectedProduct: any) {
  if (selectedProduct) {
    store.addToCart(selectedProduct)
  }
}
