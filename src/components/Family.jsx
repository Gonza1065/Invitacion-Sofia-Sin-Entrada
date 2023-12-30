import "../componentsCss/Family.css";
export function Family() {
  return (
    <>
      <div className="title-family">
        <h1>Mis personas favoritas</h1>
      </div>
      <div className="thanks">
        <h2>¡Gracias por hacer esto posible!</h2>
      </div>
      <div className="photos-family">
        <div className="img-family">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700781682/WhatsApp_Image_2023-11-23_at_20.15.54_1_rrwu5l.jpg"
            alt=""
          />
          <div className="relatives">
            <h2>- Mi Abuela -</h2>
          </div>
        </div>
        <div className="img-family">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973649/WhatsApp_Image_2023-12-27_at_21.38.20_iz7te2.jpg"
            alt=""
          />
          <div className="relatives">
            <h2>- Mis papás - </h2>
          </div>
        </div>
        <div className="img-family">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973649/WhatsApp_Image_2023-12-27_at_21.39.11_q4dp55.jpg"
            alt=""
          />
          <div className="relatives">
            <h2>- Mis padrinos - </h2>
          </div>
        </div>
        <div className="img-family">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973649/WhatsApp_Image_2023-12-27_at_21.39.40_cr6tvm.jpg"
            alt=""
          />
          <div className="relatives">
            <h2>- Mis hermanos - </h2>
          </div>
        </div>
        <div className="img-family">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1703973649/WhatsApp_Image_2023-12-30_at_17.51.25_fs83bt.jpg"
            alt=""
          />
          <div className="relatives">
            <h2>- Mis amigas - </h2>
          </div>
        </div>
      </div>
    </>
  );
}
