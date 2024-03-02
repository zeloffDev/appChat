import { InputSearch } from "@/components/InputSearch";
import ItemAddFriend from "./ItemAddFiend";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { getListUserThunk } from "@/store/friend/friendThunk";
import { LIMIT } from "@/constants/constants";
import { debounce } from "@/utils";
import InfiniteScroll from "react-infinite-scroll-component";

export interface IAddFriendProps {}

export default function AddFriend(props: IAddFriendProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userStore.user);
  const { listUser, limit, skip, next } = useAppSelector(
    (state) => state.friendStore
  );
  const [valueSearch, setValueSearch] = useState<string | null>(null);

  const getListUser = useCallback(
    (skip: number, limit: number) => {
      const params = {
        userId: user._id,
        name: valueSearch,
        skip: skip,
        limit: limit,
      };
      dispatch(getListUserThunk(params));
    },
    [user, valueSearch]
  );

  const handleSetSearch = debounce((value: string) => {
    setValueSearch(value);
  });

  useEffect(() => {
    getListUser(0, LIMIT.LIMIT);
  }, [valueSearch]);

  return (
    <div className="m-[20px]">
      <InputSearch onChange={(e) => handleSetSearch(e.target.value)} />
      <div
        id="friendsRequestScroll"
        className=" h-[400px] rounded-2xl px-[10px] overflow-auto mt-[18px]"
      >
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
