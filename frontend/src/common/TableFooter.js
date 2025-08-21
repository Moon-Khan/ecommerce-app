import React from "react";

function TableFooter({ totalDataCount, page, dataPerPage, setPage, setDataPerPage }) {
  // if (!totalDataCount) return null;

  const totalPages = Math.ceil(totalDataCount / dataPerPage);

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems: "center" }}>
      {/* Rows per page selector */}
      <select
        value={dataPerPage}
        onChange={(e) => {
          setDataPerPage(Number(e.target.value));
          setPage(1); // reset to first page on rows change
        }}
      >
        {[5, 10, 20, 50].map((size) => (
          <option key={size} value={size}>
            {size} / page
          </option>
        ))}
      </select>

      {/* Page navigation */}
      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}

export default TableFooter;