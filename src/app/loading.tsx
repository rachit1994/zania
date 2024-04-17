export const ImageLoader = () => <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="grid grid-cols-3 gap-4 w-full">
        {[...Array(5)].map((_, index) => (
          <ImageLoader key={`image-loader-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
