"use client"
import Link from "next/link"
import { generatePagination } from "@/app/lib/utils"
import { usePathname, useSearchParams } from "next/navigation"

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const allPages = generatePagination(currentPage, totalPages)

  return (
    <>
      <div className="inline-flex">
        {/* left arrow here */}
        <div className="flex -space-x-px">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined

            if (index === 0) position = "first"
            if (index === allPages.length - 1) position = "last"
            if (allPages.length === 1) position = "single"
            if (page === "...") position = "middle"

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            )
          })}
        </div>

        {/* right arrow here */}
      </div>
    </>
  )
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string
  href: string
  position?: "first" | "last" | "middle" | "single"
  isActive: boolean
}) {
  let className = "flex h-10 w-10 items-center justify-center text-sm border"
  if (position === "first" || position === "single") {
    className += "rounded-l-md"
  }
  if (position === "last" || position === "single") {
    className += "rounded-r-md"
  }
  if (position === "middle") {
    className += "text-gray-300"
  }
  if (!isActive && position !== "middle") {
    className += "hover:bg-gray-100"
  }
  if (isActive) {
    className += "z-10 bg-blue-600 border-blue-600 text-white"
  }

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}
