import { ReceiverMassage } from "./ReceiverMassage";
import { SenderMassage } from "./SenderMassage";

export interface IBodyFrameChatProps {}

export default function BodyFrameChat(props: IBodyFrameChatProps) {
  const arr = new Array(50).fill(null);

  return (
    <div className="h-100vh-130px p-[10px] dark:bg-gray-900 flex flex-col-reverse overflow-auto">
      {arr.map((number, index) => {
        if (index % 2 === 0) {
          return <SenderMassage key={index} />;
        } else {
          return <ReceiverMassage key={index} />;
        }
      })}
    </div>
  );
}
