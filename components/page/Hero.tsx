// components/MainContent.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SanityImage } from 'sanity-image';

interface MainContentProps {
  mainImage: {
    asset: {
      _id: string;
      metadata: {
        lqip: string;
      };
    };
    hotspot: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    crop: {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
  };
  description: string;
}

const formatDescription = (description: string) => {
  return description.replace(/\((\d+)\)/g, '<span class="sup font-sans text-accent">($1)</span>');
};

const Hero: React.FC<MainContentProps> = ({ mainImage, description }) => {
  const { hotspot } = mainImage;
  const objectPosition = `${hotspot.x * 100}% ${hotspot.y * 100}%`;

  return (
    <div className="flex md:gap-x-2 md:flex-row flex-col-reverse items-stretch">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-shrink-0 md:w-1/4 md:h-full relative overflow-hidden"
      >
        <SanityImage
          className="object-cover w-full h-full md:aspect-auto aspect-square md:mt-0 mt-10"
          id={mainImage.asset._id}
          baseUrl={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`}
          hotspot={mainImage.hotspot}
          style={{ objectPosition }}
          alt="test"
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