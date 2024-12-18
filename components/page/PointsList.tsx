// components/PointsList.tsx
"use client";
import { motion } from "motion/react";

interface Point {
  number: string;
  description: string;
  _key: string;
}

interface PointsListProps {
  points: Point[];
}

const PointsList: React.FC<PointsListProps> = ({ points }) => {
  return (
    <div className="grid pt-5 border-t divide-y md:mt-8 lg:grid-cols-4 border-accent md:border-t-0 md:grid-cols-2 lg:gap-x-2 md:gap-0 gap-y-4 md:divide-x md:divide-y-0 divide-accent">
      {points.map((point, index) => (
      <motion.div
        key={point._key}
        initial={{ opacity: 0, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`flex md:flex-col md:justify-between md:pr-2 md:pb-0 md:pt-0 pt-4 lg:border-b-0 ${index >= 1 ? 'lg:pl-2' : ''} ${index === 1 ? 'md:max-lg:border-b' : ''} ${index === 2 ? ' md:max-lg:border-none md:max-lg:pt-10' : ''} ${index === 3 ? ' md:max-lg:pt-10' : ''} ${index % 2 !== 0 ? 'md:pl-2' : ''} `}
      >
        <span className="pr-10 text-accent md:pr-0">{point.number}</span>
        <p className="leading-tight md:pt-5">{point.description}</p>
      </motion.div>
      ))}
    </div>
  );
};

export default PointsList;