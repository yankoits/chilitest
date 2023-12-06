import { ProductFull } from "@/app/lib/definitions"
import { http } from "./http-request"

const productUrl = 'https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd'

export async function getProductFull(id: number): Promise<ProductFull | null> {
    const data = await http<{ products: ProductFull[] }>(productUrl)
    if ('error' in data) {
        // error. TODO. памылку трэба б пракінуць, на самой справе
        return null
    }
    const product = data.products.find(prod => prod.id === id)
    if (product !== undefined) {
        return product
    }
    return null
}