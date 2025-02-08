import React, { useState, useEffect } from 'react';

interface EventCountdownProps {
  targetDate: Date;
  isEnabled: boolean;
  label?: string;
}

export default function EventCountdown({ targetDate, isEnabled, label }: EventCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!isEnabled) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="py-4 px-6 transition-all duration-300 hover:scale-105">
      {label && (
        <div className="text-sm text-violet-400 font-medium mb-2 text-center">{label}</div>
      )}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white">{timeLeft.days}</span>
          <span className="text-xs text-gray-400 mt-1">days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white">{timeLeft.hours}</span>
          <span className="text-xs text-gray-400 mt-1">hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white">{timeLeft.minutes}</span>
          <span className="text-xs text-gray-400 mt-1">min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-white">{timeLeft.seconds}</span>
          <span className="text-xs text-gray-400 mt-1">sec</span>
        </div>
      </div>
    </div>
  );
}