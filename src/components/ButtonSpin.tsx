import { SvgSpin } from "@svg/SvgSpin";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isLoading?: boolean;
};

export const ButtonSpin = (props: Props) => {
  const { children, isLoading, ...rest } = props;
  return (
    <button
      type="submit"
      className="w-full flex justify-center bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      {...rest}
    >
      {isLoading ? <SvgSpin /> : null}
      {children}
    </button>
  );
};
