const VideoPlayer = () => {
  return (
    <div className="min-w-[430px] w-[430px] h-full flex-none overflow-hidden">
      <video className="w-full h-full object-cover" controls>
        <source src="/reel.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default VideoPlayer;
