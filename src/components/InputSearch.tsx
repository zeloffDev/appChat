import * as React from "react";
import { SvgSearch } from "@svg/SvgSearch";

type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  (props, ref) => {
    const { ...rest } = props;
    return (
      <div className="mt-[15px] mx-[10px] relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SvgSearch />
        </span>
        <input
          className="w-full pl-10 h-[40px] outline-none focus:border-blue-500 focus:outline-none rounded-20px  border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search"
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);
