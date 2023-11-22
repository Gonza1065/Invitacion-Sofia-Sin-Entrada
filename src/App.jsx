import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Itinerary } from "./components/Itinerary";
import { Location } from "./components/Location";
import { PhotoPhrase } from "./components/PhotoPhrase";
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
      </main>
    </>
  );
}

export default App;
