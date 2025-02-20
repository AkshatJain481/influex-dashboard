import Layout from "../Layout";
import { useState, useEffect } from "react";
import { InstagramMedia } from "../utils/interfaces";
import PostInfo from "../components/ui/PostInfo";
import Post from "../components/common/Post";

const Dashboard = () => {
  const [showPostDetails, setShowPostDetails] = useState<boolean>(false);
  const [activePost, setActivePost] = useState<InstagramMedia>();
  const [posts, setPosts] = useState<InstagramMedia[]>([]);
  const fetchMedia = async () => {
    try {
      const response = await fetch(
        "https://graph.instagram.com/v21.0/8599394353405207/media?fields=id,thumbnail_url,caption,media_type,media_url,timestamp&access_token=IGQWRQUU0yNzdjd0MyY0dJcU9ZAQzRGVmlmMDYwRWFrRm50THlBa1ZAEZAzhKWlNxNjhtOXFoaF9Dc0NYY01TOW5mTUlMUVA5d19zY2tYem0weWZAIbktoMDlkdmNheGhDRVRyR2JiRWpTYVMzRndmQmtnU2hjNVNtUmwyNFNtSEZARYWhsQQZDZD"
      );
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching media data: ", error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);
  // Sample post data - replace with your actual data

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold mb-6 w-1/2">Media</h2>
          <h2 className="text-2xl font-bold mb-6 w-1/2">Media Details</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Fixed height wrapper for posts */}
          <div className="flex flex-col max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="flex flex-wrap gap-4">
              {posts.map((post: InstagramMedia) => (
                <Post
                  key={post.id}
                  post={post}
                  setActivePost={setActivePost}
                  setShowPostDetails={setShowPostDetails}
                />
              ))}
            </div>
          </div>

          {/* Post Details Section - Do not let it affect flex sibling height */}
          <div className="h-full overflow-y-auto">
            {showPostDetails ? (
              <PostInfo
                postDetails={activePost!}
                handleClose={() => setShowPostDetails(false)}
              />
            ) : (
              <p className="text-gray-500 font-bold text-lg">No Post Selected!</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
