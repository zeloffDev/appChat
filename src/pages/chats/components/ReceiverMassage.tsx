import { IResponseHistoryMessage } from "@/services/chat/chatService.type";
import dayjs from "dayjs";

type Props = IResponseHistoryMessage;

export const ReceiverMassage = (props: Props) => {
  const { massage, createdAt } = props;
  return (
    <div className="flex mb-[15px] max-w-96">
      <div>
        <div className="bg-white  dark:bg-gray-600  py-[8px] px-[10px] rounded-xl">
          {massage}
        </div>
        {dayjs(createdAt).format("hh:mm")}
      </div>
    </div>
  );
};
