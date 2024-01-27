import BodyFrameChat from "./BodyFrameChat";
import InputFrameChat from "./InputFrameChat";
import HeaderFrameChat from "./HeaderFrameChat";
import { useAppSelector } from "@/store/Hook";

type Props = {};

export const FrameChat = (props: Props) => {
  const screenFrameChat = useAppSelector(
    (state) => state.ScreenStore.screenFrameChat
  );
  return (
    <div
      className={` sm:block flex-auto w-0 bg-bgSideBar
      ${screenFrameChat ? "" : "hidden"} `}
    >
      <HeaderFrameChat />
      <BodyFrameChat />
      <InputFrameChat />
    </div>
  );
};
