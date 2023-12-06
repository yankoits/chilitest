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
    <ul className="flex-grow">
      {products.map((prod) => (
        <li key={prod.id}>
          <Link href={`./product/${prod.id}`}>
            <div className="p-1 m-1 border rounded-lg">
              <span className="text-green-700 col-span-2 uppercase text-xs px-2">
                {prod.category}
              </span>
              <div className="flex flex-row text-lg sm:text-md">
                <span className="px-2">{prod.name}</span>
                <span className="text-red-700 ml-auto px-2">
                  {`${prod.currency} ${prod.price}`}
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
