import { LIMIT } from "@/constants/constants";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { getHistoryMessageThunk } from "@/store/chat/chatThunk";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReceiverMassage } from "./ReceiverMassage";
import { SenderMassage } from "./SenderMassage";

export interface IBodyFrameChatProps {}

export default function BodyFrameChat(props: IBodyFrameChatProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userStore.user);
  const friend = useAppSelector((state) => state.chatStore.friend);
  const { historyMessage, limit, next, skip } = useAppSelector(
    (state) => state.chatStore
  );

  const getHistoryMessage = (skip: number, limit: number) => {
    const payload = {
      senderId: user._id,
      receiverId: friend._id,
      skip: skip,
      limit: limit,
    };
    dispatch(getHistoryMessageThunk(payload));
  };

  useEffect(() => {
    getHistoryMessage(0, LIMIT.LIMIT_20);
  }, [friend]);

  return (
    <div
      id="historyMessageScroll"
      className="h-100vh-130px p-[10px] dark:bg-gray-900 flex flex-col-reverse overflow-auto"
    >
      <InfiniteScroll
        dataLength={historyMessage.length}
        next={() => getHistoryMessage(skip, limit)}
        className="flex flex-col-reverse"
        hasMore={next}
        inverse={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="historyMessageScroll"
      >
        {historyMessage.map((item) => {
          const isSender = item.senderId === user._id;
          if (isSender) {
            return <SenderMassage key={item._id} {...item} />;
          } else {
            return <ReceiverMassage key={item._id} {...item} />;
          }
        })}
      </InfiniteScroll>
    </div>
  );
}
