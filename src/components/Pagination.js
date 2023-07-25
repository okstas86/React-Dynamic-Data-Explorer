const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    const pageNumbers = [];
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfMaxVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <span className="pagination-button" onClick={handlePrevPage}>
        Назад
      </span>
      <div className="page-numbers">
        {getPageNumbers().map((page) => (
          <span
            key={page}
            className={`page-number ${page === currentPage ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
      </div>
      <span className="pagination-button" onClick={handleNextPage}>
        Далее
      </span>
    </div>
  );
};

export default Pagination;
