import { useState } from "react"

export const useFetching = (callback: () => Promise<void>) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>()

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e: any) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}