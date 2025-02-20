import Layout from "../Layout";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { useState } from "react";
import PostInfoPopupModal from "../components/ui/PostInfoPopupModal";

const Dashboard = () => {
  const [showPostDetails, setShowPostDetails] = useState(false);
  // Sample post data - replace with your actual data
  const posts = [
    { id: 1, likes: 234, comments: 12 },
    { id: 2, likes: 543, comments: 24 },
    { id: 3, likes: 876, comments: 45 },
    { id: 4, likes: 234, comments: 15 },
    { id: 5, likes: 432, comments: 32 },
    { id: 6, likes: 654, comments: 21 },
    { id: 7, likes: 345, comments: 43 },
    { id: 8, likes: 567, comments: 56 },
    { id: 9, likes: 789, comments: 67 },
    { id: 10, likes: 234, comments: 12 },
    { id: 11, likes: 543, comments: 24 },
    { id: 12, likes: 876, comments: 45 },
    { id: 13, likes: 234, comments: 15 },
    { id: 14, likes: 432, comments: 32 },
    { id: 15, likes: 654, comments: 21 },
    { id: 16, likes: 345, comments: 43 },
    { id: 17, likes: 567, comments: 56 },
    { id: 18, likes: 789, comments: 67 },
    { id: 19, likes: 234, comments: 12 },
    { id: 20, likes: 543, comments: 24 },
    { id: 21, likes: 876, comments: 45 },
    { id: 22, likes: 234, comments: 15 },
    { id: 23, likes: 432, comments: 32 },
    { id: 24, likes: 654, comments: 21 },
    { id: 25, likes: 345, comments: 43 },
    { id: 26, likes: 567, comments: 56 },
    { id: 27, likes: 789, comments: 67 },
    { id: 28, likes: 234, comments: 12 },
    { id: 29, likes: 543, comments: 24 },
    { id: 30, likes: 876, comments: 45 },
    { id: 31, likes: 234, comments: 15 },
    { id: 32, likes: 432, comments: 32 },
    { id: 33, likes: 654, comments: 21 },
    { id: 34, likes: 345, comments: 43 },
    { id: 35, likes: 567, comments: 56 },
    { id: 36, likes: 789, comments: 67 },
    { id: 37, likes: 234, comments: 12 },
    { id: 38, likes: 543, comments: 24 },
    { id: 39, likes: 876, comments: 45 },
    { id: 40, likes: 234, comments: 15 },
    { id: 41, likes: 432, comments: 32 },
    { id: 42, likes: 654, comments: 21 },
  ];

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="flex flex-wrap gap-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100 rounded-lg h-52 w-52"
              onClick={() => setShowPostDetails(true)}
            >
              {/* Placeholder image - replace src with your actual image path */}
              <img
                src={`https://placehold.co/400x400`}
                alt={`Post ${post.id}`}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <FaRegHeart size={20} color="white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCommentDots size={20} color="white" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPostDetails && (
        <PostInfoPopupModal
          handleCloseModal={() => setShowPostDetails(false)}
        />
      )}
    </Layout>
  );
};

export default Dashboard;
