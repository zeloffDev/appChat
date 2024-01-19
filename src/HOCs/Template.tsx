import { Outlet } from "react-router-dom";

export interface ITemplateProps {}

export function Template(props: ITemplateProps) {
  return (
    <>
      <Outlet />
    </>
  );
}
