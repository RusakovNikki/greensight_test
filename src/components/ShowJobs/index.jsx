import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import useJobFilter from "../../hooks/jobItems"

const ShowJobs = ({ sortByType }) => {
  const URL = `https://api.hh.ru/vacancies`

  const [page, setPage] = useState(1)
  const [items, isLoading, jobItems, skeletons] = useJobFilter(URL, sortByType)

  useEffect(() => {
    setPage(1)
  }, [sortByType])
  const jobsFiltered = jobItems?.filter((item, index) => index < 5 * page)

  console.log(jobsFiltered.length / 5)
  const maxCountPage = jobsFiltered.length / 5
  return (
    <section className="jobs-container">
      {isLoading ? skeletons : jobsFiltered}
      {page <= maxCountPage && (
        <button className="button" onClick={() => setPage((prev) => ++prev)}>
          Смотреть еще...
        </button>
      )}
    </section>
  )
}

export default ShowJobs
