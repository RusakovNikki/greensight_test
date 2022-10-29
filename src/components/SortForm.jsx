import btnDown from "../assets/img/down-btn.svg"

import React from "react"

const SortForm = ({
  sortByType,
  setSortByType,
  setPositionForm,
  positionForm,
}) => {
  return (
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
              ...sortByType,
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
  )
}

export default SortForm
