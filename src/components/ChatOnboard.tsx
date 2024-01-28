import { SvgChatOnboard } from "@svg/SvgChatOnboard";

export interface IChatOnboardProps {}

export default function ChatOnboard(props: IChatOnboardProps) {
  return (
    <div className="w-full h-full flex justify-center items-center dark:bg-gray-900">
      <SvgChatOnboard />
    </div>
  );
}
