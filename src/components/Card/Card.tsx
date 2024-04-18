import { base64Str } from "@/components/Loaders/imageFallbackLoader";
import Overlay from "@/components/Overlay";
import { MyData } from "@/lib/features/home/fallbackJson";
import Image from "next/image";
import { memo } from "react";
import Image0 from '../../../public/images/0.webp';
import Image1 from '../../../public/images/1.webp';
import Image2 from '../../../public/images/2.webp';
import Image3 from '../../../public/images/3.webp';
import Image4 from '../../../public/images/4.webp';

const imagesMap = {
 0: Image0,
 1: Image1,
 2: Image2,
 3: Image3,
 4: Image4,
};

const Card = ({ item }: { item: MyData }) => {
  return (
    <Overlay>
      <h3 className="text-left">{item.title}</h3>
        <Image
          src={imagesMap[item.position as keyof typeof imagesMap]}
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