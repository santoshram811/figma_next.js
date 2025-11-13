import styles from './AnnouncementBar.module.css';
import Image from 'next/image';

const AnnouncementBar = () => {
  return (
    <div className="AnnouncementBar text-white py-3 px-4 overflow-hidden">
      <div className="flex items-center justify-center whitespace-nowrap">
        <div className={`flex space-x-8 ${styles.marquee}`}>
          {/* First offer */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">0% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW.</span>

            <Image src="/Sparkle Icon.png" alt="Login Button" width={10} height={10} />
          </div>

          {/* Second offer */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">
              EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY — LIMITED TIME ONLY! BOOK NOW.
            </span>
          </div>
          <Image src="/Sparkle Icon.png" alt="Login Button" width={10} height={10} />
          {/* Third offer */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">EXCLUSIVE OFFER: ENJOY 20% OFF YOUR FIRST STAY </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
