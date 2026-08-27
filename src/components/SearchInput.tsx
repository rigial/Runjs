import { Fragment, memo } from 'react';
import { Link } from 'react-router';
import { ISearchInput } from '../utils/interface';

function SearchInput({
  showFavourite,
  isFavouriteSelected,
  dialogRef,
  onInputChange,
  searchTerm,
  setIsFavouriteSelected,
}: ISearchInput) {
  return (
    <div className="flex justify-between items-center">
      <div className="relative w-2/4">
        <label htmlFor="Search" className="sr-only">
          {' '}
          Search{' '}
        </label>

        {!showFavourite ? (
          <Fragment>
            <input
              value={searchTerm}
              onChange={(e) => onInputChange(e.target.value.toLowerCase())}
              type="text"
              id="Search"
              placeholder="Search for filename, tagname..."
              className="w-full rounded-md border-black border-2 px-2 py-2.5 pe-10 shadow-sm sm:text-sm bg-inherit focus:outline-none"
            />

            <span className="absolute inset-y-0 inset-e-0 grid w-10 place-content-center">
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
          </Fragment>
        ) : null}
      </div>
      <div>
        <span className="inline-flex overflow-hidden rounded-md border-black border-2 shadow-sm">
          <button
            className="inline-block border-e-black border-e-2 p-3 text-black focus:relative"
            title="Edit Product"
            onClick={() => dialogRef?.current?.open()}
          >
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>

          {!showFavourite ? (
            <button
              title="Show favorites"
              className="inline-block border-e-black border-e-2 p-3 text-black focus:relative"
              onClick={() => setIsFavouriteSelected((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                stroke="currentColor"
                fill={isFavouriteSelected ? 'red' : 'black'}
              >
                <path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" />
              </svg>
            </button>
          ) : null}

          <Link
            to={'/bin'}
            className="inline-block p-3 text-black focus:relative"
            title="Delete Product"
          >
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default memo(SearchInput);
