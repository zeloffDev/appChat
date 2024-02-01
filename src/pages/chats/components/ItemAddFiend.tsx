import { CustomImg } from "@/components/CustomImg";
import { SvgSend } from "@/components/SvgComponent/SvgSend";
import { memo } from "react";

export interface IItemAddFriendProps {}

function ItemAddFriend(props: IItemAddFriendProps) {
  return (
    <div
      className={`mb-[18px] w-full h-[65px]  duration-300  rounded-2xl flex items-center bg-white dark:bg-gray-600 hover:bg-blue-100 dark:hover:bg-gray-700 }`}
    >
      <div className="w-[48px]  h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left mx-[5px]">
        <p className="font-semibold text-sm">zeloff</p>
        <p className={`font-normal truncate dark:text-whitetext-lastMassage`}>
          Haven't made friends yet
        </p>
      </div>
      <div className="flex justify-end flex-auto text-timeMassage mr-[25px]">
        <button className="flex items-center justify-center bg-active hover:bg-blue-500 rounded-xl text-white px-4 py-2 flex-shrink-0">
          <p className="hidden sm:block ">Add friend</p>
          <span className="sm:ml-2 ">
            <SvgSend />
          </span>
        </button>
      </div>
    </div>
  );
}
export default memo(ItemAddFriend);
