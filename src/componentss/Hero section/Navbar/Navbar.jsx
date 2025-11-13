import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="Navbar shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Navigation Links */}
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition duration-300">
            HOME
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition duration-300">
            ABOUT
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition duration-300">
            EVENTS
          </a>
        </div>
        <button className="flex-1 flex justify-center">
          <Image src="/Navbar Logo.png" alt="Navbar Logo  " width={120} height={40} />
        </button>

        {/* Right Section - Contact and Login */}
        <div className="flex items-center space-x-6">
          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">🌐</span>
              <span className="text-gray-700">EN</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">+</span>
              <span className="text-gray-700">123 7564 8970</span>
            </div>
          </div>

          {/* Login Button */}

          <a href="#" className="inline-block transition-transform duration-300 hover:scale-105">
            <Image src="/Login Button.png" alt="Login Button" width={50} height={30} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
