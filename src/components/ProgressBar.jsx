/* @refresh reset */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ProgressBar({ label, value, maxValue }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${(value / maxValue) * 100}%`,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [controls, inView, value, maxValue]);

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-saddle-brown">{label}</span>
        <span className="text-5xl font-bold text-saddle-brown">{value}</span>
      </div>
      <div className="w-full bg-parchment rounded-full h-4">
        <motion.div
          ref={ref}
          className="bg-saddle-brown h-4 rounded-full"
          initial={{ width: 0 }}
          animate={controls}
        />
      </div>
    </div>
  );
}
