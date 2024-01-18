import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

export const TemplateWithAuth = (props: Props) => {
  return (
    <>
      <Outlet />
    </>
  );
};
