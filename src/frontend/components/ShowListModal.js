import { OverlayModal } from "./OverlayModal";
import { ShowListContent } from "./ShowListContent";

const ShowListModal = ({ isOpen, onClose, title, list }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
      <ShowListContent title={title} list={list} />
    </OverlayModal>
  );
};

export { ShowListModal };
