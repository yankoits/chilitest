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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Search />
      <Suspense>
        <ProductList query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  )
}
