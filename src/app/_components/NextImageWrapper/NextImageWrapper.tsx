import Image, { ImageProps } from "next/image";
import React from "react";

function NextImageWrapper({ src, alt, ...rest }: ImageProps) {
  return <Image src={src} alt={alt} {...rest} />;
}

export default NextImageWrapper;
