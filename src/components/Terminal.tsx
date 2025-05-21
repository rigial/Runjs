import { memo } from 'react';
import { ITerminal } from '../utils/interface';

function Terminal({ consoleRef, clearTerminal }: ITerminal) {
  return (
    <section className="h-full w-full flex flex-col">
      <div className="w-full flex justify-between overflow-x-auto border-[1px] border-WindowBorder no-select">
        <div className="flex items-center gap-2 bg-cblack py-2 px-3 border-r-[1px] border-r-WindowBorder hover:cursor-pointer">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z"
                fill="#ffffff"
              ></path>{' '}
              <path d="M15 14H11V16H15V14Z" fill="#ffffff"></path>{' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z"
                fill="#ffffff"
              ></path>{' '}
            </g>
          </svg>
          <p className="text-white text-sm">Terminal</p>
        </div>
        <button onClick={clearTerminal} className="mr-2">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19"
              ></path>{' '}
            </g>
          </svg>
        </button>
      </div>
      <div className="h-full w-full no-select" ref={consoleRef} />
    </section>
  );
}

export default memo(Terminal);
