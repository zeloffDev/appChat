import { SvgAddFriend } from "@/components/SvgComponent/SvgAddFriend";
import { SvgSearch } from "@/components/SvgComponent/SvgSearch";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { setScreenFrameChat } from "@/store/screen/screenSlice";
import { useCallback, useState } from "react";
import ItemFriendChat from "./ItemFriendChat";

type Props = {};

export const ChatList = (props: Props) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(1);
  const screenFrameChat = useAppSelector(
    (state) => state.ScreenStore.screenFrameChat
  );

  const itemFriends = [
    { value: 1, name: "Zeloff", lastMessage: "Hello", time: "9:30" },
    { value: 2, name: "NoName", lastMessage: "what", time: "1:30" },
    { value: 3, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
    { value: 4, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
    { value: 5, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
    { value: 6, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
    { value: 7, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
    { value: 8, name: "Fei", lastMessage: "Long time no see", time: "2:30" },
  ];

  const handleSetActive = useCallback((value: number) => {
    setActive(value);
    dispatch(setScreenFrameChat(true));
  }, []);

  return (
    <div
      className={`${
        screenFrameChat ? "hidden sm:block" : "w-full "
      } sm:w-[350px] bg-bgChatList border-r dark:border-none dark:bg-gray-800 `}
    >
      <div className="mx-[20px]">
        <div className="font-bold text-2xl leading-10 mt-[15px]">Chats</div>
        <div className="mt-[15px] relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <SvgSearch />
          </span>
          <input
            className="w-full pl-10 h-[40px] outline-none rounded-20px  border border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Search"
          />
        </div>

        <div className="w-full mt-[15px] border-t" />
        <div className="flex justify-between items-center">
          <p className="mt-[8px] font-semibold text-allChats dark:text-white leading-5">
            All Chats
          </p>
          <div className="mt-[15px] flex items-center">
            <SvgAddFriend />{" "}
            <p className="ml-2 text-sky-600 cursor-pointer">Add friend</p>
          </div>
        </div>
      </div>
      <div className=" h-100vh-180px overflow-auto mt-[18px]">
        <div className="mx-[20px] ">
          {itemFriends.map((item) => {
            return (
              <ItemFriendChat
                key={item.value}
                {...item}
                active={active}
                handleSetActive={handleSetActive}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
