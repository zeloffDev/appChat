import { IResponseHistoryMessage } from "@/services/chat/chatService.type";
import dayjs from "dayjs";

type Props = IResponseHistoryMessage;

export const SenderMassage = (props: Props) => {
  const { massage, createdAt } = props;

  return (
    <div className="flex justify-end mb-[15px]">
      <div>
        <div className="bg-active text-white py-[8px] px-[10px] max-w-96 rounded-xl">
          {massage}
        </div>
        <p className="mt-[5px] text-end ml-2">
          {dayjs(createdAt).format("hh:mm")}
        </p>
      </div>
    </div>
  );
};
