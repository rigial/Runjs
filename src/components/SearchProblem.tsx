import { memo } from 'react';

function SearchProblem() {
  return (
    <div className="relative w-2/4">
      <input
        type="text"
        id="Search"
        placeholder="Search for problem, tagname..."
        className="w-full rounded-md border-black border-[2px] px-2 py-2.5 pe-10 shadow-sm sm:text-sm bg-inherit focus:outline-none"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <div className="text-gray-600">
          <span className="sr-only">Search</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </span>
    </div>
  );
}

export default memo(SearchProblem);
