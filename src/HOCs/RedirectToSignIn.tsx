import { useAppSelector } from "@/store/Hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const RedirectToSignIn = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.userStore.user);

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};
