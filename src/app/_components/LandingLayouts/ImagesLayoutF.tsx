"use client";

import { StaticImageData } from "next/image";
import React from "react";
import LandingImage from "./LandingImage";

import styles from "./ImageLayoutFStyles.module.css";

export type ImageItem = {
  src: StaticImageData;
  alt: string;
  link: string;
};

type ImagesLayoutFProps = {
  images: ImageItem[];
};

function ImagesLayoutF(props: ImagesLayoutFProps) {
  const { images } = props;

  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <LandingImage
          src={images[0].src}
          alt={images[0].alt}
          link={images[0].link}
        />
      </div>
      <div className={styles.div2}>
        <LandingImage
          src={images[1].src}
          alt={images[1].alt}
          link={images[1].link}
        />
      </div>
      <div className={styles.div4}>
        <LandingImage
          src={images[3].src}
          alt={images[3].alt}
          link={images[3].link}
        />
      </div>
      <div className={styles.div5}>
        <LandingImage
          src={images[2].src}
          alt={images[2].alt}
          link={images[2].link}
        />
      </div>
      <div className={styles.div6}>
        <LandingImage
          src={images[4].src}
          alt={images[4].alt}
          link={images[4].link}
        />
      </div>
    </div>
  );
}

export default ImagesLayoutF;
