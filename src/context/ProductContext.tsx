import { createContext, useContext } from 'react'
import type { Product } from '../domain/product.types'

export type ProductContextValue = {
  products: Product[]
  loading: boolean
  error: string | null
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  loading: true,
  error: null,
})

export function useProduct() {
  const ctx = useContext(ProductContext)
  if (!ctx) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return ctx
}
