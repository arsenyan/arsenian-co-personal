// components/MainContent.tsx
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
      <div className="flex-shrink-0 md:w-1/4 md:h-full h-[85vw]">
        <Image
          className="object-cover object-top h-full"
          src={imageUrl}
          alt="Artem Arsenian"
          width={imageWidth}
          height={imageHeight}
          placeholder="blur"
          blurDataURL={imageLqip}
        />
      </div>
      <p
        className="font-serif xl:text-[3.6rem] lg:text-[2.5rem] md:text-[2rem] leading-none text-2xl"
        dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
      />
    </div>
  );
};

export default Hero;