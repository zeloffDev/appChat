import { InputSearch } from "@/components/InputSearch";
import ItemAddFriend from "./ItemAddFiend";

export interface IAddFriendProps {}

export default function AddFriend(props: IAddFriendProps) {
  return (
    <div className="m-[20px]">
      <InputSearch />
      <div className=" h-[400px] rounded-2xl px-[10px] overflow-auto mt-[18px]">
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
