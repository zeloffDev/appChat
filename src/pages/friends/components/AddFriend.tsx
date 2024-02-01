import { useAppSelector } from "@/store/Hook";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemAddFriend from "./ItemAddFiend";

export interface IAddFriendProps {
  getListUser: (skip: number, limit: number) => void;
}

export default function AddFriend(props: IAddFriendProps) {
  const { getListUser } = props;
  const { listUser, limit, skip, next } = useAppSelector(
    (state) => state.friendStore
  );
  return (
    <div
      id="friendsRequestScroll"
      className=" h-100vh-194px overflow-auto mt-[18px]"
    >
      <div className="mx-[20px] ">
        <InfiniteScroll
          dataLength={listUser.length}
          next={() => getListUser(skip, limit)}
          hasMore={next}
          loader={<h4>Loading...</h4>}
          scrollableTarget="friendsRequestScroll"
        >
          {listUser.map((item) => {
            return <ItemAddFriend key={item._id} {...item} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
