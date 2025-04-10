"use client";

import { ImageList, ImageListItem } from "@mui/material";
import { StaticImageData } from "next/image";
import React from "react";
import LandingImage from "./LandingImage";

export type ImageItem = {
  src: StaticImageData;
  alt: string;
  link: string;
};

type ImagesLayoutBProps = {
  images: ImageItem[];
};

function ImagesLayoutB(props: ImagesLayoutBProps) {
  const { images } = props;

  return (
    <ImageList variant="quilted" cols={5} gap={0}>
      <ImageListItem cols={2} style={{ aspectRatio: 1 / 1 }}>
        {images[0] && (
          <LandingImage
            src={images[0].src}
            alt={images[0].alt}
            link={images[0].link}
          />
        )}
      </ImageListItem>
      <ImageListItem cols={3} style={{ aspectRatio: 3 / 2 }}>
        {images[1] && (
          <LandingImage
            src={images[1].src}
            alt={images[1].alt}
            link={images[1].link}
          />
        )}
      </ImageListItem>
    </ImageList>
  );
}

export default ImagesLayoutB;
