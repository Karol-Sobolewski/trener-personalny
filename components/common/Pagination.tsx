import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

export type Props = {
  currentPage: number;
  paginate: (pageNumber: number) => void;
  postsNumber: number | null | undefined;
};

export default function Pagination({
  currentPage,
  paginate,
  postsNumber,
}: Props) {
  const pageNumbers = [];
  const router = useRouter();

  if (!postsNumber) {
    return <Loading />;
  }

  useEffect(() => {
    if (currentPage === 0 || currentPage > totalPages) {
      router.push("/404");
    }
  }, []);

  const totalPages = Math.ceil(postsNumber / 4);

  if (totalPages > 0) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  const handleDecrease = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    } else return;
  };

  const handleIncrease = () => {
    if (totalPages) {
      if (currentPage < totalPages) {
        paginate(currentPage + 1);
      } else return;
    }
  };

  return (
    <div className="inline-flex items-center justify-center gap-3">
      <button
        className={`h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180
        ${currentPage === 1 ? "hidden" : "flex"}`}
        onClick={() => handleDecrease()}
      >
        <span className="sr-only">Poprzednia Strona</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-xs text-gray-900">
        {currentPage}
        <span className="mx-0.25">/</span>
        {totalPages}
      </p>

      <button
        className={`h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180
      ${currentPage === totalPages ? "hidden" : "flex"}`}
        onClick={() => handleIncrease()}
      >
        <span className="sr-only">Następna Strona</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
