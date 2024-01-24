import { getLocalStorageItem, setLocalStorageItem } from "@util/LocalStore";
import { LOCAL_STORE_NAME } from "@constant/LocalStore";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
type Props = {
  children: ReactNode;
};

type DarkModeContextValue = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextValue | undefined>(
  undefined
);

export const DarkModeProvider = ({ children }: Props) => {
  const isDarkModeLocalStore = getLocalStorageItem(
    LOCAL_STORE_NAME.IS_DARK_MODE
  );

  const parseIsDarkModeLocalStore: boolean = isDarkModeLocalStore
    ? JSON.parse(isDarkModeLocalStore)
    : false;

  const [isDarkMode, setIsDarkMode] = useState(parseIsDarkModeLocalStore);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevMode) => {
      setLocalStorageItem(LOCAL_STORE_NAME.IS_DARK_MODE, String(!prevMode));
      return !prevMode;
    });
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`${isDarkMode ? "dark" : ""} min-h-screen`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
