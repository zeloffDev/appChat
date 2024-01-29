import { ItemFriend } from "./ItemFriend";

type Props = {};

export const ListFriend = (props: Props) => {
  return (
    <div className=" h-100vh-180px overflow-auto mt-[18px]">
      <div className="mx-[20px] ">
        <ItemFriend />
        <ItemFriend />
        <ItemFriend />
      </div>
    </div>
  );
};
