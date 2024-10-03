import { useRef } from "react";
import { useState } from "react";

export function TimeContainer2() {
  const [count, setCount] = useState(60);
  const timer = useRef(null);
  if (count <= 0) {
    clearInterval(timer.current);
  }
  const handleStart = () => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCount((c) => c - 1);
    }, 100);
  };
  const handleStop = () => {
    clearInterval(timer.current);
  };
  return (
    <>
      <section>count: {count}</section>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
    </>
  );
}
