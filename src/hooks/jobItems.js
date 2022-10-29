import useProducts from "./products"
import JobBlock from "../components/JobBlock"
import Skeleton from "../components/ShowJobs/Skeleton"

const useJobFilter = (URL, sortByType) => {

    const [items, isLoading] = useProducts(URL)

    const skeletons = [...new Array(5)].map((_, index) => (
        <Skeleton key={index} />
    ))
    let jobItems = items
        .map((item) => {
            return <JobBlock key={item.id} {...item} />
        })
        .filter((item) =>
            sortByType.sortBy ? item.props.schedule.id === sortByType.sortBy : item
        )
        .filter((item) => {
            const searchPosition = item.props.name?.toLowerCase()

            return searchPosition
                ? searchPosition.includes(sortByType.searchByPosition.toLowerCase())
                : item
        })



    return [
        items, isLoading, jobItems, skeletons
    ]
}

export default useJobFilter