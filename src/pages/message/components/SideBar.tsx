import { ListFriend } from "./ListFriend";
import { Logo } from "./Logo";
import { PersonalInformation } from "./PersonalInformation";

type Props = {};

export const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <Logo />
      <PersonalInformation />
      <ListFriend />
    </div>
  );
};
