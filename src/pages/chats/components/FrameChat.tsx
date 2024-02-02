import BodyFrameChat from "./BodyFrameChat";
import InputFrameChat from "./InputFrameChat";
import HeaderFrameChat from "./HeaderFrameChat";
import { useAppSelector } from "@/store/Hook";

type Props = {};

export const FrameChat = (props: Props) => {
  const friend = useAppSelector((state) => state.chatStore.friend);

  return (
    <div
      className={` sm:block flex-auto w-0 bg-bgSideBar
      ${friend._id ? "" : "hidden"} `}
    >
      <HeaderFrameChat />
      <BodyFrameChat />
      <InputFrameChat />
    </div>
  );
};
