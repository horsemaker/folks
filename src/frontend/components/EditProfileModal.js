import { EditProfileContent } from "./EditProfileContent";
import { OverlayModal } from "./OverlayModal";

const EditProfileModal = ({ isOpen, onClose, initialRef, profile }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} initialRef={initialRef}>
      <EditProfileContent
        onClose={onClose}
        initialRef={initialRef}
        profile={profile}
      />
    </OverlayModal>
  );
};

export { EditProfileModal };
