"use client";
import Card from "@/components/Card";
import DnDComponent from "@/components/DnD/DnD";
import { MyData } from "@/lib/features/home/fallbackJson";
import { Status, fetchFirstData, getData, getError, getStatus, ifUpdated, updateAsync, updatedata } from "@/lib/features/home/homeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import Loading from "./loading";

const Home = () => {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector(getStatus);
  const error = useAppSelector(getError);
  const data = useAppSelector(getData);
  const updated = useAppSelector(ifUpdated);

  useEffect(() => {
    // fetch first time data
    dispatch(fetchFirstData({}));
  }, []);

  useEffect(() => {
    // call api call every 5 sec
    const interval = setInterval(() => {
      if (updated) {
        dispatch(updateAsync(data));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [updated, dispatch, data]);

  if (loadingState === Status.LOADING) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Loading />
      </main>
    );
  }

  if (error) return <div>Error: {error}</div>;

  const handleUpdate = (from: number, to: number) => {
    const newData = [...data];
    const item = newData.splice(from, 1)[0];
    newData.splice(to, 0, item);
    dispatch(updatedata(newData));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-full items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {data?.map((item: MyData, index) => {
            return (
              <DnDComponent key={item.position} index={index} updated={handleUpdate}>
                <Card key={item.position} item={item} />
              </DnDComponent>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
