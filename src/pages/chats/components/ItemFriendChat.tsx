import { AvatarDefault } from "@/assets/Base64/AvatarDefault";
import { CustomImg } from "@/components/CustomImg";
import { memo } from "react";

export interface IAppProps {
  active: number;
  value: number;
  name: string;
  lastMessage: string;
  time: string;
  handleSetActive: (value: number) => void;
}

function ItemFriendChat(props: IAppProps) {
  const { active, value, name, lastMessage, time, handleSetActive } = props;
  const isActive = active === value;

  return (
    <button
      onClick={() => handleSetActive(value)}
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center cursor-pointer 
      ${
        isActive
          ? "bg-active text-white"
          : "bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-500"
      }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg src={AvatarDefault} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left">
        <p className="font-semibold text-sm">{name}</p>
        <p
          className={`font-normal  truncate dark:text-white
          ${isActive ? "text-white" : "text-lastMassage"}`}
        >
          {lastMessage}
        </p>
      </div>
      <div className="text-end flex-auto ml-2 text-timeMassage mr-[25px]">
        <p className={isActive ? "text-white" : "dark:text-white"}>{time}</p>
        <p
          className={`w-[15px] h-[15px] mt-1 rounded-full float-right text-white flex items-center justify-center text-center ${
            isActive ? "bg-blue-600" : "bg-blueItem"
          }`}
        >
          2
        </p>
      </div>
    </button>
  );
}

export default memo(ItemFriendChat);
