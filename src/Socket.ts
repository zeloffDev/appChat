import { useEffect } from "react";
import { io } from "socket.io-client";
const url_socket: string = process.env.REACT_APP_URL_SOCKET as string;
export const useConnectSocket = () => {
  useEffect(() => {
    const socket = io(url_socket);
    console.log(url_socket, socket);
  }, []);
};
