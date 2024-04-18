import { base64Str } from "@/components/Loaders/imageFallbackLoader";
import Overlay from "@/components/Overlay";
import Image from "next/image";
import { memo } from "react";
import { MyData } from "../Body/fetcher";

const Card = ({ item }: { item: MyData }) => {
  return (
    <Overlay>
      <h3 className="text-left">{item.title}</h3>
        <Image
          src={`/images/${item.position}.webp`}
          alt={item.title}
          width={100}
          height={100}
          className="rounded-lg h-64 w-64"
          placeholder={base64Str}
        />
    </Overlay>
  );
};

export default memo(Card);