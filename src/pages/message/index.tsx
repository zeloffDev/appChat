import React from "react";
import { SideBar } from "@pages/message/components/SideBar";
import { ContainerChat } from "./components/ContainerChat";

type Props = {};

const Index = (props: Props) => {
  return (
    <div className="flex h-screen antialiased ">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <SideBar />
        <ContainerChat />
      </div>
    </div>
  );
};

export default Index;
