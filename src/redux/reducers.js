const initialState = {
  usersData: [],
  currentPage: 1,
  totalPages: 1,
  sortColumn: "",
  sortOrder: "asc",
  searchQuery: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        usersData: action.payload,
        totalPages: Math.ceil(action.payload.length / 10),
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_SORT_ORDER":
      return {
        ...state,
        sortOrder: action.payload,
      };
    case "SET_SORT_COLUMN":
      return {
        ...state,
        sortColumn: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
