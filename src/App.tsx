import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'

export type Product = {
  id: number
  image: string
  name: string
  description: string
  category: string
  price: number
  quantity: number
  rating: number
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('http://localhost:8000/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()

        setProducts(data)
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

      {loading && <p>Loading...</p>}
      {error && <div className="error">X {error}</div>}

      <ProductList products={products} />
    </div>
  )
}
