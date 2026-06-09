'use client';

import { useEffect, useState } from 'react';
import { restaurant } from './data';

type Status = { isOpen: boolean; label: string };

// Hours are uniform (8:00 AM – 11:00 PM daily) but we compute live so the
// badge is always accurate. Times are evaluated in IST.
const OPEN_HOUR = 8;
const CLOSE_HOUR = 23;

function compute(): Status {
  // Get current hour in Asia/Kolkata regardless of visitor timezone.
  const now = new Date();
  const ist = new Date(
    now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
  );
  const hour = ist.getHours() + ist.getMinutes() / 60;
  const isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  if (isOpen) {
    return { isOpen: true, label: 'Open now · until 11 PM' };
  }
  return {
    isOpen: false,
    label: hour < OPEN_HOUR ? 'Opens at 8 AM' : 'Closed · opens 8 AM',
  };
}

export function useOpenStatus(): Status {
  // Stable SSR value, then refine on client to avoid hydration mismatch.
  const [status, setStatus] = useState<Status>({
    isOpen: true,
    label: 'Open 8 AM – 11 PM',
  });

  useEffect(() => {
    setStatus(compute());
    const id = setInterval(() => setStatus(compute()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

export const hoursSummary = `Open daily · ${restaurant.hours[0].open} – ${restaurant.hours[0].close}`;
