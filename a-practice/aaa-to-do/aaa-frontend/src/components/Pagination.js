const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Always render, but disable buttons if only one page
  const isIdle = totalPages <= 1;

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isIdle}
      >
        Prev
      </button>
      <span>
        Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isIdle}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
