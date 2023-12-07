import { getFilteredProducts } from "../lib/data/get-products"
import ProductCard from "./product-card"

export default async function ProductList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const products = await getFilteredProducts(query, currentPage)
  if (products.length === 0) {
    return (
      <p className="text-lg self-center py-2">
        Nothing found. Try to look for something else!
      </p>
    )
  }

  return (
    <ul className="flex-grow">
      {products.map((prod) => (
        <li key={prod.id}>
          <ProductCard product={prod} />
        </li>
      ))}
    </ul>
  )
}
