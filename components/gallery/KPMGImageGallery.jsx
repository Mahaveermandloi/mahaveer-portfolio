

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// Helper to generate image data dynamically
function generateImageSet(basePath, count, extension = "jpg") {
  return Array.from({ length: count }, (_, i) => {
    const index = i + 1;
    const src = `${basePath}/kpmg${index}.${extension}`;

    // Use realistic ratio (3:2) but you can adjust if yours are portrait
    const width = 3;
    const height = 2;

    return {
      src,
      width,
      height,
      alt: `KPMG Internship Image ${index}`,
      srcSet: breakpoints.map((bp) => ({
        src,
        width: bp,
        height: Math.round((height / width) * bp),
      })),
    };
  });
}

const kpmgPhotos = generateImageSet("/images/kpmg", 20);

export function KPMGImageGallery() {
  return (
    <main style={{ padding: "16px", maxWidth: "1200px", margin: "0 auto" }}>
      <RowsPhotoAlbum
        photos={kpmgPhotos}
        targetRowHeight={250}     // controls row height, adjust for your preference
        spacing={8}               // space between images
        padding={4}
        layoutOptions={{ fit: "contain" }} // ensures no cropping or stretching
      />
    </main>
  );
}
