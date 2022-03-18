import React, { useEffect, useState } from "react";
import "./pagination.scss";

//headers - headers of the table
//data - array of the data to be in paginated form
//Component - react component to show paginated data
//pageLimit - number of pages to be shown in pagination
//dataLimit - number of rows to be shown in each page
//componentFunction - function to pass to a button or any component that needs a function

function TablePagination({
  classNames,
  headers,
  data,
  Component,
  pageLimit,
  dataLimit,
}) {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function toNextPage() {
    setCurrentPage(page => page + 1);
  }
  function toPrevPage() {
    setCurrentPage(page => page - 1);
  }
  function changePage(e) {
    setCurrentPage(parseInt(e.target.textContent));
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;

    return data.slice(startIndex, endIndex);
  };
  function getPaginationGroup() {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, i) => start + i + 1);
  }

  useEffect(() => {
    setCurrentPage(1);
    setPages(Math.ceil(data.length / dataLimit));
  }, [data]);

  return (
    <>
      <div>
        <table className={classNames.table}>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getPaginatedData().map((data, i) => (
              <Component key={i} userInfo={data} />
            ))}
          </tbody>
        </table>
      </div>
      <PageNumbers
        classNames={classNames.pageNumbers}
        pages={pages}
        currentPage={currentPage}
        pageFunctions={{
          prevPage: toPrevPage,
          nextPage: toNextPage,
          changePage: changePage,
        }}
        getPaginationGroup={getPaginationGroup}
      />
    </>
  );
}

function PageNumbers({
  classNames,
  pages,
  currentPage,
  pageFunctions,
  getPaginationGroup,
}) {
  return (
    <div className="pagination">
      <button
        onClick={pageFunctions.prevPage}
        className={`prev ${currentPage === 1 ? "disabled" : ""}`}
      >
        ←
      </button>

      {getPaginationGroup().map((element, index) => {
        if (element <= pages) {
          return (
            <button
              key={index}
              onClick={pageFunctions.changePage}
              className={`paginationItem ${
                currentPage === element ? "active" : null
              }`}
            >
              {element}
            </button>
          );
        }
      })}

      <button
        onClick={pageFunctions.nextPage}
        className={`next ${currentPage === pages ? "disabled" : ""}`}
      >
        →
      </button>
    </div>
  );
}

export default TablePagination;
