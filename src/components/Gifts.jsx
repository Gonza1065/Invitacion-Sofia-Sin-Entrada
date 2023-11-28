import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import "../componentsCss/Gifts.css";
export function Gifts() {
  const [showData, setShowData] = useState(false);
  const toggleData = () => {
    setShowData(!showData);
  };
  const dataAnimation = useSpring({
    opacity: showData ? 1 : 0,
  });
  return (
    <>
      <div className="title-gifts">
        <h1>Obsequios</h1>
      </div>
      <div className="text-gift">
        <h2>
          Para mí tu presencia es el mejor regalo, pero si querés obsequiarme
          algo te sugiero las siguientes opciones
        </h2>
      </div>
      <div className="img-gift">
        <img
          src="https://res.cloudinary.com/dn2vrx9eu/image/upload/v1701125674/WhatsApp_Video_2023-11-23_at_22.52.38_fqf1ty.gif"
          alt=""
        />
      </div>
      <div className="icon-gift">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="data">
        <button onClick={toggleData}>Ver datos</button>
        <animated.div style={dataAnimation}>
          <p>Banco: xxxxxx</p>
          <p>Mercado Pago: xxxxxx</p>
        </animated.div>
      </div>
    </>
  );
}
