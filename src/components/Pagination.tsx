import React, { useCallback } from "react";

interface PaginationProps {
  pageList: (number | string)[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  scrollTop?: boolean;
}

const Pagination = React.memo(
  ({
    pageList,
    currentPage,
    setCurrentPage,
    scrollTop = true,
  }: PaginationProps) => {
    const handleClick = useCallback(
      (page: number) => {
        setCurrentPage(page);
        if (scrollTop) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      [setCurrentPage, scrollTop],
    );

    return (
      <div className='max-w-md sm:max-w-lg lg:max-w-3xl mx-auto px-2 mt-6'>
        <div className='flex flex-wrap justify-center gap-2'>
          {pageList.map((p, idx) =>
            p === "..." ? (
              <span key={idx} className='px-3 py-1 text-white'>
                ...
              </span>
            ) : (
              <button
                key={idx}
                onClick={() => handleClick(Number(p))}
                className={`
                  px-3 py-1 rounded transition duration-300 cursor-pointer
                  ${
                    currentPage === p
                      ? "bg-blue-600 hover:bg-blue-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }
                `}
              >
                {p}
              </button>
            ),
          )}
        </div>
      </div>
    );
  },
);

export default Pagination;
