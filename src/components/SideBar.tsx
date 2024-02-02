import { AvatarDefault } from "@/assets/Base64/AvatarDefault";
import { DarkModeSwitchButton } from "@/components/DarkModeSwitchButton";
import { PATH_NAME } from "@/constants/PathName";
import { useAppDispatch } from "@/store/Hook";
import { clearFriend } from "@/store/chat/chatSlice";
import { SvgFriend } from "@svg/SvgFriend";
import { SvgMassage } from "@svg/SvgMassage";
import { SvgPhone2 } from "@svg/SvgPhone2";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonSetting from "./ButtonSetting";
import { CustomImg } from "./CustomImg";

type Props = {};

type typeItemSideBar = {
  value: number;
  label: string;
  svg: ReactNode;
  svgActive: ReactNode;
  path: string;
};

const ITEM_SIDE_BAR = {
  CHAT: {
    value: 1,
    label: "chat",
    svg: <SvgMassage />,
    svgActive: <SvgMassage className="stroke-white" />,
    path: PATH_NAME.CHAT,
  },
  FRIEND: {
    value: 2,
    label: "friend",
    svg: <SvgFriend />,
    svgActive: <SvgFriend className="stroke-white" />,
    path: PATH_NAME.FRIENDS,
  },
  PHONE: {
    value: 3,
    label: "phone",
    svg: <SvgPhone2 />,
    svgActive: <SvgPhone2 className="stroke-white" />,
    path: PATH_NAME.PHONE,
  },
};

export const SideBar = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const itemsSideBar: typeItemSideBar[] = [
    ITEM_SIDE_BAR.CHAT,
    ITEM_SIDE_BAR.FRIEND,
    ITEM_SIDE_BAR.PHONE,
  ];

  const handleActive = (item: typeItemSideBar) => {
    navigate(item.path);
    dispatch(clearFriend(null));
  };

  const handleClickProfile = () => {
    navigate(PATH_NAME.PROFILE);
  };

  return (
    <div className="w-[77px] min-h-screen bg-bgSideBar border-r dark:border-none dark:bg-gray-700 text-center">
      <div className="flex flex-col items-center">
        <button
          onClick={handleClickProfile}
          className="w-[38px]  h-[38px]  mt-[15px] bg-bgLogo rounded-full overflow-hidden cursor-pointer"
        >
          <CustomImg
            src={AvatarDefault}
            alt="Avatar"
            className="h-full w-full"
          />
        </button>
        {itemsSideBar.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={item.value}
              onClick={() => handleActive(item)}
              className={`w-[48px] stroke-dark h-[48px]  mt-[15px] duration-700  rounded-xl flex items-center justify-center  cursor-pointer ${
                isActive ? "bg-active" : "hover:bg-blue-200"
              } `}
            >
              {isActive ? item.svgActive : item.svg}
            </div>
          );
        })}
        <div className="w-[51px] mt-[15px] border-t"></div>
        <ButtonSetting />
        <div className="w-[48px] h-[48px]  mt-[15px]  rounded-xl flex items-center justify-center ">
          <DarkModeSwitchButton />
        </div>
      </div>
    </div>
  );
};
