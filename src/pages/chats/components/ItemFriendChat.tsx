import { AvatarDefault } from "@/assets/Base64/AvatarDefault";
import { CustomImg } from "@/components/CustomImg";
import { IResponseGetFriends } from "@/services/friend/friendServiceType";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { setFriend } from "@/store/chat/chatSlice";
import { memo } from "react";

export interface IAppProps {
  item: IResponseGetFriends;
  lastMessage?: string;
  time?: string;
}

function ItemFriendChat(props: IAppProps) {
  const dispatch = useAppDispatch();
  const { item, lastMessage, time } = props;
  const { avatar, name, _id } = item;
  const friend = useAppSelector((state) => state.chatStore.friend);

  const handleSetActive = (item: IResponseGetFriends) => {
    dispatch(setFriend(item));
  };

  const isActive = friend._id === _id ? true : false;
  return (
    <button
      onClick={() => handleSetActive(item)}
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center cursor-pointer 
      ${
        isActive
          ? "bg-active text-white"
          : "bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-500"
      }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg src={avatar} alt="Avatar" className="h-full w-full" />
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
