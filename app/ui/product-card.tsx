import Link from "next/link"
import { Product } from "@/app/lib/definitions"

export default async function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`./product/${product.id}`}>
      <div className="p-1 m-1 border rounded-lg hover:bg-blue-50">
        <span className="text-green-700 col-span-2 uppercase text-xs px-2">
          {product.category}
        </span>
        <div className="flex flex-row text-lg sm:text-md">
          <span className="px-2">{product.name}</span>
          <span className="text-red-700 ml-auto px-2">
            {`${product.currency} ${product.price}`}
          </span>
        </div>
      </div>
    </Link>
  )
}
