import { useAppSelector } from "@/store/Hook";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemFriendRequest from "./ItemFriendRequest";

type Props = {
  getListFriendRequest: (skip: number, limit: number) => void;
};

export const ListFriendRequest = (props: Props) => {
  const { getListFriendRequest } = props;
  const { friendsRequest, next, limit, skip } = useAppSelector(
    (state) => state.friendStore
  );

  return (
    <div
      id="friendsRequestScroll"
      className=" h-100vh-194px overflow-auto mt-[18px]"
    >
      <div className="mx-[20px] ">
        <InfiniteScroll
          dataLength={friendsRequest.length}
          next={() => getListFriendRequest(skip, limit)}
          hasMore={next}
          loader={<h4>Loading...</h4>}
          scrollableTarget="friendsRequestScroll"
        >
          {friendsRequest.map((item) => {
            return <ItemFriendRequest key={item._id} {...item} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};
