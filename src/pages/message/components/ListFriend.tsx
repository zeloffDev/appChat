import { Friend } from "./Friend";

type Props = {
  handleOpenModal: () => void;
};

export const ListFriend = (props: Props) => {
  const { handleOpenModal } = props;
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-row items-center justify-between text-xs">
        <span className="font-bold">Danh sách bạn bè</span>
        <span className="flex items-center justify-center bg-gray-300 dark:text-gray-900 h-4 w-4 rounded-full">
          4
        </span>
      </div>
      <div className="flex flex-col space-y-1 mt-4 -mx-2 h-100vh-360px overflow-y-auto">
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </div>
    </div>
  );
};
