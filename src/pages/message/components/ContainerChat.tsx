import { ContainerMassage } from "./ContainerMassage";
import { InputChat } from "./InputChat";

type Props = {};

export const ContainerChat = (props: Props) => {
  return (
    <div className="flex flex-col flex-auto h-full p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
        <ContainerMassage />
        <InputChat />
      </div>
    </div>
  );
};
