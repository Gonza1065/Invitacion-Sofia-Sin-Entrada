import { useEffect, useState } from "react";
import "../componentsCss/Count.css";
export function Count() {
  const targetDate = new Date("2024-04-20");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    const daysRemaining = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 3600 * 24)) / (1000 * 3600)
    );
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 3600)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days: daysRemaining,
      hours: hoursRemaining,
      minutes: minutesRemaining,
      seconds: secondsRemaining,
    };
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="count">
      <p>
        <span className="number-days">{timeRemaining.days}</span>{" "}
        <div className="days">Dias</div>
        {/* <span className="days">Dias</span> */}
      </p>
      <p>
        <span className="number-hours">{timeRemaining.hours}</span>{" "}
        <div className="hours">Horas</div>
        {/* <span className="hours">Horas</span> */}
      </p>
      <p>
        <span className="number-minutes">{timeRemaining.minutes}</span>{" "}
        <div className="minutes">Minutos</div>
        {/* <span className="minutes">Minutos</span> */}
      </p>
      <p>
        <span className="number-seconds">{timeRemaining.seconds}</span>{" "}
        <div className="seconds">Segundos</div>
        {/* <span className="seconds">Segundos</span> */}
      </p>
    </div>
  );
}
