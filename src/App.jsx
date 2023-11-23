import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Family } from "./components/Family";
import { Gifts } from "./components/Gifts";
import { Itinerary } from "./components/Itinerary";
import { Location } from "./components/Location";
import { PhotoPhrase } from "./components/PhotoPhrase";
import { Photos } from "./components/Photos";
import { Presentation } from "./components/Presentation";
function App() {
  return (
    <>
      <main className="main-page">
        <div className="body-presentation">
          <Presentation />
        </div>
        <div className="body-photo-phrase">
          <PhotoPhrase />
        </div>
        <div className="body-location">
          <BrowserRouter>
            <Location />
          </BrowserRouter>
        </div>
        <div className="body-itinerary">
          <Itinerary />
        </div>
        <div className="body-photos">
          <Photos />
        </div>
        <div className="body-family">
          <Family />
        </div>
        <div className="body-gifts">
          <Gifts />
        </div>
      </main>
    </>
  );
}

export default App;
