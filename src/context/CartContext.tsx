import { createContext, useContext } from 'react'
import type { Product } from '../domain/product.types'
export type CartContext = {
  cart: Product[]
  addToCart: (product: Product) => void
}

export const CartContext = createContext<CartContext | undefined>(undefined)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
