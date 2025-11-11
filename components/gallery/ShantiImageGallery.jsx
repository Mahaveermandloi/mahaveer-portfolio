import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";


const shantiPhotos = [
  { src: "/images/shanti/shanti1.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti2.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti3.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti4.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti5.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti6.jpg", width: 3, height: 2 },
  { src: "/images/shanti/shanti7.jpg", width: 3, height: 2 },
];

export function ShantiImageGallery() {
  return (
    <RowsPhotoAlbum
      photos={shantiPhotos}
      targetRowHeight={250}
      spacing={8}
      layoutOptions={{ fit: "contain" }}
    />
  );
}