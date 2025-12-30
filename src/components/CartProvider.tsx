import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import type { Product } from '../domain/product.types'

export type CartItem = Product & { qty: number }

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((item) => {
        return item.id === product.id
      })

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
