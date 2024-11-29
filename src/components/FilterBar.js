import React from "react";
import { Link } from "react-router-dom";

const FilterBar = ({ filter, setFilter }) => {
  const filters = ["All", "Applied", "Interviewing", "Offered", "Rejected"];

  return (
    <div className="filter-bar">
      {filters.map((f) => (
        <button key={f} onClick={() => setFilter(f)} className={filter === f ? "active" : ""}>
        {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
