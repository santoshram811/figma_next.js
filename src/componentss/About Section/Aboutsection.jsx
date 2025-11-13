'use client';

import { Cormorant_Garamond } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const cormorantItalic = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic']
});

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: 'COMFY AREA', image: '/hotel1.jpg' },
    { title: 'LUXURY SUITES', image: '/hotel2.jpg' },
    { title: 'FINE DINING', image: '/hotel3.jpg' }
  ];

  const handleNext = () => setActiveFeature((p) => (p + 1) % features.length);
  const handlePrev = () => setActiveFeature((p) => (p === 0 ? features.length - 1 : p - 1));

  return (
    <section className=" AboutSection min-h-screen  py-16 px-6 md:px-12  bg-[#F6F4E9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div className="space-y-8">
          <div className={`${cormorantItalic.className} text-[16px] uppercase tracking-wide`}>About Luxort</div>

          <div className="space-y-6 mt-170">
            <p className="text-gray-700 text-lg leading-relaxed">
              Luxort is where elegance meets comfort, creating unforgettable moments with every stay. Welcome to your
              perfect escape.
            </p>

            <div className="flex items-center gap-4 ">
              <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-gray-900">Roberto Poliye</p>
                <p className="text-sm text-gray-900">Founder of Luxort</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-snug">
            Where Timeless Elegance Meets Exceptional Comfort and Unforgettable Experiences in Luxury Hospitality
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Luxort, we redefine the meaning of luxury hospitality. Our hotel offers a seamless blend of classic
            sophistication and modern comfort, providing guests with an unparalleled experience.
          </p>

          {/* IMAGE SLIDER WITHOUT FRAMER-MOTION */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="relative h-80 w-full bg-gray-200 rounded-xl overflow-hidden">
              {/* Stack images and toggle active with opacity/translate */}
              {features.map((f, idx) => {
                const isActive = idx === activeFeature;
                return (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-500 transform transition-transform ${
                      isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-4 z-0 pointer-events-none'
                    }`}
                  >
                    <Image src={f.image} alt={f.title} fill className="object-cover" />
                  </div>
                );
              })}
            </div>

            {/* Bottom Navigation (like design) */}
            <div className="flex justify-between items-center bg-white px-6 py-4 rounded-b-lg mt-[-3px] shadow">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-medium">{String(activeFeature + 1).padStart(2, '0')}</span>
                <span className="font-semibold text-gray-800">{features[activeFeature].title}</span>
              </div>

              <div className="flex items-center gap-6">
                <button onClick={handlePrev} className="text-gray-500 hover:text-gray-900 text-lg">
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="text-gray-500 hover:text-gray-900 text-sm flex items-center gap-1"
                >
                  NEXT →
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-[3px] bg-gray-200 mt-2">
              <div
                className="h-[3px] bg-gray-600 transition-all duration-500"
                style={{ width: `${((activeFeature + 1) / features.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4">
            {features.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`relative h-28 rounded-lg overflow-hidden border-2 transition-all ${
                  activeFeature === index ? 'border-gray-800' : 'border-transparent'
                }`}
              >
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
