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
    fade: true, // Habilitar la transición de desvanecimiento
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
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1665614528/cld-sample-2.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1665614528/cld-sample.jpg"
              alt=""
            />
          </div>
          <div className="img">
            <img
              src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1665614518/samples/ecommerce/leather-bag-gray.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
