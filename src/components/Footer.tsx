
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import { useLocation} from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleClick = (target: string) => {
    const url = new URL(target, window.location.origin);
    const targetPath = url.pathname;
    const targetHash = url.hash;

    const currentPath = location.pathname;
    const currentHash = location.hash;

    const isSamePath = currentPath === targetPath;
    const isSameHash = currentHash === targetHash;

    if (isSamePath && isSameHash) {
      // Same page and same section — scroll to top or into view manually
      if (targetHash) {
        const el = document.querySelector(targetHash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } 
  };

  return (
    <footer className="bg-gray-900 text-white">
    
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-zep-blue-300">Zep<span className="text-zep-green-300">Wash</span></span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Premium car wash at your society doorstep. Eco-friendly, efficient and professional service.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/zepwash?igsh=bDZzYWZ3NzB0ZWUy" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/"  className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/")}}>Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/services")}}>Services</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/support")}}>Support</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/about")}}>About Us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/support")}}>Help Center</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/support#contact")}}>Contact Support</Link>
              </li>
              <li>
                <Link to="/support#faq" className="text-gray-400 hover:text-white transition-colors" onClick={(e)=>{handleClick(e,"/support#faq")}}>FAQ</Link>
              </li>
           
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <a href='tel:+917570033209'>+91 75700 33209</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <a href='mailto:contact@zepwash.com'>contact@zepwash.com</a>
              </li>
              <li className="pt-4">
                <Link to="/support" className="inline-block btn-primary">
                  Need Help? Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 ZepWash. All rights reserved.</p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
