import { useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const get = async () => {
        setLoading(true)

        try {
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        error,
        loading,
        get
    }
}

export default useFetch
