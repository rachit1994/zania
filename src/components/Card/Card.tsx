import { base64Str } from "@/components/Loaders/imageFallbackLoader";
import Image from "next/image";
import { MyData } from "../Body/fetcher";

const Card = ({ item }: { item: MyData }) => {
  return (
    <div key={item.position} className="col-span-1 rounded-lg h-64">
      <h3>{item.title}</h3>
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
};

export default Card;
