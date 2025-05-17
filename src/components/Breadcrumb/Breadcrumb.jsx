import Link from "next/link";
import React from "react";

function Breadcrumb({ crumbs }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-700">
        {crumbs.map((element, index) => (
          <React.Fragment key={index}>
            <li>
              <Link
                href={element.path}
                className="block transition-colors hover:text-gray-900 text-lg font-semibold"
                aria-label={element.name}
              >
                {element.name}
              </Link>
            </li>
            {index + 1 !== crumbs.length ? (
              <p className="text-[var(--main-color)] text-2xl">/ </p>
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
