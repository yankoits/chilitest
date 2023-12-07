import { unstable_noStore as noStore } from 'next/cache'
import { Product } from "@/app/lib/definitions"
import { http } from "@/app/lib/data/http-request"

const productUrl = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd'

const ITEMS_PER_PAGE = 8

function filterProducts(prod: Product, query: string): boolean {
    const lcQuery = query.toLowerCase()
    return prod.name.toLowerCase().includes(lcQuery) || prod.category.toLowerCase().includes(lcQuery)
}

export async function getFilteredProducts(query: string, currentPage: number): Promise<Product[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    noStore()

    const data = await http<{ products: Product[] }>(productUrl)
        .catch(error => {
            if (error instanceof Error) {
                error.message = "Failed to fetch products."
            }
            throw error
        })

    let products = data.products
    if (query !== '') {
        products = products.filter(prod => filterProducts(prod, query))
    }
    return products.slice(offset, offset + ITEMS_PER_PAGE)
}

export async function getProductsPages(query: string): Promise<number> {
    noStore()

    let pages = 1
    const data = await http<{ products: Product[] }>(productUrl).catch(error => {
        if (error instanceof Error) {
            error.message = "Failed to fetch product pages."
        }
        throw error
    })

    let products = data.products
    if (query !== '') {
        products = products.filter(prod => filterProducts(prod, query))
    }
    pages = Math.ceil(products.length / ITEMS_PER_PAGE)
    return pages
}