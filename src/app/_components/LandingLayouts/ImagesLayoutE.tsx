"use client";

import { ImageList, ImageListItem } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";
import LandingImage from "./LandingImage";

export type ImageItem = {
  src: StaticImageData;
  alt: string;
};

type ImagesLayoutEProps = {
  images: ImageItem[];
};

function ImagesLayoutE(props: ImagesLayoutEProps) {
  const { images } = props;

  return (
    <ImageList variant="quilted" cols={5} gap={0}>
      <ImageListItem cols={2} style={{ aspectRatio: 2 / 5 }}>
        {images[0] && <LandingImage src={images[0].src} alt={images[0].alt} />}
      </ImageListItem>
      <ImageListItem cols={3} style={{ aspectRatio: 3 / 5 }}></ImageListItem>
    </ImageList>
  );
}

export default ImagesLayoutE;

{
  /* {images[2] && <LandingImage src={images[2].src} alt={images[2].alt} />} */
}

{
  /* {images[1] && <LandingImage src={images[1].src} alt={images[1].alt} />} */
}
