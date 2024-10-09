'use client';

import { useState, useEffect } from 'react';

// Custom hook for count-up animation
const useCustomCountUp = ({
  start,
  end,
  duration,
  decimalPlaces,
}: {
  start: number;
  end: number;
  duration: number;
  decimalPlaces: number;
}) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateValue = () => {
      const now = Date.now();
      if (now >= endTime) {
        setValue(end);
        return;
      }

      const progress = (now - startTime) / (duration * 1000);
      const currentValue = start + (end - start) * progress;
      setValue(Number(currentValue.toFixed(decimalPlaces)));
      requestAnimationFrame(updateValue);
    };

    requestAnimationFrame(updateValue);
  }, [start, end, duration, decimalPlaces]);

  return { value };
};

const CountUp = ({
  start,
  end,
  duration = 1,
}: {
  start: number;
  end: number;
  duration?: number;
}) => {
  const { value } = useCustomCountUp({
    start,
    end,
    duration,
    decimalPlaces: 1,
  });

  return <span>{value}</span>;
};

export default CountUp;
