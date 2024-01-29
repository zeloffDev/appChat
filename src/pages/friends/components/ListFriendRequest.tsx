import { ItemFriendRequest } from "./ItemFriendrequest";

type Props = {};

export const ListFriendRequest = (props: Props) => {
  return (
    <div className=" h-100vh-194px overflow-auto mt-[18px]">
      <div className="mx-[20px] ">
        <ItemFriendRequest />
        <ItemFriendRequest />
        <ItemFriendRequest />
      </div>
    </div>
  );
};
