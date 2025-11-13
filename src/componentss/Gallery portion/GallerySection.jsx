'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollCards = () => {
  const scrollContainerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cards = [
    {
      id: 1,
      title: '',
      description: '',
      image: '/hotel1.jpg'
    },
    {
      id: 2,
      title: '',
      description: '',
      image: '/hotel2.jpg'
    },
    {
      id: 3,
      title: '',
      description: '',
      image: '/hotel3.jpg'
    },
    {
      id: 4,
      title: '',
      description: '',
      image: '/hotel4.jpg'
    },
    {
      id: 5,
      title: '',
      description: '',
      image: '/hotel5.jpg'
    }
  ];

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (!isMounted) {
    return <div className="p-8 bg-gray-50 h-96 animate-pulse"></div>;
  }

  return (
    <section className="GallerySection">
      <div>
        <div className="relative">
          <div ref={scrollContainerRef} className="flex space-x-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="300px" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.description}</p>
                  <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300 w-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-500 border border-gray-300 w-15 h-9 flex items-center justify-center hover:bg-gray-300 transition duration-300"
        >
          <span>
            <h1>Previous ← </h1>
          </span>
        </button>
        <button
          onClick={scrollRight}
          className=" bg-gray-500 border rounded-b-sm border-gray-300 w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition duration-300"
        >
          <span>
            <h1>Next →</h1>
          </span>
        </button>
      </div>
    </section>
  );
};

export default ScrollCards;
