import { FrameChat } from "./components/FrameChat";
import { ChatList } from "./components/ChatList";
import { useAppSelector } from "@/store/Hook";
import ChatOnboard from "@/components/ChatOnboard";

type Props = {};

const Index = (props: Props) => {
  const friend = useAppSelector((state) => state.chatStore.friend);

  return (
    <div className="flex text-xs w-full">
      <ChatList />
      {friend._id ? <FrameChat /> : <ChatOnboard />}
    </div>
  );
};

export default Index;
