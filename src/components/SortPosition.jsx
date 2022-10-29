import React from "react"

const SortPosition = ({ sortByType, setSortByType }) => {
  return (
    <div className="header__position form-item">
      <label htmlFor="#position" className="form-item__title rubik-regular">
        Position
      </label>
      <input
        id="#position"
        type="text"
        placeholder="Unspecified"
        className="form-item__field"
        value={sortByType.searchByPosition}
        onChange={(e) => {
          setSortByType((prev) => {
            return {
              ...prev,
              searchByPosition: e.target.value,
            }
          })
        }}
      />
    </div>
  )
}

export default SortPosition
