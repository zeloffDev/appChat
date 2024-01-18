import { ListFriend } from "./ListFriend";
import { Logo } from "./Logo";
import { PersonalInformation } from "./PersonalInformation";

type Props = {};

export const SideBar = (props: Props) => {
  return (
    <div>
      <Logo />
      <PersonalInformation />
      <ListFriend />
    </div>
  );
};
