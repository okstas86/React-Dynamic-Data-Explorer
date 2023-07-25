export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};

export const setSearchQuery = (query) => {
  return {
    type: "SET_SEARCH_QUERY",
    payload: query,
  };
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: "SET_CURRENT_PAGE",
    payload: pageNumber,
  };
};

export const setSortOrder = (sortOrder) => {
  return {
    type: "SET_SORT_ORDER",
    payload: sortOrder,
  };
};

export const setSortColumn = (sortColumn) => {
  return {
    type: "SET_SORT_COLUMN",
    payload: sortColumn,
  };
};
