"use client";
import { MyData } from "@/components/Body/fetcher";
import Card from "@/components/Card";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-full items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {data?.map((item: MyData) => {
            return (
              <Card key={item.position} item={item} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
