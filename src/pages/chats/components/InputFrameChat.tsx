import { MESSAGE_TYPE } from "@/constants/MessageType";
import { useAppDispatch, useAppSelector } from "@/store/Hook";
import { setMessageSender } from "@/store/chat/chatSlice";
import { debounce } from "@/utils";
import { SvgImportFile } from "@svg/SvgImportFile";
import { SvgSend } from "@svg/SvgSend";
import { SvgSmile } from "@svg/SvgSmile";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

export interface IInputFrameChatProps {}

export default function InputFrameChat(props: IInputFrameChatProps) {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const [massage, SetMassage] = useState<string | null>(null);
  const friend = useAppSelector((state) => state.chatStore.friend);
  const user = useAppSelector((state) => state.userStore.user);
  const socket = useAppSelector((state) => state.socketStore.socket);

  const handleSetMessage = debounce((value: string | null) => {
    SetMassage(value);
  });

  const handleFocusAndClearValue = () => {
    if (ref.current) {
      ref.current.value = "";
      ref.current.focus();
      handleSetMessage(null);
    }
  };

  const sendMessage = () => {
    if (massage) {
      const payload = {
        receiverId: friend._id,
        senderId: user._id,
        massage: massage,
        type: MESSAGE_TYPE.MESSAGE,
      };
      socket.emit("send_message", payload);
      dispatch(setMessageSender(payload));
      handleFocusAndClearValue();
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    handleFocusAndClearValue();
  }, [ref, friend]);

  return (
    <div className="flex flex-row items-center h-[65px] bg-white  dark:bg-gray-700  w-full px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <SvgImportFile />
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            ref={ref}
            onChange={(e) => handleSetMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Write a message"
            className="flex dark:bg-gray-900/20 relative pr-[40px] truncate w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          />
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <SvgSmile />
          </button>
        </div>
      </div>
      <button
        onClick={sendMessage}
        className="flex items-center justify-center ml-2 bg-active hover:bg-blue-500 rounded-xl text-white px-4 py-2 flex-shrink-0"
      >
        <span>Send</span>
        <span className="ml-2">
          <SvgSend />
        </span>
      </button>
    </div>
  );
}
