import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import genSupLogo from "../Assets/images/gensupLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl lg:ml-[20%] grid grid-cols-1 md:grid-cols-4 gap-8 text-sm ">
        {/* Brand */}
        <div className="flex flex-col md:items-start items-center text-center">
          <img src={genSupLogo} alt="gensup-logo" className="h-10" />
          <p className="mt-2 text-gray-300">Genuine Supplements. Real Results.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-start items-center text-center">
          <h3 className="text-lg font-semibold mb-3 lg:ml-5">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-orange-300">Shop</Link></li>
            <li><Link to="/proteins" className="hover:text-orange-300">Protein Powders</Link></li>
            <li><Link to="/vitamins" className="hover:text-orange-300">Vitamins & Minerals</Link></li>
            <li><Link to="/about" className="hover:text-orange-300">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:items-start items-center text-center">
          <h3 className="text-lg font-semibold mb-3 lg:ml-8">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><MdPhone /> +91 9354831090</li>
            <li className="flex items-center gap-2"><MdEmail /> info@genSup.in</li>
            <li className="flex items-center gap-2"><MdLocationOn /> New Delhi, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:items-start items-center text-center">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-orange-500"><BsFacebook /></a>
            <a href="#" className="hover:text-orange-500"><BsInstagram /></a>
            <a href="#" className="hover:text-orange-500"><BsTwitterX /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} genSup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
