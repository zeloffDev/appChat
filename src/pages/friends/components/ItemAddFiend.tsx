import { SvgRevoke } from "@svg/SvgRevoke";
import { FriendServices } from "@/services/friend/friendService";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { friendRedux } from "@/store/friend/friendRedux";
import { SvgSend } from "@svg/SvgSend";
import { toast } from "react-toastify";

export interface IItemAddFriendProps {
  avatar: string;
  name: string;
  _id: string;
  listFriendRequest: string[];
}

export default function ItemAddFriend(props: IItemAddFriendProps) {
  const dispatch = useAppDispatch();
  const { avatar, name, _id: friendId, listFriendRequest } = props;
  const { _id } = useAppSelector((state) => state.userStore.user);

  const handleAddFriendRequest = () => {
    const payload = {
      userId: _id,
      friendId: friendId,
    };
    FriendServices.addFriendRequest(payload)
      .then((res) => {
        dispatch(friendRedux.addFriendRequest(payload));
        toast.success("Sent friend request successfully");
      })
      .catch((err) => {
        toast.error("failed to send friend request");
      });
  };

  const handleRevokeFriendRequest = () => {
    const payload = {
      userId: _id,
      friendId: friendId,
    };
    FriendServices.revokeFriendRequest(payload)
      .then((res) => {
        dispatch(friendRedux.revokeFriendRequest(payload));
        toast.success("Successfully revoked friend request");
      })
      .catch((err) => {
        toast.error("Revoke failed friend requests");
      });
  };

  const isSendRequest = listFriendRequest.includes(_id);
  return (
    <div
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <img src={avatar} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left mx-[5px] max-w-[50%] sm:max-w-[100px]">
        <p className="font-semibold text-sm">{name}</p>
        <p
          className={`font-normal truncate dark:text-whitetext-lastMassage pr-[5px]`}
        >
          Haven't made friends yet
        </p>
      </div>
      <div className="flex justify-end flex-auto text-timeMassage mr-[25px]">
        {isSendRequest ? (
          <button
            onClick={handleRevokeFriendRequest}
            className="flex items-center justify-center bg-active hover:bg-blue-500 rounded-xl text-white  px-2 sm:px-4  py-2 flex-shrink-0"
          >
            <p className="hidden sm:block ">Revoke</p>
            <span className="sm:ml-2 ">
              <SvgRevoke />
            </span>
          </button>
        ) : (
          <button
            onClick={handleAddFriendRequest}
            className="flex items-center justify-center bg-active hover:bg-blue-500 rounded-xl text-white  px-2 sm:px-4  py-2 flex-shrink-0"
          >
            <p className="hidden sm:block ">Add</p>
            <span className="sm:ml-2 ">
              <SvgSend />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
