import { DataError } from "../definitions"

export async function http<T>(url: string, config: RequestInit = {}): Promise<T | DataError> {
    try {
        const response = await fetch(url, config)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const body = await response.json()
        return body
    } catch (error) {
        let message = 'Failed to fetch data.'
        if (error instanceof Error) {
            message = `${message} Error: ${error.message}`
        }
        return { error: message }
    }
}