import * as React from "react";
import { Outlet } from "react-router-dom";

export interface IHomeProps {
  children?: React.ReactNode;
}

export function Home(props: IHomeProps) {
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
}
