import ChatOnboard from "@/components/ChatOnboard";
import { InputSearch } from "@/components/InputSearch";
import { ItemFriend } from "./components/ItemFriend";

export interface IFriendProps {}

export default function Friend(props: IFriendProps) {
  return (
    <div className="flex text-xs w-full">
      <div className="sm:w-[350px] w-full border-r bg-bgChatList dark:border-none dark:bg-gray-800">
        <div className="mx-[20px]">
          <div className="font-bold text-2xl leading-10 mt-[15px]">Friends</div>
          <InputSearch />
          <div className="w-full mt-[15px] border-t" />
          <div className="flex justify-between items-center">
            <p className="mt-[8px] truncate font-semibold text-allChats dark:text-white leading-5">
              All Friends
            </p>
          </div>
        </div>
        <div className=" h-100vh-180px overflow-auto mt-[18px]">
          <div className="mx-[20px] ">
            <ItemFriend />

            <ItemFriend />
            <ItemFriend />
          </div>
        </div>
      </div>
      <div className="flex-1 sm:block hidden">
        <ChatOnboard />
      </div>
    </div>
  );
}
