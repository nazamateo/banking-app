import { useEffect, useState } from "react";

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
    setCurrentPage(+e.target.textContent);
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
        className={classNames.pageNumbers}
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
  className,
  pages,
  currentPage,
  pageFunctions,
  getPaginationGroup,
}) {
  const [isPrevDisable, setIsPrevDisable] = useState(false);
  const [isNextDisable, setIsNextDisable] = useState(false);

  useEffect(() => {
    setIsPrevDisable(false);
    setIsNextDisable(false);

    if (currentPage === 1) {
      setIsPrevDisable(true);
    }

    if (currentPage === pages || pages === 0) {
      setIsNextDisable(true);
    }
  }, [currentPage]);

  return (
    <div className={className.container}>
      <button onClick={pageFunctions.prevPage} disabled={isPrevDisable}>
        <i className="las la-arrow-left" />
      </button>

      {getPaginationGroup().map((element, index) => {
        if (element <= pages) {
          return (
            <button
              key={index}
              onClick={pageFunctions.changePage}
              className={
                currentPage === element ? className.activeElement : null
              }
            >
              {element}
            </button>
          );
        }
        return false;
      })}

      <button onClick={pageFunctions.nextPage} disabled={isNextDisable}>
        <i className="las la-arrow-right" />
      </button>
    </div>
  );
}

export default TablePagination;
