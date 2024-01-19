import { ListFriend } from "./ListFriend";
import { Logo } from "./Logo";
import { PersonalInformation } from "./PersonalInformation";

type Props = {};

export const SideBar = (props: Props) => {
  return (
    <div className="flex flex-col py-8 pl-8 pr-2 w-80  flex-shrink-0">
      <Logo />
      <PersonalInformation />
      <ListFriend />
    </div>
  );
};
