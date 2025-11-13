'use client';

import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What are the check-in and check-out times?',
      answer:
        'Our check-in time is from 3:00 PM & check-out is until 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability.'
    },
    {
      question: 'Does the hotel offer airport transportation?',
      answer: 'hey i am santosh, this answer will be provide shortly'
    },
    {
      question: 'Does the hotel have dining options?',
      answer: 'hey i am santosh, this answer will be provide shortly'
    },
    {
      question: 'Do you host weddings or special events?',
      answer: 'hey i am santosh, this answer will be provide shortly'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section style={{ textAlign: 'center' }} className=" FAQSection min-h-screen  py-16 px-6 md:px-12 ">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-2xl font-light text-gray-900 mb-2">FAQ</h2>
          <p className="text-4xl text-gray-600">Frequently Asked Questions</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 bg-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-000">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-6 hover:bg-gray-50 px-2 rounded transition duration-200"
              >
                <span className="text-lg font-normal text-gray-900 pr-4">{faq.question}</span>
                <span className="text-gray-500 text-xl font-light min-w-6 text-center">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && faq.answer && (
                <div className="px-2 pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
