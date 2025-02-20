const ImageViewer = ({ imageLink }: { imageLink: string }) => {
  return (
    <div className="min-w-[430px] w-[430px] h-full flex-none overflow-hidden border-2 border-gray-400">
      <img src={imageLink} alt="Post" className="object-cover w-full h-full" />
    </div>
  );
};

export default ImageViewer;
