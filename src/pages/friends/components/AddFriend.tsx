import { InputSearch } from "@/components/InputSearch";
import ItemAddFriend from "./ItemAddFiend";

export interface IAddFriendProps {}

export default function AddFriend(props: IAddFriendProps) {
  return (
    <div className=" h-100vh-194px overflow-auto mt-[18px]">
      <div className="mx-[20px] ">
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
        <ItemAddFriend />
      </div>
    </div>
  );
}
