import { Outlet } from "react-router-dom";

export interface ITemplateProps {}

export function TemplateWithAuth(props: ITemplateProps) {
  return (
    <>
      <Outlet />
    </>
  );
}
