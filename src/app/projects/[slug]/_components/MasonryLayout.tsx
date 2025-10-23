import styles from "./MasonryLayout.module.css";
import { ProjectImage } from "@/app/_utils/types";
import MasonryImage from "./MasonryImage";

function MasonryLayout({
  projectDescription,
  images,
}: {
  projectDescription: React.ReactNode;
  images: ProjectImage[];
}) {
  return (
    <div className={styles.masonryColumns}>
      {projectDescription}
      {images.map((image) => (
        <MasonryImage {...image} key={image.id} />
      ))}
    </div>
  );
}

export default MasonryLayout;
