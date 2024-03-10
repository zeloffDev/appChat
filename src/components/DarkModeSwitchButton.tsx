import { useDarkMode } from "@/contexts/ThemeContext";
import { SvgDark } from "@svg/SvgDark";
import { SvgLight } from "@svg/SvgLight";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const DarkModeSwitchButton = (props: Props) => {
  const { className, ...rest } = props;
  const darkModeContext = useDarkMode();
  if (!darkModeContext) return null;
  const { toggleDarkMode } = darkModeContext;
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="switch theme"
      className={` switcher group relative h-6 w-6 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex `}
      {...rest}
    >
      <SvgDark />
      <SvgLight />
    </button>
  );
};
