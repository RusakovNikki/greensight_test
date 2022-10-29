import React from "react"
import useProducts from "../../hooks/products"
import JobBlock from "../JobBlock"
import Skeleton from "./Skeleton"

const ShowJobs = ({ sortByType }) => {
  const URL = `https://api.hh.ru/vacancies`

  const [items, isLoading] = useProducts(URL)

  const skeletons = [...new Array(5)].map((_, index) => (
    <Skeleton key={index} />
  ))
  const jobItems = items
    .map((item) => {
      return <JobBlock key={item.id} {...item} />
    })
    .filter((item, index) => index < 5)
    .filter((item) =>
      sortByType.sortBy ? item.props.schedule.id === sortByType.sortBy : item
    )

  return (
    <section className="jobs-container">
      {isLoading ? skeletons : jobItems}
    </section>
  )
}

export default ShowJobs
