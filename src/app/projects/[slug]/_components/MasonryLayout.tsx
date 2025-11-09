"use client";

import styles from "./MasonryLayout.module.css";
import { ProjectImage } from "@/app/_utils/types";
import MasonryImage from "./MasonryImage";
import { useToggle } from "@/app/_hooks/useToggle";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";

function MasonryLayout({
  projectDescription,
  images,
}: {
  projectDescription: React.ReactNode;
  images: ProjectImage[];
}) {
  const [lightboxOpen, toggleLightbox] = useToggle(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <div className={styles.masonryColumns}>
      {projectDescription}
      {images.map((image, index) => (
        <MasonryImage
          {...image}
          key={image.id}
          onClick={() => {
            setLightboxIndex(index);
            toggleLightbox();
          }}
        />
      ))}

      <Lightbox
        open={lightboxOpen}
        close={toggleLightbox}
        slides={images.map((img) => ({
          src: typeof img.src === "string" ? img.src : img.src?.src ?? "",
        }))}
        index={lightboxIndex}
        plugins={[Zoom]}
      />
    </div>
  );
}

export default MasonryLayout;
