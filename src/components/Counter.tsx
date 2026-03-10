import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", label, duration = 2000 }: Props) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-display text-5xl md:text-6xl font-light text-primary">
        {count}{suffix}
      </span>
      <p className="font-body text-sm tracking-widest uppercase text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

export default Counter;
