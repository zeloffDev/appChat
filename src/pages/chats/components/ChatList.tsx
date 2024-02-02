import { useCustomModal } from "@/components/CustomModal";
import { InputSearch } from "@/components/InputSearch";
import { SvgAddFriend } from "@/components/SvgComponent/SvgAddFriend";
import { LIMIT } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { getFriendsThunk } from "@/store/friend/friendThunk";
import { debounce } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AddFriend from "./AddFriend";
import ItemFriendChat from "./ItemFriendChat";

type Props = {};

export const ChatList = (props: Props) => {
  const dispatch = useAppDispatch();
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  const user = useAppSelector((state) => state.userStore.user);
  const friend = useAppSelector((state) => state.chatStore.friend);
  const { friends, limit, next, skip } = useAppSelector(
    (state) => state.friendStore
  );
  const { Modal, handleOpenModal } = useCustomModal();

  const getListFriend = useCallback(
    (skip: number, limit: number) => {
      const params = {
        userId: user._id,
        name: valueSearch,
        skip: skip,
        limit: limit,
      };
      dispatch(getFriendsThunk(params));
    },
    [user, valueSearch]
  );

  const handleSetSearch = debounce((value: string) => {
    setValueSearch(value);
  });

  useEffect(() => {
    getListFriend(0, LIMIT.LIMIT_20);
  }, [valueSearch]);

  return (
    <div
      className={` sm:w-[350px] bg-bgChatList border-r dark:border-none dark:bg-gray-800 
      ${friend._id ? "hidden sm:block" : "w-full "}`}
    >
      <div className="mx-[20px]">
        <div className="font-bold text-2xl leading-10 mt-[15px]">Chats</div>
        <InputSearch
          onChange={(e) => {
            handleSetSearch(e.target.value);
          }}
        />
        <div className="w-full mt-[15px] border-t" />
        <div className="flex justify-between items-center">
          <p className="mt-[8px] truncate font-semibold text-allChats dark:text-white leading-5">
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
      <div id="friendScroll" className=" h-100vh-180px overflow-auto mt-[18px]">
        <div className="mx-[20px] ">
          <InfiniteScroll
            dataLength={friends.length}
            next={() => getListFriend(skip, limit)}
            hasMore={next}
            loader={<h4>Loading...</h4>}
            scrollableTarget="friendScroll"
          >
            {friends.map((item) => {
              return <ItemFriendChat key={item._id} item={item} />;
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
