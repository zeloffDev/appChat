import React from "react";
import { ReceiverMassage } from "./ReceiverMassage";
import { SenderMassage } from "./SenderMassage";
type Props = {};

export const ContainerMassage = (props: Props) => {
  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          <SenderMassage />
          <SenderMassage />
          <ReceiverMassage />
          <ReceiverMassage />
          <SenderMassage />
          <ReceiverMassage />
          <SenderMassage />
          <SenderMassage />
          <ReceiverMassage />
          <ReceiverMassage />
          <SenderMassage />
          <ReceiverMassage />

          <SenderMassage />
          <SenderMassage />
        </div>
      </div>
    </div>
  );
};
