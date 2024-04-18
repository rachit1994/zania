"use client";
import Card from "@/components/Card";
import { MyData } from "@/lib/features/home/fallbackJson";
import { Status, fetchFirstData, getData, getError, getStatus } from "@/lib/features/home/homeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loading from "./loading";

const Home = () => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(getStatus);
  const error = useAppSelector(getError);
  const data = useAppSelector(getData);

  useEffect(() => {
    dispatch(fetchFirstData({}));
  }, []);

  if (loadingState === Status.LOADING) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Loading />
      </main>
    );
  }

  if (error) return <div>Error: {error}</div>;

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
