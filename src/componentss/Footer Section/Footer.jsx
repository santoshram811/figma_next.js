import styles from '../Hero section/AnnouncementBar/AnnouncementBar.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="Footer">
      {/* Trusted Partners Section */}
      <div className="border-b border-gray-500">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">TRUSTED PARTNERS</h3>

            {/* Logo Marquee */}
            <div className="bg-gray-800 py-0 px-9 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center whitespace-nowrap">
                <div className={`flex space-x-5 ${styles.marquee}`}>
                  {/* Logo Items */}
                  {[
                    { src: '/flogo1.png', alt: 'Partner 1', name: '' },
                    { src: '/flogo2.png', alt: 'Partner 2', name: '' },
                    { src: '/flogo3.png', alt: 'Partner 3', name: '' },
                    { src: '/flogo4.png', alt: 'Partner 4', name: '' },
                    { src: '/flogo5.png', alt: 'Partner 5', name: '' },
                    { src: '/flogo6.png', alt: 'Partner 6', name: '' },
                    { src: '/flogo7.png', alt: 'Partner 7', name: '' }
                  ].map((logo, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={200}
                        className="object-contain filter brightness-0 invert opacity-80"
                      />
                      <span className="text-gray-300 text-sm font-medium">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
