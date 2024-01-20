import { InputHTMLAttributes, useCallback, useState } from "react";
import { SvgEye } from "@svg/SvgEye";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = (props: Props) => {
  const { ...rest } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = useCallback(() => {
    setIsShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  return (
    <div className="relative w-full">
      <input
        type={isShowPassword ? "" : "password"}
        placeholder="••••••••"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...rest}
      />
      <div
        onClick={handleClickShowPassword}
        className="absolute flex cursor-pointer items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
      >
        <SvgEye />
      </div>
    </div>
  );
};
