import { CustomImg } from "@/components/CustomImg";
import { MASSAGE_NOTIFICATION } from "@/constants/MassageToastify";
import { FriendServices } from "@/services/friend/friendService";
import { useAppSelector } from "@/store/Hook";
import { friendRedux } from "@/store/friend/friendRedux";
import { SvgDelete } from "@svg/SvgDelete";
import { memo } from "react";
import { toast } from "react-toastify";

type Props = {
  avatar: string;
  name: string;
  _id: string;
};

const ItemFriend = (props: Props) => {
  const { avatar, name, _id: friendId } = props;
  const { _id } = useAppSelector((state) => state.userStore.user);

  const handleDeleteFriend = () => {
    const payload = {
      userId: _id,
      friendId,
    };
    FriendServices.deleteFriend(payload)
      .then((res) => {
        friendRedux.deleteFriend(payload);
        toast.success(MASSAGE_NOTIFICATION.REMOVE_FRIEND_SUCCESS);
      })
      .catch((err) => {
        toast.error(MASSAGE_NOTIFICATION.REMOVE_FRIEND_ERROR);
      });
  };

  return (
    <div
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg src={avatar} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left mx-[5px]">
        <p className="font-semibold text-sm">{name}</p>
        <p className={`font-normal truncate dark:text-white text-lastMassage`}>
          Friend
        </p>
      </div>
      <div className="flex justify-end flex-auto text-timeMassage mr-[25px]">
        <button
          onClick={handleDeleteFriend}
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-xl text-white px-2 sm:px-4 py-2 flex-shrink-0"
        >
          <p className="hidden sm:block ">Unfriend </p>
          <span className="sm:ml-2 ">
            <SvgDelete />
          </span>
        </button>
      </div>
    </div>
  );
};

export default memo(ItemFriend);
