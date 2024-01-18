import { io } from "socket.io-client";
import { useEffect } from "react";
const url_socket: string = process.env.REACT_APP_URL_SOCKET as string;
export const useConnectSocket = () => {
  useEffect(() => {
    const socket = io(url_socket);
    console.log(url_socket, socket);
  }, []);
};
