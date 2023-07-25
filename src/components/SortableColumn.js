import React from "react";

const SortableColumn = ({ column, sortColumn, sortOrder, onSort }) => {
  const handleClick = () => {
    const newSortOrder =
      sortColumn === column && sortOrder === "asc" ? "desc" : "asc";

    onSort(column, newSortOrder);
  };

  return (
    <th onClick={handleClick} className="sortable-header">
      {column}
      {sortColumn === column && (
        <img
          src={`./arrow.svg`}
          alt="arrow"
          className={`sort-arrow ${sortOrder}`}
        />
      )}
    </th>
  );
};

export default SortableColumn;
