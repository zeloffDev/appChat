import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "./HOCs/Template";
const Massage = lazy(() => import("@/pages/message/Index"));
const SignIn = lazy(() => import("@/pages/signIn/Index"));
const SignUp = lazy(() => import("@/pages/signUp/Index"));

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
