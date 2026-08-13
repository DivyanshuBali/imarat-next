"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import { useToggle } from "@/app/_hooks/useToggle";
import NextImageWrapper from "@/app/_components/NextImageWrapper/NextImageWrapper";
import styles from "./page.module.css";

type PastProjectPhoto = {
  public_id: string;
  url: string;
  file: string;
  width: number;
  height: number;
};

export default function PastProjectsMasonry({
  photos,
}: {
  photos: PastProjectPhoto[];
}) {
  const [lightboxOpen, toggleLightbox] = useToggle(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <div className={styles.masonryColumns}>
        {photos.map((photo, index) => (
          <div key={photo.public_id} className={styles.masonryItem}>
            <NextImageWrapper
              src={photo.url}
              alt={photo.file.replace(/\.[^.]+$/, "")}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className={styles.image}
              onClick={() => {
                setLightboxIndex(index);
                toggleLightbox();
              }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={toggleLightbox}
        slides={photos.map((photo) => ({ src: photo.url }))}
        index={lightboxIndex}
        plugins={[Zoom]}
      />
    </>
  );
}
