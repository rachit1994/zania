"use client";
import useSWR from "swr";
import Loading from "./loading";

const Home = () => {
  const { data, error, isLoading } = useSWR("/api/data");

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Loading />
      </main>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
};

export default Home;
