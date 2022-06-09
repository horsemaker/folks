import { EditPostContent } from "./EditPostContent";
import { OverlayModal } from "./OverlayModal";

const EditPostModal = ({
  isOpen,
  onClose,
  initialRef,
  firstName,
  lastName,
  avatarURL,
  username,
  content,
  setPostData,
  postData,
  isEditing,
  handleEditPost,
}) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} initialRef={initialRef}>
      <EditPostContent
        firstName={firstName}
        lastName={lastName}
        avatarURL={avatarURL}
        username={username}
        initialRef={initialRef}
        content={content}
        setPostData={setPostData}
        postData={postData}
        onClose={onClose}
        isEditing={isEditing}
        handleEditPost={handleEditPost}
      />
    </OverlayModal>
  );
};

export { EditPostModal };
