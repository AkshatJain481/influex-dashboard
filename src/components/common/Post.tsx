import { useState } from "react";
import { InstagramMedia } from "../../utils/interfaces";
import { Heart, MessageCircleMore, Check } from "lucide-react";

const Post = ({
  post,
  setActivePost,
  setShowPostDetails,
  setSelectedItems,
}: {
  post: InstagramMedia;
  setActivePost: Function;
  setShowPostDetails: Function;
  setSelectedItems: Function;
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  // Memoize the media component to prevent re-renders
  const MediaComponent = () => {
    if (post.media_type === "VIDEO") {
      return (
        <img
          src={post.thumbnail_url}
          alt={`Post ${post.id}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      );
    } else {
      return (
        <img
          src={post.media_url}
          alt={`Post ${post.id}`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      );
    }
  };

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
    setSelectedItems((prevLikes: number) =>
      isChecked ? prevLikes - 1 : prevLikes + 1
    );
  };

  return (
    <div
      key={post.id}
      className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100 rounded-lg h-52 w-52 flex-grow-0 border-2 border-gray-400"
      onClick={() => {
        setActivePost(post);
        setShowPostDetails(true);
      }}
    >
      {/* Render Image or Video */}
      {MediaComponent()}

      {/* Overlay on hover */}
      {isChecked ? (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 opacity-100">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer"
              checked={isChecked}
              onChange={handleCheckChange}
              onClick={(e) => e.stopPropagation()} // Ensure checkbox click doesn't trigger div click
            />
          </div>
          <Check size={100} color="white" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-6 text-white">
            <div className="absolute top-2 right-2">
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={isChecked}
                onChange={handleCheckChange}
                onClick={(e) => e.stopPropagation()} // Ensure checkbox click doesn't trigger div click
              />
            </div>
            <div className="flex items-center gap-2">
              <Heart size={20} color="white" />
              <span className="font-semibold">10</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircleMore size={20} color="white" />
              <span className="font-semibold">20</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
