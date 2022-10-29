import React from "react"
import { useState } from "react"

import btnClose from "../assets/img/close-btn.svg"
import SortForm from "./SortForm"
import SortPosition from "./SortPosition"

const Header = ({ sortByType, setSortByType }) => {
  const [positionForm, setPositionForm] = useState(false)

  return (
    <header className="header">
      <h1 className="title header__title rubik-light">List of vacancies</h1>
      <div className="header__sortby sortby">
        <SortForm
          sortByType={sortByType}
          setSortByType={setSortByType}
          setPositionForm={setPositionForm}
          positionForm={positionForm}
        />
        <SortPosition sortByType={sortByType} setSortByType={setSortByType} />
        <div
          className="header__clear"
          onClick={() =>
            setSortByType({ nameSort: "", sortBy: "", searchByPosition: "" })
          }
        >
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
