"use client";

import { SanityImage } from 'sanity-image';

interface ImageProps {
        image: {
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
        className: string;
    }

const ImageComponent: React.FC<ImageProps> = ({
        image,
        className,
    }) => (
        <SanityImage
            id={image.asset._id}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            hotspot={image.hotspot}
            preview={image.asset.metadata.lqip}
            style={{ objectPosition: `${(image.hotspot?.x || 0.5) * 100}% ${(image.hotspot?.y || 0.5) * 100}%` }}
            dataset='production'
            className={className}
        />
    );

    export default ImageComponent;