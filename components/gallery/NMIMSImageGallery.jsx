import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// =================== NMIMS ===================
const nmimsPhotos = [
  { src: "/images/nmims/nmims1.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims2.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims3.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims4.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims5.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims6.jpg", width: 3, height: 2 },
  { src: "/images/nmims/nmims7.jpg", width: 3, height: 2 },
];

export function NMIMSImageGallery() {
  return (
    <RowsPhotoAlbum
      photos={nmimsPhotos}
      targetRowHeight={250}
      spacing={8}
      layoutOptions={{ fit: "contain" }}
    />
  );
}