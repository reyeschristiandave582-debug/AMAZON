"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=144&aff_id=183864&source=amazon" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/OV8FrpF.png" 
        alt="Amazon Logo" 
        className="h-30 sm:h-15 w-20 object-contain transition-all duration-700 hover:brightness-120"
      />
    </div>
  );
};

export default MainLogo;
