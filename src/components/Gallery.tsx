import React from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    src: '/placeholder.svg',
    alt: 'Gallery Image 1',
    caption: 'Image Caption 1',
  },
  {
    src: '/placeholder.svg',
    alt: 'Gallery Image 2',
    caption: 'Image Caption 2',
  },
  {
    src: '/placeholder.svg',
    alt: 'Gallery Image 3',
    caption: 'Image Caption 3',
  },
  {
    src: '/placeholder.svg',
    alt: 'Gallery Image 4',
    caption: 'Image Caption 4',
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Me in Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 md:mx-8 lg:mx-12">
          {photos.map((photo, index) => (
            <div key={index} className="relative group">
              <Image
                alt={photo.alt}
                className="w-full h-auto rounded-lg object-cover"
                height={400}
                src={photo.src}
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover',
                }}
                width={600}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gray-800 bg-opacity-75 text-white px-4 py-2 rounded-md">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
