import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setData,
  setCurrentPage,
  setSortOrder,
  setSortColumn,
  setSearchQuery,
} from "./redux/actions";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import SortableColumn from "./components/SortableColumn";
import SearchBar from "./components/SearchBar";
import "./App.css";
import questionData from "./data.json";

const App = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.usersData);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);
  const sortColumn = useSelector((state) => state.sortColumn);
  const sortOrder = useSelector((state) => state.sortOrder);
  const searchQuery = useSelector((state) => state.searchQuery);

  useEffect(() => {
    dispatch(setData(questionData));
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handleSort = (column, newSortOrder) => {
    dispatch(setSortColumn(column));
    dispatch(setSortOrder(newSortOrder));
  };

  const getPaginatedData = () => {
    const sortedData = usersData.slice().sort((a, b) => {
      if (sortColumn === "ID") {
        return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
      } else if (sortColumn === "Заголовок") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortColumn === "Описание") {
        return sortOrder === "asc"
          ? a.body.localeCompare(b.body)
          : b.body.localeCompare(a.body);
      }
      return 0;
    });

    const idSet = new Set(); // Создаем множество для отслеживания уникальных id
    const filteredAndUniqueData = [];

    for (const data of sortedData) {
      if (!idSet.has(data.id)) {
        idSet.add(data.id);
        filteredAndUniqueData.push(data);
      }
    }

    let filteredData = filteredAndUniqueData;

    if (searchQuery) {
      filteredData = filteredAndUniqueData.filter((data) =>
        Object.values(data).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    return filteredData.slice(startIndex, endIndex);
  };

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <table className="table">
        <thead className="top-table">
          <tr>
            <SortableColumn
              column="ID"
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSort={handleSort}
            />
            <SortableColumn
              column="Заголовок"
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSort={handleSort}
            />
            <SortableColumn
              column="Описание"
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSort={handleSort}
            />
          </tr>
        </thead>
        <Table data={getPaginatedData()} searchQuery={searchQuery} />
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
