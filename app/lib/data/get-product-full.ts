import { ProductFull } from "@/app/lib/definitions"
import { http } from "@/app/lib/data/http-request"

const productUrl = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd'

export async function getProductFull(id: number): Promise<ProductFull | null> {
    const data = await http<{ products: ProductFull[] }>(productUrl)
        .catch(error => {
            if (error instanceof Error) {
                error.message = "Failed to fetch product information."
            }
            throw error
        })
    const product = data.products.find(prod => prod.id === id)
    if (product !== undefined) {
        return product
    }
    return null
}