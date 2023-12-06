export type Product = {
    id: number,
    name: string,
    price: number,
    currency: string,
    category: string
}

export type ProductFull = Product & {
    description: string
}

export type DataError = {
    error: string
}