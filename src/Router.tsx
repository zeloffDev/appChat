import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "@HOCs/Template";
import { TemplateWithAuth } from "@HOCs/TemplateWithAuth";
import { RedirectToSignIn } from "./HOCs/RedirectToSignIn";
const Chat = lazy(() => import("@pages/chats"));
const SignIn = lazy(() => import("@pages/signIn"));
const SignUp = lazy(() => import("@pages/signUp"));
const NotFound = lazy(() => import("@pages/notFound"));
const Profile = lazy(() => import("@pages/profile"));
const Friends = lazy(() => import("@/pages/friends"));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback="Loading...">
        <RedirectToSignIn />
      </Suspense>
    ),
    children: [
      {
        element: <Template />,
        children: [
          {
            path: "/",
            element: <Chat />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "friends",
            element: <Friends />,
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
