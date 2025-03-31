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

type ImagesLayoutAProps = {
  image: ImageItem;
};

function ImagesLayoutD1(props: ImagesLayoutAProps) {
  const { image } = props;

  return (
    <ImageList variant="quilted" cols={5} gap={0}>
      <ImageListItem cols={5} style={{ aspectRatio: 5 / 2 }}>
        <LandingImage src={image.src} alt={image.alt} link={image.link} />
      </ImageListItem>
    </ImageList>
  );
}

export default ImagesLayoutD1;
