import { useEffect, useState } from "react";
import "../componentsCss/Gallery.css";

export function Gallery() {
  const images = [
    "https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973027/WhatsApp_Image_2023-12-27_at_21.27.52_1_aldj79.jpg",
    "https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973027/WhatsApp_Image_2023-12-27_at_21.27.51_1_doo82o.jpg",
    "https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973028/WhatsApp_Image_2023-12-27_at_21.27.53_kfnq8e.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="img-gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={index === currentImageIndex ? "visible" : "hidden"}
        />
      ))}
    </div>
  );
}
