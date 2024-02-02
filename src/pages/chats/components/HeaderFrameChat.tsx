import { CustomImg } from "@/components/CustomImg";
import { useAppSelector } from "@/store/Hook";
import { SvgCamera } from "@svg/SvgCamera";
import { SvgPhone2 } from "@svg/SvgPhone2";
import { SvgSearch } from "@svg/SvgSearch";

export interface IHeaderFrameChatProps {}

export default function HeaderFrameChat(props: IHeaderFrameChatProps) {
  const friend = useAppSelector((state) => state.chatStore.friend);

  return (
    <div className="h-[65px] flex items-center bg-bgChatList dark:bg-gray-700">
      <div className="w-[48px] h-[48px]  ml-[15px] bg-bgLogo rounded-full overflow-hidden ">
        <CustomImg src={friend.avatar} alt="Avatar" className="h-full w-full" />
      </div>
      <div className="ml-[17px] text-left">
        <p className="font-bold text-base">{friend.name}</p>
        <p className={` dark:text-white text-lastMassage`}>Online</p>
      </div>
      <div className="text-end flex gap-5 justify-end flex-auto text-timeMassage mr-[25px]">
        <SvgCamera />
        <SvgPhone2 />
        <SvgSearch />
      </div>
    </div>
  );
}
