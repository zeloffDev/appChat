import { CustomImg } from "@/components/CustomImg";
import { MASSAGE_NOTIFICATION } from "@/constants/MassageToastify";
import { FriendServices } from "@/services/friend/friendService";
import { useAppSelector } from "@/store/Hook";
import { friendRedux } from "@/store/friend/friendRedux";
import { SvgSuccess } from "@svg/SvgSuccess";
import { memo } from "react";
import { toast } from "react-toastify";

type Props = {
  avatar: string;
  name: string;
  _id: string;
};

const ItemFriendRequest = (props: Props) => {
  const { avatar, name, _id: friendId } = props;
  const { _id } = useAppSelector((state) => state.userStore.user);

  const handleAddFriend = () => {
    const payload = {
      userId: _id,
      friendId,
    };
    FriendServices.addFriend(payload)
      .then((res) => {
        friendRedux.addFriend(payload);
        toast.success(MASSAGE_NOTIFICATION.ADD_FRIEND_SUCCESS);
      })
      .catch((err) => {
        console.log(err);
        toast.error(MASSAGE_NOTIFICATION.ADD_FRIEND_FAIL);
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
        <p className={`font-normal truncate dark:text-whitetext-lastMassage`}>
          Friend
        </p>
      </div>
      <div className="flex justify-end flex-auto text-timeMassage mr-[25px]">
        <button
          onClick={handleAddFriend}
          className="flex items-center rounded-xl bg-active hover:bg-blue-500 justify-center rounded-xl text-white px-2 sm:px-4 py-2 flex-shrink-0"
        >
          <p className="hidden sm:block ">Accept</p>
          <span className="sm:ml-2 ">
            <SvgSuccess />
          </span>
        </button>
      </div>
    </div>
  );
};
export default memo(ItemFriendRequest);
