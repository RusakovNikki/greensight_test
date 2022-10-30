import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import useJobFilter from "../../hooks/jobItems"
import NotFoundBlock from "../NotFoundBlock"

const ShowJobs = ({ sortByType }) => {
  const URL = `https://api.hh.ru/vacancies`
  const countElementsOnPage = 5

  const [page, setPage] = useState(1)
  const [items, isLoading, jobItems, skeletons] = useJobFilter(URL, sortByType)

  useEffect(() => {
    setPage(1)
  }, [sortByType])

  const jobsFiltered = jobItems?.filter(
    (_, index) => index < countElementsOnPage * page
  )

  const chowJobsFiltred = jobsFiltered.length ? jobsFiltered : <NotFoundBlock />
  const countPajeFilt = Boolean(
    Math.floor(jobsFiltered.length / countElementsOnPage)
  )
  const maxCountPage = items.length / countElementsOnPage

  return (
    <section className="jobs-container">
      {isLoading ? skeletons : chowJobsFiltred}
      {page < maxCountPage && countPajeFilt && (
        <button className="button" onClick={() => setPage((prev) => ++prev)}>
          Смотреть еще...
        </button>
      )}
    </section>
  )
}

export default ShowJobs
