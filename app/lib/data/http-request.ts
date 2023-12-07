export async function http<T>(url: string, config: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(url, config)
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const body = await response.json()
        return body
    } catch (error) {
        if (error instanceof Error) {
            error.message = 'Failed to fetch data.'
        }
        throw error
    }
}