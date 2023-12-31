import "../componentsCss/Presentation.css";
import { Count } from "./Count";
export function Presentation() {
  return (
    <>
      <div className="title">
        <h1>- Mis XV años - </h1>
      </div>
      <div className="name-sofia">
        <h1>Sofia</h1>
      </div>
      <div className="count">
        <Count />
      </div>
    </>
  );
}
