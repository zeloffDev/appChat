import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "@HOCs/Template";
import { TemplateWithAuth } from "@HOCs/TemplateWithAuth";
import { RedirectToSignIn } from "./HOCs/RedirectToSignIn";
const Massage = lazy(() => import("@pages/message"));
const Demo = lazy(() => import("@pages/message/Demo"));
const SignIn = lazy(() => import("@pages/signIn"));
const SignUp = lazy(() => import("@pages/signUp"));
const NotFound = lazy(() => import("@pages/notFound"));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback="nested fallback">
        <RedirectToSignIn />
      </Suspense>
    ),
    children: [
      {
        element: <Template />,
        children: [
          {
            path: "/",
            element: <Massage />,
          },
          {
            path: "/demo",
            element: <Demo />,
          },
        ],
      },
      {
        element: <TemplateWithAuth />,
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
