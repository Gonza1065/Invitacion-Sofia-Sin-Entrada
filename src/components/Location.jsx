import { Link } from "react-router-dom";
import "../componentsCss/Location.css";
export function Location() {
  return (
    <>
      <div className="title-where-when">
        <h1>Dónde y Cuando</h1>
      </div>
      <div className="information">
        <div className="title-party">
          <h2>Fiesta</h2>
        </div>
        <div className="img-salon">
          <h3>(Imagen del salón)</h3>
        </div>
        <div className="name-salon">
          <h4>(Nombre del salón)</h4>
        </div>
        <div className="information-when-where">
          <h3>
            <span>Cuando:</span> 20 de abril 2024 21 hrs.
          </h3>
          <h3>
            <span>Dirección: </span> (dirección del salón)
          </h3>
        </div>
        <div className="see-location">
          <Link to="#">Ver en el mapa</Link>
        </div>
      </div>
    </>
  );
}
