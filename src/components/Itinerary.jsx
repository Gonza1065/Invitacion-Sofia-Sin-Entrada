import { faUtensils, faWineGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../componentsCss/Itinerary.css";
export function Itinerary() {
  return (
    <>
      <div className="title-itinerary">
        <h1>Itinerario</h1>
      </div>
      <div className="schedule-list">
        <div className="icons">
          <div className="icon-glass">
            <FontAwesomeIcon icon={faWineGlass} />
          </div>
          <div className="icon-utensils">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
        </div>
        <div className="information-schedule">
          <div className="information-reception">
            <h3>Recepción, 21:15 hrs</h3>
          </div>
          <div className="information-food">
            <h3>Banquete, 22:00 hrs</h3>
          </div>
        </div>
      </div>
    </>
  );
}
