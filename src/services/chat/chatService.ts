import { axiosInstance } from "@/httpClient";
import { IResponseSkipCount } from "../type";
import { IHistoryMessage, IResponseHistoryMessage } from "./chatService.type";

export const ChatServices = {
  getHistoryMessage: (params: IHistoryMessage) => {
    return axiosInstance.get<IResponseSkipCount<IResponseHistoryMessage[]>>(
      "/message",
      {
        params,
      }
    );
  },
};
