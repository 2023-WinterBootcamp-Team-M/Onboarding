import React from "react";

const Title = () => {
  return (
    <div className="">
    <div className="bg-[#90adcd] w-screen h-screen flex flex-row items-center justify-evenly">
      <div className="flex flex-col items-start">
      <span className=" text-[#0d3a5c] font-normal sm:text-4xl md:text-8xl">ClipTab</span>
      <span className="text-[#0d3a5c] self-end sm:text-xl md:text-lg">World Management</span>
      </div>
      <img 
      className="w-2/5 h-2/5"
      src="https://mteam.my.canva.site/onboarding-web/images/3dbc505e2279eade54f64358ae99f75b.svg" 
      alt="이미지1"/>
    </div>
    <div className="bg-[#90adcd] w-screen h-screen flex flex-row items-center justify-evenly">
      
    </div>
    </div>
  );
};

export default Title;
