import { useDarkMode } from "@Contexts/ThemeContext";
import { DarkModeSwitchButton } from "@/components/DarkModeSwitchButton";

type Props = {};

export const PersonalInformation = (props: Props) => {
  const darkModeContext = useDarkMode();
  if (!darkModeContext) return null;
  const { isDarkMode } = darkModeContext;
  return (
    <div className="flex flex-col items-center bg-indigo-100 dark:bg-gray-500/20  border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
      <div className="h-20 w-20 rounded-full border overflow-hidden">
        <img
          src="https://avatars3.githubusercontent.com/u/2763884?s=128"
          alt="Avatar"
          className="h-full w-full"
        />
      </div>
      <div className="text-sm font-semibold mt-2">Zeloff.</div>
      <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
      <div className="flex flex-row items-center mt-3">
        <div className="leading-none mr-1 text-xs">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </div>
        <DarkModeSwitchButton />
      </div>
    </div>
  );
};
