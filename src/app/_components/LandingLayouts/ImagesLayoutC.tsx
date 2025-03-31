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
  images: ImageItem[];
};

function ImagesLayoutC(props: ImagesLayoutAProps) {
  const { images } = props;

  return (
    <ImageList variant="quilted" cols={5} gap={0}>
      <ImageListItem cols={2} style={{ aspectRatio: 2 / 5 }}>
        {images[0] && (
          <LandingImage
            src={images[0].src}
            alt={images[0].alt}
            link={images[0].link}
          />
        )}
      </ImageListItem>

      <ImageListItem cols={3} style={{ aspectRatio: 3 / 5 }}>
        <ImageList variant="quilted" cols={3} gap={0}>
          <ImageListItem cols={3} style={{ aspectRatio: 3 / 3 }}>
            {images[1] && (
              <LandingImage
                src={images[1].src}
                alt={images[1].alt}
                link={images[1].link}
              />
            )}
          </ImageListItem>
          <ImageListItem cols={3} style={{ aspectRatio: 3 / 2 }}>
            {images[2] && (
              <LandingImage
                src={images[2].src}
                alt={images[2].alt}
                link={images[2].link}
              />
            )}
          </ImageListItem>
        </ImageList>
      </ImageListItem>
    </ImageList>
  );
}

export default ImagesLayoutC;
