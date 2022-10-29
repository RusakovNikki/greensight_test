import { useEffect, useState } from "react"


const useProducts = (URL) => {
    const [isLoading, setLoading] = useState(true)
    const [items, setItems] = useState([])


    useEffect(() => {
        setLoading(true)

        fetch(URL)
            .then((res) => res.json())
            .then((json) => setItems((_) => json.items))
            .then((_) => setLoading(false))
    }, [])

    return [
        items, isLoading
    ]
}

export default useProducts