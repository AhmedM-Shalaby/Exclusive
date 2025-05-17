"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Pagination = ({ totalPages, currentPage }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page); // نغير الصفحة
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 rounded border text-sm ${
            page === currentPage
              ? "bg-[var(--main-color)] text-white font-bold"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
