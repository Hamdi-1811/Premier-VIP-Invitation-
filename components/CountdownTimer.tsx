import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('December 10, 2025 12:30:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white text-center">
      <h3 className="text-2xl font-bold mb-4">Countdown to the Event</h3>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;