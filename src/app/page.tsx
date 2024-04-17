"use client";
import { base64Str } from "@/components/Loaders/imageFallbackLoader";
import Image from "next/image";
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
      <div className="flex h-screen items-center justify-center w-full">
        <div className="grid grid-cols-3 gap-4 w-full">
          {data?.map((item: any) => {
            return (
              <div key={item.position} className="col-span-1 rounded-lg h-64">
                <Image
                  src={`/images/${item.position}.webp`}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full h-full rounded-lg"
                  placeholder={base64Str}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
