import { useState, useEffect } from 'react';

const SECONDS_PER_DAY = 24 * 60 * 60;

export function getDayProgressPercent(date) {
  const secondsSinceMidnight =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return Math.round((secondsSinceMidnight * 100) / SECONDS_PER_DAY);
}

export function useCurrentTime(intervalMs = 1000) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(intervalId);
  }, [intervalMs]);

  return now;
}
