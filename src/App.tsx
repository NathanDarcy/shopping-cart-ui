import Header from './components/Header'
import ProductList from './components/ProductList'

export default function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

        <ProductList />
      </div>
    </>
  )
}
