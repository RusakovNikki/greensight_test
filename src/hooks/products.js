import { useLayoutEffect, useState } from "react"


const useProducts = (URL) => {
    const [isLoading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useLayoutEffect(() => {
        async function fetchData() {
            setLoading(true)

            await fetch(URL)
                .then((res) => res.json())
                .then((json) => {
                    setItems((_) => json.items ? json.items : json)
                })
                .then((_) => setLoading(false))
        }
        fetchData()
    }, [URL])

    return [
        items, isLoading
    ]
}

export default useProducts