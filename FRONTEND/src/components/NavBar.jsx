import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import gensupLogo from "../Assets/images/GenSupLogo.png";
import TopBar from "./TopBar";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1); // remove leading "/"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Shop", key: "" },
    { name: "Protein Powders", key: "proteins" },
    { name: "Vitamins & Minerals", key: "vitamins" },
    {
      name: "Great Value Deals",
      key: "deals",
      icon: <BsStars className="text-orange-300" />,
    },
    { name: "About Us", key: "about" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <TopBar />

      <div className="bg-black w-full h-25 flex items-center justify-between px-4 md:px-12 relative">
        {/* Logo */}
        <div className="h-16 w-auto">
          <Link to="/">
          <img src={gensupLogo} alt="gensup-logo" className="h-16 pl-1 pt-1" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {menuItems.map((item) => {
            const key = item.key;
            const isActive = currentPath === key;
            return (
              <li
                key={key}
                className="cursor-pointer flex flex-col items-center group"
              >
                <Link to={`/${key}`}>
                  <span className="flex items-center gap-1">
                    {item.name}
                    {item.icon}
                  </span>
                </Link>
                <div
                  className={`mt-1 h-[2px] w-full transition-all duration-300 ${
                    isActive
                      ? "bg-amber-500"
                      : "bg-transparent group-hover:bg-white/40"
                  }`}
                ></div>
              </li>
            );
          })}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <FiShoppingCart
              className="h-6 w-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Link>
          <Link to="/login">
            <GoPerson
              className="h-8 w-8 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </Link>

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <HiBars3BottomRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col gap-4 py-4 px-6 z-50 md:hidden">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                to={`/${item.key}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-1 text-white hover:text-amber-400">
                  {item.name}
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
