import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Template } from "@HOCs/Template";
import { TemplateWithAuth } from "@HOCs/TemplateWithAuth";
import { RedirectToSignIn } from "./HOCs/RedirectToSignIn";
import { PATH_NAME } from "./constants/PathName";
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
            path: PATH_NAME.CHAT,
            element: <Chat />,
          },
          {
            path: PATH_NAME.PROFILE,
            element: <Profile />,
          },
          {
            path: PATH_NAME.FRIENDS,
            element: <Friends />,
          },
          {
            path: PATH_NAME.PHONE,
            element: <>phone</>,
          },
        ],
      },
      {
        element: <TemplateWithAuth />,
        children: [
          {
            path: PATH_NAME.SIGN_IN,
            element: <SignIn />,
          },
          {
            path: PATH_NAME.SIGN_UP,
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
