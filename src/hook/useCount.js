import { useState } from "react";

export const useCount = () => {
  const [count, setCout] = useState(0);

  console.log("count", count);

  const nextNumber = () => setCout(count + 1);
  const prevNumber = () => setCout(count - 1);

  return {
    nextNumber,
    prevNumber,
    count,
  };
};
