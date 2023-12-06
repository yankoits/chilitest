import { Suspense } from "react"
import { getProductsPages } from "@/app/lib/data/get-products"
import Search from "@/app/ui/search"
import Pagination from "@/app/ui/pagination"
import ProductList from "./ui/product-list"

export default async function Home({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string }
}) {
  
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1

  const totalPages = await getProductsPages(query)
  return (
    <main className="min-h-screen max-w-2xl flex flex-col items-stretch justify-between py-6 sm:px-12 m-auto">
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  )
}
