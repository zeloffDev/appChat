import { useState } from "react";
import { DarkModeSwitchButton } from "./DarkModeSwitchButton";
import { SvgSetting } from "@svg/SvgSetting";
import { useAppDispatch } from "@/store/Hook";
import { useNavigate } from "react-router-dom";
import { signOut } from "@/store/user/userSlice";
import { PATH_NAME } from "@/constants/PathName";

export interface IButtonSettingProps {}

export default function ButtonSetting(props: IButtonSettingProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [screenSetting, setScreenSetting] = useState(false);

  const handleScreenSetting = () => {
    setScreenSetting((prev) => !prev);
  };

  const handleSignOut = () => {
    dispatch(signOut(null));
    navigate(PATH_NAME.SIGN_IN);
  };

  return (
    <div className="relative">
      <button
        onClick={handleScreenSetting}
        className="w-[48px] h-[48px]  mt-[15px] cursor-pointer rounded-xl flex items-center justify-center"
      >
        <SvgSetting />
      </button>
      <div
        className={`absolute z-[1] top-[20px] left-[50px] bg-white p-2 rounded-xl text-xs dark:bg-gray-600 
        ${screenSetting ? "" : "hidden "}`}
      >
        <button
          onClick={handleSignOut}
          className="flex items-center justify-center w-full bg-active hover:bg-blue-500 rounded-xl text-white px-4 py-2 flex-shrink-0"
        >
          <span>SignOut</span>
        </button>
        <div className="flex mt-[10px] gap-1 items-center">
          Theme: <DarkModeSwitchButton />
        </div>
      </div>
    </div>
  );
}
