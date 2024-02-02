import { SvgChatOnboard } from "@svg/SvgChatOnboard";

export interface IChatOnboardProps {}

export default function ChatOnboard(props: IChatOnboardProps) {
  return (
    <div className="flex-1 sm:block hidden">
      <div className="w-full h-full flex justify-center items-center dark:bg-gray-900">
        <SvgChatOnboard />
      </div>
    </div>
  );
}
