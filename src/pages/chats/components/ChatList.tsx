import { useCustomModal } from "@/components/CustomModal";
import { InputSearch } from "@/components/InputSearch";
import { SvgAddFriend } from "@/components/SvgComponent/SvgAddFriend";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { setScreenFrameChat } from "@/store/screen/screenSlice";
import { useCallback, useState } from "react";
import AddFriend from "./AddFriend";
import ItemFriendChat from "./ItemFriendChat";

type Props = {};

export const ChatList = (props: Props) => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(1);
  const { Modal, handleOpenModal } = useCustomModal();
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
        <InputSearch />
        <div className="w-full mt-[15px] border-t" />
        <div className="flex justify-between items-center">
          <p className="mt-[8px] font-semibold text-allChats dark:text-white leading-5">
            All Chats
          </p>
          <button
            onClick={handleOpenModal}
            className="mt-[15px] flex items-center"
          >
            <SvgAddFriend /> <p className="ml-2 ">Add friend</p>
          </button>
          <Modal>
            <AddFriend />
          </Modal>
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
