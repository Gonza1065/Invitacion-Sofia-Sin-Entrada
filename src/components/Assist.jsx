import { Link } from "react-router-dom";
import "../componentsCss/Assist.css";
export function Assist() {
  return (
    <>
      <div className="title-assist">
        <h1>Confirmación de Asistencia</h1>
      </div>
      <div className="text-assist">
        <h2>¿Podría confirmar su asistencia a través de este formulario?</h2>
      </div>
      <div className="btn-confirm-assist">
        <Link>Confirmar Asistencia</Link>
      </div>
    </>
  );
}
