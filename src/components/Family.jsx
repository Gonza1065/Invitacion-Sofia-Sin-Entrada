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
          <h4>(Foto Madre)</h4>
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
