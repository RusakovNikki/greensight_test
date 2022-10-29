import React from "react"
import useProducts from "../hooks/products"
import Parser from "html-react-parser"

import preview from "../assets/img/preview_company.svg"
import { useState } from "react"

const JobBlock = ({ id }) => {
  const [showMoreDesc, setShowMoreDesc] = useState(true)

  const URL_EMPLOYER = `https://api.hh.ru/vacancies/${id}`
  const [item] = useProducts(URL_EMPLOYER)

  const { employer, schedule, area, name, description, alternate_url } = item

  return (
    <>
      {item && (
        <div className="jobs-container__item">
          <div className="jobs-container__flex-item">
            <div className="jobs-container__logo-container">
              <img
                src={employer?.logo_urls?.original || preview}
                alt="логотип компании"
                className="jobs-container__logo"
              />
            </div>

            <div className="jobs-container__about about rubik-regular">
              <p className="about__type">
                Form:
                <span className="about__desc"> {schedule?.name}</span>
              </p>

              <p className="about__type">
                Company:
                <span className="about__desc"> {employer?.name}</span>
              </p>

              <p className="about__type">
                Web:
                <span className="about__desc">
                  <a href={alternate_url}>{alternate_url}</a>
                </span>
              </p>

              <p className="about__type">
                Address:
                <span className="about__desc"> {area?.name}</span>
              </p>
            </div>
          </div>
          <div className="jobs-container__flex-item">
            <div className="jobs-container__desc">
              <div className="jobs-container__title roboto">{name}</div>
              <div
                className={`jobs-container__specifics ${
                  showMoreDesc ? "jobs-container__specifics--height" : ""
                } roboto`}
              >
                {Parser(String(description))}
              </div>
            </div>
            <div
              className="jobs-container__more-btn roboto"
              onClick={() => setShowMoreDesc((prev) => !prev)}
            >
              {showMoreDesc ? `more details` : "close"}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default JobBlock
