"use client";

import { urlForImage } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
};

export default function SanityImage({ src, alt, ...props }: Props) {
    if(!src) {
        return <></>
    }
  return (
    <Image
      src="Doesn't matter"
      alt={alt}
      fill
      className="object-cover"
      loader={({ width, quality = 100 }) =>
        urlForImage(src).width(width).quality(quality).url()
      }
      {...props}
    />
  );
}