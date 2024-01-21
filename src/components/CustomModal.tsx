import { HTMLProps, ReactNode, useCallback, useState } from "react";
import { Modal } from "./Modal";

export const useCustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<any>();

  const handleOpenModal = useCallback((item?: any) => {
    setIsOpen(true);
    setItem(item);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    setItem(null);
  }, []);

  const renderModal = useCallback(
    ({
      children,
      ...rest
    }: {
      children: ReactNode;
      rest?: HTMLProps<HTMLDivElement>;
    }) => {
      return (
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal} {...rest}>
          {children}
        </Modal>
      );
    },
    [isOpen, item]
  );

  return {
    item,
    handleOpenModal,
    handleCloseModal,
    Modal: renderModal,
  };
};
