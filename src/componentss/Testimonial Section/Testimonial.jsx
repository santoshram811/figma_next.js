'use client';

import { useState } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Jerome Bell',
      country: 'Israel',
      date: '5/27/19',
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Savannah Nguyen',
      country: 'Poland',
      date: '9/18/23',
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Ronald Richards',
      country: 'Guinea',
      date: '6/09/25',
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial3.jpg'
    },
    {
      id: 4,
      name: 'Courtney Henry',
      country: 'Monaco',
      date: '1/15/20',
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial4.jpg'
    },
    {
      id: 5,
      name: 'Arlene McCoy',
      country: 'Saint Barthelemy',
      date: '5/19/12',
      text: "Luxort is pure perfection. From the stunning decor to the personalized service, every detail exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial5.jpg'
    },
    {
      id: 6,
      name: 'Eleanor Pena',
      country: 'Sao Tome and Principe',
      date: '9/21/19',
      text: "exceeded my expectations. It felt like stepping into a dream. Can't wait to return!",
      image: '/testimonial6.jpg'
    }
  ];

  return (
    <section className=" TestimonialsSection min-h-screen bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Single Row with Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN - What Our Guests Say */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-3xl font-light text-gray-900 tracking-wide">TESTIMONIALS</h2>
              <p className="text-4xl text-gray-600">What Our Guests Say</p>
              <p className="text-gray-500 leading-relaxed">
                Exceptional Experiences, Shared by Those Who've Lived Them.
              </p>
            </div>

            {/* Active Testimonial Display */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300  overflow-hidden">
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].country}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-medium">{testimonials[activeTestimonial].date}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white transition duration-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-white transition duration-300"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <button className="bg-green-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition duration-300 font-medium w-full lg:w-auto">
              READ MORE TESTIMONIALS
            </button>
          </div>

          {/* RIGHT COLUMN - Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                  index === activeTestimonial ? 'border-gray-400 bg-gray-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                {/* User Image and Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3">{testimonial.text}</p>

                {/* Date */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                  {index === activeTestimonial && <div className="w-2 h-2 bg-gray-400 rounded-full"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
