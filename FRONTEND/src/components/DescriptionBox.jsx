import React from "react";

const DescriptionBox = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-10 rounded-xl shadow-md mt-10">
      {/* Product Description */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        Product Description
      </h2>
      <p className="text-gray-700 text-base leading-relaxed mb-6">
        GENSUP Whey Protein is a premium-grade supplement designed to help you
        build lean muscle, improve workout recovery, and enhance overall strength.
        With a perfect blend of fast-absorbing whey protein isolate and essential
        amino acids, it supports your fitness goals effectively and deliciously.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Usage Instructions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            How to Use
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Mix 1 scoop with 200-250ml cold water or milk.</li>
            <li>Shake or blend well for 30 seconds.</li>
            <li>Consume post-workout or between meals.</li>
            <li>Use 1-2 times daily as per your fitness routine.</li>
          </ul>
        </div>

        {/* Ingredients List */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Key Ingredients
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Whey Protein Isolate</li>
            <li>Creatine Monohydrate</li>
            <li>BCAAs (Leucine, Isoleucine, Valine)</li>
            <li>L-Glutamine</li>
            <li>Natural Cocoa & Sweetener (Stevia)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
