import VideoPlayer from "../common/VideoPlayer";
import PopupNavbar from "./PopupNavbar";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import TagsComponent from "../tabs/TagsComponent";
import { InstagramMedia } from "../../utils/interfaces";
import ImageViewer from "../common/ImageViewer";

const PostInfo = ({
  postDetails,
  handleClose,
}: {
  postDetails: InstagramMedia;
  handleClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const renderActiveTab = () => {
    switch (activeTab) {
      case 0:
        return <div>Stats</div>;
      case 1:
        return <TagsComponent />;
      case 2:
        return <div>Description</div>;
      default:
        return <div>Stats</div>;
    }
  };
  return (
    <div className="flex h-[calc(100vh-10rem)] gap-4">
      {postDetails.media_type === "VIDEO" ? (
        <VideoPlayer
          videoLink={postDetails?.media_url}
          videoId={postDetails.id}
        />
      ) : (
        <ImageViewer imageLink={postDetails.media_url} />
      )}
      <PopupNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <RxCross2
        color="gray"
        size={26}
        className="absolute top-2 right-0 cursor-pointer"
        onClick={handleClose}
      />
      {renderActiveTab()}
    </div>
  );
};

export default PostInfo;
