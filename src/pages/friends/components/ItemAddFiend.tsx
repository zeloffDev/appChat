import { CustomImg } from "@/components/CustomImg";
import { MASSAGE_NOTIFICATION } from "@/constants/MassageToastify";
import { FriendServices } from "@/services/friend/friendService";
import { useAppSelector } from "@/store/Hook";
import { friendRedux } from "@/store/friend/friendRedux";
import { SvgRevoke } from "@svg/SvgRevoke";
import { SvgSend } from "@svg/SvgSend";
import { memo, useMemo } from "react";
import { toast } from "react-toastify";

export interface IItemAddFriendProps {
  avatar: string;
  name: string;
  _id: string;
  listFriendRequest: string[];
}

function ItemAddFriend(props: IItemAddFriendProps) {
  const { avatar, name, _id: friendId, listFriendRequest } = props;
  const { _id } = useAppSelector((state) => state.userStore.user);
  const handleAddFriendRequest = () => {
    const payload = {
      userId: _id,
      friendId: friendId,
    };
    FriendServices.addFriendRequest(payload)
      .then((res) => {
        friendRedux.addFriendRequest(payload);
        toast.info(MASSAGE_NOTIFICATION.SEND_FRIEND_REQUEST_SUCCESS);
      })
      .catch((err) => {
        toast.error(MASSAGE_NOTIFICATION.SEND_FRIEND_REQUEST_FAIL);
      });
  };

  const handleRevokeFriendRequest = () => {
    const payload = {
      userId: _id,
      friendId: friendId,
    };
    FriendServices.revokeFriendRequest(payload)
      .then((res) => {
        friendRedux.revokeFriendRequest(payload);
        toast.info(MASSAGE_NOTIFICATION.REVOKE_FRIEND_REQUEST_SUCCESS);
      })
      .catch((err) => {
        toast.error(MASSAGE_NOTIFICATION.SEND_FRIEND_REQUEST_FAIL);
      });
  };

  const isSendRequest = useMemo(
    () => listFriendRequest.includes(_id),
    [listFriendRequest, _id]
  );
  return (
    <div
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg src={avatar} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left mx-[5px] max-w-[50%] sm:max-w-[100px]">
        <p className="font-semibold text-sm">{name}</p>
        <p
          className={`font-normal truncate dark:text-white text-lastMassage pr-[5px]`}
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

export default memo(ItemAddFriend);
