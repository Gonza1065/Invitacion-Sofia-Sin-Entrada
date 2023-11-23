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
            <h1>Mary</h1>
            <h2>- Mi Abuela -</h2>
          </div>
        </div>
        <div className="img-family">
          <h4>(Foto Padre)</h4>
        </div>
        <div className="img-family">
          <h4>(Foto Hermanos/as)</h4>
        </div>
      </div>
    </>
  );
}
