import Image, { ImageProps } from "next/image";
import React from "react";
import styles from "./LandingImage.module.css";

type Props = ImageProps;

function LandingImage(props: Props) {
  const { className, ...restProps } = props;

  return (
    <div className={styles.imageContainer}>
      <Image
        {...restProps}
        fill
        className={`${styles.image} ${className || ""}`}
        alt={props.alt ?? ""}
      />
    </div>
  );
}

export default LandingImage;
