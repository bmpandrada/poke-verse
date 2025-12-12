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
                  px-3 py-1 rounded transition duration-300
                  ${
                    currentPage === p
                      ? "bg-base-content text-white"
                      : "bg-base-content/60 text-gray-200 hover:bg-base-content"
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
