import ChatOnboard from "@/components/ChatOnboard";
import { InputSearch } from "@/components/InputSearch";
import { useState } from "react";
import { ListFriend } from "./components/ListFriend";
import { ListFriendRequest } from "./components/ListFriendRequest";
import AddFriend from "./components/AddFriend";

export interface IFriendProps {}

export default function Friend(props: IFriendProps) {
  const [active, setActive] = useState(1);

  const tabs = [
    { value: 1, label: "All Friend" },
    { value: 2, label: "Add Friend" },
    { value: 3, label: "Friend Request" },
  ];

  const handleActive = (value: number) => {
    setActive(value);
  };

  const renderContentTab = () => {
    switch (active) {
      case 2:
        return <AddFriend />;
      case 3:
        return <ListFriendRequest />;

      default:
        return <ListFriend />;
    }
  };

  return (
    <div className="flex text-xs w-full">
      <div className="sm:w-[350px] w-full border-r bg-bgChatList dark:border-none dark:bg-gray-800">
        <div className="mx-[20px]">
          <div className="font-bold text-2xl leading-10 mt-[15px]">Friends</div>
          <InputSearch />
          <div className="w-full mt-[15px] border-t" />
          <div className=" font-semibold text-allChats dark:text-white text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              {tabs.map((item) => {
                const isActive = item.value === active;
                return (
                  <li
                    onClick={() => handleActive(item.value)}
                    key={item.value}
                    className=" cursor-pointer"
                  >
                    <p
                      className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg 
                    ${
                      isActive
                        ? "text-active border-active"
                        : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }`}
                    >
                      {item.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {renderContentTab()}
      </div>
      <div className="flex-1 sm:block hidden">
        <ChatOnboard />
      </div>
    </div>
  );
}
