import Aboutsection from '@/componentss/About Section/Aboutsection';
import EventSection from '@/componentss/Event Section/EventSection';
import FaqSection from '@/componentss/FAQ Section/FaqSection';
import Footer from '@/componentss/Footer Section/Footer';
import LowerFooter from '@/componentss/Footer Section/LowerFooter';
import GallerySection from '@/componentss/Gallery portion/GallerySection';
import AnnouncementBar from '@/componentss/Hero section/AnnouncementBar/AnnouncementBar';
import HeroSection from '@/componentss/Hero section/HeroSection';
import Navbar from '@/componentss/Hero section/Navbar/Navbar';
import HighLightsSection from '@/componentss/Highlights Section/HighLightsSection';
import NewsletterSection from '@/componentss/Newsletter Section/NewsletterSection ';
import Testimonial from '@/componentss/Testimonial Section/Testimonial';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <AnnouncementBar />
      <HeroSection />
      <GallerySection />
      <Aboutsection />
      <HighLightsSection />
      <EventSection />
      <FaqSection />
      <Testimonial />
      <Footer />
      <NewsletterSection />
      <LowerFooter />
    </div>
  );
}
