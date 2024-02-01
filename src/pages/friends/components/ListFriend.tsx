import { useAppSelector } from "@/store/Hook";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemFriend from "./ItemFriend";

type Props = {
  getListFriend: (skip: number, limit: number) => void;
};

export const ListFriend = (props: Props) => {
  const { getListFriend } = props;
  const { friends, limit, next, skip } = useAppSelector(
    (state) => state.friendStore
  );

  return (
    <div id="friendScroll" className=" h-100vh-194px overflow-auto mt-[18px]">
      <div className="mx-[20px] ">
        <InfiniteScroll
          dataLength={friends.length}
          next={() => getListFriend(skip, limit)}
          hasMore={next}
          loader={<h4>Loading...</h4>}
          scrollableTarget="friendScroll"
        >
          {friends.map((item) => {
            return <ItemFriend key={item._id} {...item} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};
