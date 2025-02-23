import Layout from "../Layout";
import { useState, useEffect } from "react";
import { InstagramMedia } from "../utils/interfaces";
import PostInfo from "../components/ui/PostInfo";
import Post from "../components/common/Post";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const [showPostDetails, setShowPostDetails] = useState<boolean>(false);
  const [activePost, setActivePost] = useState<InstagramMedia | null>(null);
  const [posts, setPosts] = useState<InstagramMedia[] | null>(null);
  const [selectedItems, setSelectedItems] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const fetchMedia = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://graph.instagram.com/v21.0/8599394353405207/media?fields=id,thumbnail_url,caption,media_type,media_url,timestamp&access_token=IGQWRQUU0yNzdjd0MyY0dJcU9ZAQzRGVmlmMDYwRWFrRm50THlBa1ZAEZAzhKWlNxNjhtOXFoaF9Dc0NYY01TOW5mTUlMUVA5d19zY2tYem0weWZAIbktoMDlkdmNheGhDRVRyR2JiRWpTYVMzRndmQmtnU2hjNVNtUmwyNFNtSEZARYWhsQQZDZD"
      );
      console.log(response);
      if (!response.ok) {
        console.error("Failed to fetch media data");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching media data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);
  // Sample post data - replace with your actual data

  if (loading) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center">
          <Loader2 className="animate-spin w-12 h-12 text-black" />
        </div>
      </Layout>
    );
  }

  if (!posts) {
    return (
      <Layout>
        <div className="h-screen flex items-center justify-center">
          <p className="text-4xl uppercase bg-gray-200 p-2 font-semibold">
            No posts to show
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold mb-6 w-1/2 flex justify-between">
            Media
            {selectedItems > 0 && (
              <span className="text-gray-500 font-bold text-lg">
                {selectedItems} selected
              </span>
            )}
          </h2>

          <h2 className="text-2xl font-bold mb-6 w-1/2">Media Details</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Fixed height wrapper for posts */}
          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="flex flex-wrap gap-4">
              {posts?.map((post: InstagramMedia) => (
                <Post
                  key={post.id}
                  post={post}
                  setActivePost={setActivePost}
                  setShowPostDetails={setShowPostDetails}
                  setSelectedItems={setSelectedItems}
                />
              ))}
            </div>
          </div>

          {/* Post Details Section */}
          <div className="h-full overflow-y-auto">
            {posts ? (
              showPostDetails ? (
                <PostInfo
                  postDetails={activePost!}
                  handleClose={() => setShowPostDetails(false)}
                />
              ) : (
                <p className="text-gray-500 text-lg font-bold">
                  No Post Selected!
                </p>
              )
            ) : (
              <div className="text-xl h-full pt-[30%]">
                There are no posts to show.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
