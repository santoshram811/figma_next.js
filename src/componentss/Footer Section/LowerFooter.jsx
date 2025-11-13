const Footer = () => {
  return (
    <footer className="LowerFooter py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/FooterLogo.png" alt="" />
            <p className="text-gray-600 text-sm">
              Luoni combine finishes elegance with modern luxury offering unpractical comfort and unforgettable
              experiences
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="space-y-1 text-sm text-gray-600">
              {['Home', 'About Us', 'Events', 'Testimonials', 'FAQ'].map((link) => (
                <div key={link}>{link}</div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Social Media</h3>
            <div className="space-y-1 text-sm text-gray-600">
              {['X', 'Facebook', 'Instagram'].map((social) => (
                <div key={social}>{social}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span>© 2025 Luoni, All Right Reserved</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
