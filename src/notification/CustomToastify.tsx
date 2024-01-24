import { useDarkMode } from "@/Contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

export const CustomToastify = (props: Props) => {
  const darkModeContext = useDarkMode();
  if (!darkModeContext) return null;
  const { isDarkMode } = darkModeContext;
  return <ToastContainer theme={isDarkMode ? "dark" : "light"} />;
};
