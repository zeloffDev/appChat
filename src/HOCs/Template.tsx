import { SideBar } from "@/components/SideBar";
import { Outlet } from "react-router-dom";

export interface ITemplateProps {}

export function Template(props: ITemplateProps) {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
}
