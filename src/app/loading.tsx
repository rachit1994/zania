export const ImageLoader = () => <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>

const Loading = () => {
  return (
    <div className="flex h-full items-center justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {[...Array(5)].map((_, index) => (
          <ImageLoader key={`image-loader-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
