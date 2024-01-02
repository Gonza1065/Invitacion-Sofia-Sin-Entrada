import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../componentsCss/Photos.css";
export function Photos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <>
      <div className="title-photos">
        <h1>Mis fotos</h1>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1704042933/WhatsApp_Image_2023-12-31_at_12.33.21_pmjsht.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <div className="img-small">
              <img
                src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1704043373/WhatsApp_Image_2023-12-31_at_12.32.00_luewaa.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973027/WhatsApp_Image_2023-12-27_at_21.27.51_d8nafy.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
