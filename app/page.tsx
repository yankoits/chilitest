import { Suspense } from "react"
import { getProductsPages } from "@/app/lib/data/get-products"
import Search from "@/app/ui/search"
import Pagination from "@/app/ui/pagination"
import ProductList from "./ui/product-list"

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await getProductsPages(query)
  return (
    <main className="main-container items-stretch justify-start">
      <Search />
      <Suspense fallback={<div className="self-center pt-4 text-gray-600">Loading...</div>}>
        <ProductList query={query} currentPage={currentPage} />
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  )
}
