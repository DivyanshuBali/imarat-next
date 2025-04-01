import Image, { ImageProps } from "next/image";
import React from "react";
import styles from "./LandingImage.module.css";
import Link from "next/link";

type Props = ImageProps & {
  link?: string;
};

function LandingImage(props: Props) {
  const { className, alt, link, ...restProps } = props;

  return (
    <div className={styles.imageContainer}>
      <Link href={link ?? ""} style={{ position: "relative" }}>
        <Image
          {...restProps}
          fill
          className={`${styles.image} ${className || ""}`}
          alt={alt ?? ""}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
    </div>
  );
}

export default LandingImage;
