import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white border-b border-gray-200 text-sm text-gray-800 px-4 py-2 flex flex-col md:flex-row justify-between items-center shadow-sm z-50"
    >
      {/* Contact Info */}
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <BsTelephone className="text-orange-500" />
          +91 9354831090
        </span>
        <span className="hidden md:flex items-center gap-1">
          <MdOutlineMail className="text-orange-500" />
          info@genSup.in
        </span>
      </div>

      {/* Promo Info */}
      <div className="text-center mt-2 md:mt-0 text-xs md:text-sm">
        <p className="font-semibold">
          USE CODE <span className="text-orange-500">GENUINE</span> – GET 10% OFF
        </p>
        <p className="text-gray-600">Order dispatch within 24 – 48 Hours</p>
      </div>
    </motion.div>
  );
};

export default TopBar;
