"use client";

import { CldImage } from "next-cloudinary";
import Image, { ImageProps } from "next/image";
import React from "react";

function NextImageWrapper({ src, alt, ...rest }: ImageProps) {
  if (
    typeof src === "string" &&
    src.startsWith("https://res.cloudinary.com/")
  ) {
    return <CldImage src={src} alt={alt} {...rest} />;
  }

  return <Image src={src} alt={alt} {...rest} />;
}

export default NextImageWrapper;
