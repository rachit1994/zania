import { base64Str } from "@/components/Loaders/imageFallbackLoader";
import Overlay from "@/components/Overlay";
import { MyData } from "@/lib/features/home/fallbackJson";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { memo } from "react";

const Card = ({ item }: { item: MyData }) => {
  const pathname = usePathname();
  return (
    <Overlay>
      <h3 className="text-left">{item.title}</h3>
        <Image
          src={`${pathname === '/' ? '/' : `${pathname}/`}images/${item.position}.webp`}
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