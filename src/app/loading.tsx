const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center w-full">
      <div className="grid grid-cols-3 gap-4 w-full">
        {/* First row of 3 cards */}
        <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>
        <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>
        <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>
        {/* Second row of 2 cards, centered */}
        <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>
        <div className="col-span-1 animate-pulse rounded-lg bg-gray-700 h-64"></div>
      </div>
    </div>
  );
};

export default Loading;
