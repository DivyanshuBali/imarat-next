import styles from "./MasonryImage.module.css";
import { ProjectImage } from "@/app/_utils/types";
import NextImageWrapper from "@/app/_components/NextImageWrapper/NextImageWrapper";

export default function MasonryImage({ src, alt }: ProjectImage) {
  return (
    <div className={styles.masonryItem}>
      <NextImageWrapper
        src={src ?? ""}
        // width/height just set max dimensions, Cloudinary auto-scales
        width={1200}
        height={1200}
        alt={alt || ""}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
        className={styles.image}
        priority
      />
    </div>
  );
}
