import { getProductFull } from "@/app/lib/data/get-product-full"
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div>{product.name}</div> 
       <p className="text-blue-600">{product.description}</p> 
    </main>
  )
}
