import React from "react"
import { useState } from "react"

import btnDown from "../assets/img/down-btn.svg"
import btnClose from "../assets/img/close-btn.svg"

const Header = ({ sortByType, setSortByType }) => {
  const [positionForm, setPositionForm] = useState(false)

  return (
    <header className="header">
      <h1 className="title header__title rubik-light">List of vacancies</h1>
      <div className="header__sortby sortby">
        <div
          className="sortby__form form-item"
          onClick={() => setPositionForm((prev) => !prev)}
        >
          <p className="form-item__title rubik-regular">Form</p>
          <input
            value={sortByType.nameSort}
            type="text"
            placeholder="Not selected"
            className="form-item__field rubik-regular"
          />
          <div
            className={`header__show-btn ${
              positionForm ? "header__show-btn--rotate" : ""
            }`}
          >
            <img src={btnDown} alt="" />
          </div>
          {positionForm && (
            <ul
              className="header__ul"
              onClick={(e) =>
                setSortByType({
                  nameSort: e.target.innerHTML,
                  sortBy: e.target.getAttribute("value"),
                })
              }
            >
              <li value={"fullDay"}>Полный день</li>
              <li value={"remote"}>Удаленная работа</li>
              <li value={"flexible"}>Гибкий график</li>
              <li value={"shift"}>Сменный график</li>
            </ul>
          )}
        </div>
        <div className="header__position form-item">
          <p className="form-item__title rubik-regular">Position</p>
          <input
            type="text"
            placeholder="Unspecified"
            className="form-item__field"
          />
        </div>
        <div className="header__clear">
          <label htmlFor="#close" className="header__title-clear formular">
            Clear sorting
          </label>
          <span className="header__close-btn">
            <img src={btnClose} alt="" id="close" />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
