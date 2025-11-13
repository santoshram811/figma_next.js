'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const eventImages = [
  { id: 1, src: '/event1.jpg', title: 'Weddings' },
  { id: 2, src: '/event2.jpg', title: 'Corporate Events' },
  { id: 3, src: '/event3.jpg', title: 'Private Parties' },
  { id: 4, src: '/event4.jpg', title: 'Luxury Gatherings' }
];

export default function EventSection() {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <section className="EventSection py-20 px-6 md:px-16">
      {/* TEXT SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE - SMALL TITLE */}
        <div>
          <p className="text-sm uppercase tracking-[0.1em] text-gray-700 border-l-2 border-gray-800 pl-3 mb-6">
            Unforgettable Events at Luxort
          </p>
        </div>

        {/* RIGHT SIDE - HEADING + DESCRIPTION */}
        <div>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-[#1B1B1B] mb-4">
            Celebrate Life’s Finest Moments
            <br /> in Style and Elegance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Luxort, we create extraordinary settings for unforgettable events. Whether you’re planning an intimate
            gathering or a grand celebration, our spaces redefine elegance and comfort.
          </p>
        </div>
      </div>

      {/* IMAGE SCROLLER */}
      <div className="relative mt-12">
        <div ref={scrollRef} className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar">
          {eventImages.map((img) => (
            <div key={img.id} className="flex-none w-[350px] md:w-[420px] relative rounded-xl overflow-hidden">
              <div className="relative w-full h-[420px]">
                <Image src={img.src} alt={img.title} fill className="object-cover rounded-xl" sizes="100vw" />
              </div>
              <p className="mt-3 text-center text-lg font-medium text-gray-800 uppercase tracking-wide">{img.title}</p>
            </div>
          ))}
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="flex gap-5 mt-6 mx-auto">
          <button onClick={scrollPrev} className="text-gray-700 hover:text-black text-sm rounded-2xl">
            ← PREV
          </button>
          <button onClick={scrollNext} className="text-gray-700 hover:text-black text-sm flex items-center gap-1">
            NEXT →
          </button>
        </div>
      </div>
    </section>
  );
}
