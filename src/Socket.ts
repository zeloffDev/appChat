import { useEffect } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "./store/Hook";
import { setMessageReceive } from "./store/chat/chatSlice";
import { setSocket } from "./store/socket/socketSlice";
const url_socket: string = process.env.REACT_APP_URL_SOCKET as string;

export const useConnectSocket = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userStore.user);

  useEffect(() => {
    const socket = io(url_socket);
    socket.emit("join_room", user._id);
    socket.on("receive_message", (massage) => {
      console.log("receive_message", massage);
      dispatch(setMessageReceive(massage));
    });
    dispatch(setSocket(socket));
    return () => {
      socket.disconnect();
    };
  }, [user]);
};
