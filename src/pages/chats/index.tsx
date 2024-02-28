import { FrameChat } from "./components/FrameChat";
import { ChatList } from "./components/ChatList";
import { useAppSelector } from "@/store/Hook";
import ChatOnboard from "@/components/ChatOnboard";
import { Helmet } from "react-helmet";
type Props = {};

const Index = (props: Props) => {
  const friend = useAppSelector((state) => state.chatStore.friend);

  return (
    <div className="flex text-xs w-full">
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="List friends chat." />
        <meta name="keywords" content="chat friend"></meta>
      </Helmet>
      <ChatList />
      {friend._id ? <FrameChat /> : <ChatOnboard />}
    </div>
  );
};

export default Index;
