import { EditCommentContent } from "./EditCommentContent";
import { OverlayModal } from "./OverlayModal";

const EditCommentModal = ({ isOpen, onClose, initialRef, postId, comment }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} initialRef={initialRef}>
      <EditCommentContent
        onClose={onClose}
        initialRef={initialRef}
        postId={postId}
        comment={comment}
      />
    </OverlayModal>
  );
};

export { EditCommentModal };
