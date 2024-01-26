import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { Friend } from "./Friend";
import { useEffect } from "react";
import { getFriendsThunk } from "@/store/friend/friendThunk";
import { clearFriendStore } from "@/store/friend/friendSlice";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  handleOpenModal: () => void;
};

export const ListFriend = (props: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userStore.user);
  const { friends, page, totalPage } = useAppSelector(
    (state) => state.friendStore
  );

  const getFriend = () => {
    if (user) {
      const params = {
        userId: user._id,
        page: 1,
        totalPage,
      };
      dispatch(getFriendsThunk(params));
    }
  };

  const clearFriend = () => {
    dispatch(clearFriendStore(null));
  };

  useEffect(() => {
    getFriend();
    return clearFriend;
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Danh sách bạn bè</span>
        <span className="flex items-center justify-center bg-gray-300 dark:text-gray-900 h-4 w-4 rounded-full">
          {friends.length}
        </span>
      </div>
      <div
        id="friendScroll"
        className="flex flex-col space-y-1 mt-4 -mx-2 h-100vh-360px overflow-y-auto"
      >
        <InfiniteScroll
          dataLength={friends.length + 15}
          next={getFriend}
          hasMore={totalPage >= page}
          loader={<h4>Loading...</h4>}
          scrollableTarget="friendScroll"
        >
          {/* <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend /> */}
          {friends.map((item) => {
            return <Friend key={item._id} {...item} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};
