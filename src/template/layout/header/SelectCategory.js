import React from "react";

function SelectCategory() {
  return (
    <div className="d-flex">
      <i className="fa-solid fa-magnifying-glass ms-1 mt-2" />
      <select className="border border-0 mt-15 ms-1 text-secondary w-100 rounded-3">
        <option value="" disabled selected>
          Choose Category...
        </option>
      </select>
    </div>
  );
}

export default SelectCategory;
