import ChatOnboard from "@/components/ChatOnboard";
import { InputSearch } from "@/components/InputSearch";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import {
  getFriendsThunk,
  getListFriendRequestThunk,
  getListUserThunk,
} from "@/store/friend/friendThunk";
import { debounce } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import AddFriend from "./components/AddFriend";
import { ListFriend } from "./components/ListFriend";
import { ListFriendRequest } from "./components/ListFriendRequest";
import { LIMIT } from "@/constants/constants";

export interface IFriendProps {}

const ALL_FRIEND = { value: 1, label: "All Friend" };
const ADD_FRIEND = { value: 2, label: "Add Friend" };
const FRIEND_REQUEST = { value: 3, label: "Friend Request" };

export default function Friend(props: IFriendProps) {
  const [active, setActive] = useState(ALL_FRIEND.value);
  const [valueSearch, setValueSearch] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userStore.user);
  const tabs = [ALL_FRIEND, ADD_FRIEND, FRIEND_REQUEST];

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

  const getListFriendRequest = useCallback(
    (skip: number, limit: number) => {
      const params = {
        userId: user._id,
        name: valueSearch,
        skip: skip,
        limit: limit,
      };
      dispatch(getListFriendRequestThunk(params));
    },
    [user, valueSearch]
  );

  const renderContentTab = () => {
    switch (active) {
      case ALL_FRIEND.value:
        return <ListFriend getListFriend={getListFriend} />;
      case ADD_FRIEND.value:
        return <AddFriend getListUser={getListUser} />;
      case FRIEND_REQUEST.value:
        return (
          <ListFriendRequest getListFriendRequest={getListFriendRequest} />
        );
      default:
        return;
    }
  };

  const getData = () => {
    switch (active) {
      case ALL_FRIEND.value:
        return getListFriend(0, LIMIT.LIMIT);
      case ADD_FRIEND.value:
        return getListUser(0, LIMIT.LIMIT);
      case FRIEND_REQUEST.value:
        return getListFriendRequest(0, LIMIT.LIMIT);
      default:
        return;
    }
  };

  const handleActive = (value: number) => {
    setActive(value);
  };

  const handleSetSearch = debounce((value: string) => {
    setValueSearch(value);
  });

  useEffect(() => {
    getData();
  }, [valueSearch, active]);

  return (
    <div className="flex text-xs w-full">
      <div className="sm:w-[350px] w-full border-r bg-bgChatList dark:border-none dark:bg-gray-800">
        <div className="mx-[20px]">
          <div className="font-bold text-2xl leading-10 mt-[15px]">Friends</div>
          <InputSearch
            onChange={(e) => {
              handleSetSearch(e.target.value);
            }}
          />
          <div className="w-full mt-[15px] border-t" />
          <div className=" font-semibold text-allChats dark:text-white text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex -mb-px">
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
      <ChatOnboard />
    </div>
  );
}
