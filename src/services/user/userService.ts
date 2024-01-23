import { IResponseUserSignIn, IUserSignIn } from "./userService.type";
import { IResponse } from "../type";
import { axiosInstance } from "@/httpClient";

export const UserServices = {
  userSignIn: (payload: IUserSignIn) => {
    return axiosInstance.post<IResponse<IResponseUserSignIn>>(
      "/user/signIn",
      payload
    );
  },
};
