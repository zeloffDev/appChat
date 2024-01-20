import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "@HOCs/Template";
import { TemplateWithAuth } from "@HOCs/TemplateWithAuth";
const Massage = lazy(() => import("@pages/message"));
const Demo = lazy(() => import("@pages/message/Demo"));
const SignIn = lazy(() => import("@pages/signIn"));
const SignUp = lazy(() => import("@pages/signUp"));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback="nested fallback">
        <Template />
      </Suspense>
    ),
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
    element: (
      <Suspense fallback="nested fallback">
        <TemplateWithAuth />
      </Suspense>
    ),
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
