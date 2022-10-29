import React from "react"

import preview from "../assets/img/preview_company.svg"

const JobBlock = ({ employer, schedule, area, name, snippet }) => {
  //employer, schedule, area, name, snippet

  return (
    <>
      <div className="jobs-container__item">
        <div className="jobs-container__flex-item">
          <div className="jobs-container__logo-container">
            <img
              src={employer.logo_urls?.original || preview}
              alt="логотип компании"
              className="jobs-container__logo"
            />
          </div>

          <div className="jobs-container__about about rubik-regular">
            <p className="about__type">
              Form:
              <span className="about__desc"> {schedule.id}</span>
            </p>

            <p className="about__type">
              Company:
              <span className="about__desc"> {employer.name}</span>
            </p>

            <p className="about__type">
              Web:
              <span className="about__desc">
                https://www.soloprotect.com/uk/
              </span>
            </p>

            <p className="about__type">
              Address:
              <span className="about__desc"> {area.name}</span>
            </p>
          </div>
        </div>
        <div className="jobs-container__flex-item">
          <div className="jobs-container__desc">
            <div className="jobs-container__title roboto">{name}</div>
            <div className="jobs-container__specifics roboto">
              {snippet.responsibility}
            </div>
          </div>
          <div className="jobs-container__more-btn roboto">more details</div>
        </div>
      </div>
    </>
  )
}

export default JobBlock
