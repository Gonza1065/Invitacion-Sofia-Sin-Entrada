import { Link } from "react-router-dom";
import "../componentsCss/Location.css";
export function Location() {
  return (
    <>
      <div className="title-where-when">
        <h1>Dónde y Cuándo</h1>
      </div>
      <div className="information">
        <div className="title-party">
          <h2>Fiesta</h2>
        </div>
        <div className="img-salon">
          <img
            src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1700777125/WhatsApp_Image_2023-11-23_at_13.24.15_lf0uq6.jpg"
            alt=""
          />
        </div>
        <div className="name-salon">
          <h4>María Victoria</h4>
          <h4>Salón de Eventos</h4>
        </div>
        <div className="information-when-where">
          <h3>
            <span>Cuándo</span>: 20 de abril 2024 21 hrs.
          </h3>
          <h3>
            <span>Dirección</span>: Callejón Fernandes 730, San Martín,
            Argentina
          </h3>
        </div>
        <div className="see-location">
          <Link to="https://maps.app.goo.gl/vfrBaQ3qMZvem4587">
            Ver en el mapa
          </Link>
        </div>
      </div>
    </>
  );
}
