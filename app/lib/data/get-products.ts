import { unstable_noStore as noStore } from 'next/cache'
import { Product } from "@/app/lib/definitions"
import { http } from "./http-request"

const productUrl = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd'

const ITEMS_PER_PAGE = 8

export async function getFilteredProducts(query: string, currentPage: number): Promise<Product[]> {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE
    noStore()

    const data = await http<{ products: Product[] }>(productUrl)
    if ('error' in data) {
        // error. TODO. памылку трэба б пракінуць?
        return []
    }
    let products = data.products
    if (query !== '') {
        products = products.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase()))
    }
    return products.slice(offset, offset + ITEMS_PER_PAGE)
}

export async function getProductsPages(query: string): Promise<number> {
    noStore()

    let pages = 1
    const data = await http<{ products: Product[] }>(productUrl)
    if ('error' in data) {
        // error. TODO. памылку трэба б пракінуць?

    }
    else {
        let products = data.products
        if (query !== '') {
            products = products.filter(prod => prod.name.toLowerCase().includes(query.toLowerCase()))
        }
        pages = Math.ceil(products.length / ITEMS_PER_PAGE)
    }
    return pages
}