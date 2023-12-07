import { getProductFull } from "@/app/lib/data/get-product-full"
import LinkBack from "@/app/ui/link-back"
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
    <main className="main-container items-stretch">
      <LinkBack />
      <div className="p-6 m-1 border rounded-lg flex flex-col">
        <hgroup className="py-2">
          <h1 className="text-2xl text-blue-950">{product.name}</h1>
          <h2 className="text-green-700 col-span-2 text-md">
            Category: {product.category}
          </h2>
        </hgroup>
        <p className="py-4 text-gray-700">{product.description}</p>
        <span className="text-red-700 ml-auto">
          Price: {`${product.currency} ${product.price}`}
        </span>
      </div>
    </main>
  )
}
