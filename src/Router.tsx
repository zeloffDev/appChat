import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "./HOC/Template";
const Massage = lazy(() => import("@/page/message/Index"));
const SignIn = lazy(() => import("@/page/signIn/Index"));
const SignUp = lazy(() => import("@/page/signUp/Index"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Massage />,
  },

  {
    element: <Template />,
    children: [
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);
