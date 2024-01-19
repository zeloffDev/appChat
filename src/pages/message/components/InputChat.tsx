import { SvgImportFile } from "@svg/SvgImportFile";
import { SvgSend } from "@svg/SvgSend";
import { SvgSmile } from "@svg/SvgSmile";

type Props = {};

export const InputChat = (props: Props) => {
  return (
    <div className="flex flex-row items-center h-16 rounded-xl bg-white dark:bg-gray-900/20  w-full px-4">
      <div>
        <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
          <SvgImportFile />
        </button>
      </div>
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex dark:bg-gray-900/20  w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
          ></input>
          <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
            <SvgSmile />
          </button>
        </div>
      </div>
      <button className="flex items-center justify-center ml-2 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
        <span>Send</span>
        <span className="ml-2">
          <SvgSend />
        </span>
      </button>
    </div>
  );
};
