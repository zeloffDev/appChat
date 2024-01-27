import { FrameChat } from "./components/FrameChat";
import { ChatList } from "./components/ChatList";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="flex text-xs w-full">
      <ChatList />
      <FrameChat />
    </div>
  );
};

export default Index;
