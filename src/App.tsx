import { useEffect, useState } from 'react'

export type Product = {
  id: number
  image: string
  name: string
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 object-cover rounded mb-4"
            />

            <h2 className="text-xl fond-semibold">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
