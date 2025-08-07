import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  delay?: number;
}

export default function SkillBar({ skill, percentage, color, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600 text-sm">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          className={`${color} h-2.5 rounded-full relative overflow-hidden`}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              delay: delay + 0.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute inset-0 bg-white/20 w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}