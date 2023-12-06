import { getProductFull } from "@/app/lib/data/get-product-full"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const idNum = parseInt(params.id)
  const product = await getProductFull(idNum)
  if (!product) {
    notFound()
  }
  return (
    <main className="min-h-screen max-w-2xl flex flex-col items-stretch py-6 sm:px-12 m-auto">
      <Link
        href="/"
        className="flex h-16 w-32 items-center justify-center text-lg rounded-lg m-1 p-4 border z-10 bg-blue-600 border-blue-600 text-white"
      >
        &lt; Back
      </Link>
      <div className="p-6 m-1 border rounded-lg flex flex-col">
        <hgroup className="py-2">
          <h1 className="text-2xl">{product.name}</h1>
          <h2 className="text-green-700 col-span-2 text-md">
            Category: {product.category}
          </h2>
        </hgroup>
        <p className="py-4 text-blue-600">{product.description}</p>
        <span className="text-red-700 ml-auto">
          Price: {`${product.currency} ${product.price}`}
        </span>
      </div>
    </main>
  )
}
