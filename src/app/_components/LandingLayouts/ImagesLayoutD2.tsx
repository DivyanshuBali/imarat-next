"use client";

import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import LandingImage from "./LandingImage";
import { StaticImageData } from "next/image";

export type ImageItem = {
  src: StaticImageData;
  alt: string;
};

type ImagesLayoutAProps = {
  image: ImageItem;
};

function ImagesLayoutD2(props: ImagesLayoutAProps) {
  const { image } = props;

  return (
    <ImageList variant="quilted" cols={5} gap={0}>
      <ImageListItem cols={5} style={{ aspectRatio: 5 / 3 }}>
        {image && <LandingImage src={image.src} alt={image.alt} />}
      </ImageListItem>
    </ImageList>
  );
}

export default ImagesLayoutD2;
