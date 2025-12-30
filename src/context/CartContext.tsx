import { createContext, useContext } from 'react'
import type { CartItem } from '../components/CartProvider'
import type { Product } from '../domain/product.types'
export type CartContext = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContext | undefined>(undefined)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
