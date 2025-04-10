
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Setting the target date to April 22, 2025
  const targetDate = new Date("2025-04-22T00:00:00+05:30");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-4 text-white">Event Countdown</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {timeUnits.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-violet-900 to-blue-900 p-4 rounded-lg shadow-lg shadow-violet-500/20 w-24 h-24 flex items-center justify-center border border-violet-500">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-cyan-300">
                {value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="mt-2 text-gray-400">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg text-center text-violet-300">
        April 22, 2025 | Wadia College of Engineering
      </p>
    </div>
  );
};

export default CountdownTimer;
