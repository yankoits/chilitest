import { getFilteredProducts } from "../lib/data/get-products"
import Link from "next/link"

export default async function ProductList({
  query,
  currentPage,
}: {
  query: string
  currentPage: number
}) {
  const products = await getFilteredProducts(query, currentPage)
  return (
    <ul className="flex-grow p-6">
      {products.map((prod) => (
        <li key={prod.id}>
          <Link href={`./product/${prod.id}`}>{prod.name}</Link>
        </li>
      ))}
    </ul>
  )
}
