const VideoPlayer = ({
  videoLink,
  videoId,
}: {
  videoLink: string;
  videoId: string;
}) => {
  return (
    <div className="min-w-[430px] w-[430px] h-full flex-none overflow-hidden border-2 border-gray-400">
      <video key={videoId} className="w-full h-full object-cover" controls>
        <source src={videoLink} type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default VideoPlayer;
