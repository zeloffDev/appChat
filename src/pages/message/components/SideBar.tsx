import { useCustomModal } from "@/components/CustomModal";
import { ListFriend } from "./ListFriend";
import { Logo } from "./Logo";
import { PersonalInformation } from "./PersonalInformation";
import { Profile } from "@/components/Profile";

type Props = {};

export const SideBar = (props: Props) => {
  const { handleOpenModal, Modal } = useCustomModal();
  return (
    <div className="flex flex-col py-8 pl-8 pr-2 w-80  flex-shrink-0">
      <Logo />
      <PersonalInformation handleOpenModal={handleOpenModal} />
      <ListFriend handleOpenModal={handleOpenModal} />
      <Modal>
        <Profile />
      </Modal>
    </div>
  );
};
