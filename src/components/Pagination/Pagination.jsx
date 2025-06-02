"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
const Pagination = ({ metadata }) => {
  const { currentPage, numberOfPages, nextPage, prevPage, hasNext, hasPrev } =
    metadata;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        disabled={!hasPrev}
        onClick={() => handlePageChange(prevPage)}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Prev
      </button>

      {Array.from({ length: numberOfPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded border text-sm transition-colors duration-200 ${
              isActive
                ? "bg-[var(--main-color)] text-white font-bold"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        );
      })}
      <button
        disabled={!hasNext}
        onClick={() => handlePageChange(nextPage)}
        className="px-3 py-1 rounded border text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
