'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const highlights = [
  {
    id: 1,
    title: 'SWIMMING POOL',
    image: '/pool1.jpg',
    description: 'Relax and refresh in our luxurious infinity pool with serene surroundings and exceptional service.'
  },
  {
    id: 2,
    title: 'FINE DINING RESTAURANTS',
    image: '/restaurant.jpg',
    description:
      'Savor gourmet dishes prepared by world-class chefs, blending local flavors with international cuisine.'
  },
  {
    id: 3,
    title: 'LUXURY ROOMS & SUITES',
    image: '/room.jpg',
    description: 'Experience comfort and style in our modern suites, designed with elegance and relaxation in mind.'
  },
  {
    id: 4,
    title: 'SPA & WELLNESS',
    image: '/spa1.jpg',
    description: 'Rejuvenate your body and mind with our exclusive wellness therapies and serene spa environment.'
  }
];

export default function HighLightsSection() {
  const [active, setActive] = useState(1);

  const activeHighlight = highlights.find((h) => h.id === active);

  return (
    <section className="highlights py-16 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-[#6B6B4D] text-sm tracking-widest mb-2">HOTEL HIGHLIGHTS</p>
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#1B1B1B]">Experience the Extraordinary</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm">
          Experience elegance and comfort in our Luxury Rooms & Suites, where modern amenities and timeless design
          create the perfect retreat.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-8">
          {highlights.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`px-6 py-3 rounded-t-xl text-sm md:text-base transition-all ${
                active === item.id ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-md bg-gray-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHighlight.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image src={activeHighlight.image} alt={activeHighlight.title} fill className="object-cover" />
              <div className="absolute bottom-0 bg-black/50 text-white text-sm md:text-base p-6 text-left">
                {activeHighlight.description}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
