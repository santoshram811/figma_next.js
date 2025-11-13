import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400']
});

const cormorantItalic = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic']
});

const HeroSection = () => {
  return (
    <section className=" HeroSection min-h-screen flex items-center bg-gray-300 p-8">
      <div className="w-full max-w-6xl mx-auto flex gap-12">
        <div className="w-1/2">
          <h1 className="text-gray-900">
            <div className={`${cormorant.className} text-[80px] uppercase leading-none tracking-tight`}>WELCOME TO</div>

            <div className={`${cormorantItalic.className} text-[90px] uppercase leading-[90%] tracking-[-0.02em]`}>
              LUXORT
            </div>
          </h1>
        </div>

        <div className="w-1/2 space-y-10 m-5 p-10">
          <p className="text-xl text-gray-600">
            Discover a world where luxury and comfort blend seamlessly, offering unforgettable experiences in a setting
            of elegance and tranquility.
          </p>

          <div className="flex gap-4">
            <button className="bg-gray-900 text-white px-8 py-3 font-semibold">LOOK YOUR STAY</button>
            <button className="bg-gray-900 text-white px-8 py-3 font-semibold">DIVLOKE OUR SUITES</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
