// components/MainContent.tsx
"use client";
import { motion } from "motion/react";
import Image from 'next/image';

interface MainContentProps {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageLqip: string;
  description: string;
}

const formatDescription = (description: string) => {
  return description.replace(/\((\d+)\)/g, '<span class="sup font-sans text-accent">($1)</span>');
};

const Hero: React.FC<MainContentProps> = ({ imageUrl, imageWidth, imageHeight, imageLqip, description }) => {
  return (
    <div className="flex md:gap-x-2 md:flex-row flex-col-reverse items-stretch">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0 md:w-1/4 md:h-full h-[85vw]"
      >
        <Image
        className="object-cover object-top h-full"
        src={imageUrl}
        alt="Artem Arsenian"
        width={imageWidth}
        height={imageHeight}
        placeholder="blur"
        blurDataURL={imageLqip}
        />
      </motion.div>
      <motion.p
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="font-serif xl:text-[3.6rem] lg:text-[2.5rem] md:text-[2rem] leading-none text-2xl"
      dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
      />
    </div>
  );
};

export default Hero;