import { HTMLProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  handleCloseModal: () => void;
  rest?: HTMLProps<HTMLDivElement>;
};

export const Modal = (props: Props) => {
  const { children, isOpen, handleCloseModal, ...rest } = props;
  return (
    <div
      className={`bg-gray-800/30 fixed top-0 left-0 right-0  z-10 
      ${isOpen ? "" : "invisible"}`}
    >
      <div className="flex justify-center items-center text-center  min-h-screen ">
        <div
          className="dark:bg-gray-500 mb-[50px] z-10 bg-bgSideBar rounded-lg mx-[10px] min-h-32 sm:max-w-xl w-full relative"
          {...rest}
        >
          <button
            type="button"
            onClick={handleCloseModal}
            className="absolute right-0 z-10 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
