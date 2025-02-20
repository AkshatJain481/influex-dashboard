import VideoPlayer from "../common/VideoPlayer";
import PopupNavbar from "./PopupNavbar";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import TagsComponent from "../tabs/TagsComponent";

const PostInfoPopupModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
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
    <div
      className="z-10 fixed inset-0 flex justify-center items-center bg-black/50 overflow-auto"
      onClick={handleCloseModal}
    >
      <div
        className={`rounded-lg max-h-[90vh] h-full space-x-4 flex p-6 fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-[1400px] w-full shadow bg-white z-10 overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <VideoPlayer />
        <PopupNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
        <RxCross2
          color="gray"
          size={26}
          className="absolute top-2 right-0 cursor-pointer"
          onClick={handleCloseModal}
        />
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default PostInfoPopupModal;
