import { IUserSignIn } from "@/services/user/userService.type";
import { store } from "../Store";
import { signIn } from "./userSlice";

export const reduxAuth = {
  signIn: (payload: IUserSignIn) => store.dispatch(signIn(payload)),
};
