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
    <div className="bg-[#90adcd] w-screen h-screen flex flex-col items-center justify-evenly">
      <p className="text-[#0d3a5c] font-normal sm:text-2xl md:text-6xl">ClipTab 서비스</p>
      <div className="flex flex-row w-full items-center justify-center">
      <img 
      className="pr-20"
      src="https://mteam.my.canva.site/onboarding-web/images/a80485755f79a42e17c1b21850936187.svg" 
      alt="이미지2"/>
      <div className="w-1/4 self-start pl-20">
      <p className="text-[#0d3a5c] font-bold text-xl">Cliptab</p>
      <span className="text-[#0d3a5c] text-lg font-normal">GPT 요약을 통한 북마크에서 빠른 정보 및 URL에서 이미지 추출을 클립보드에 저장하는 기능입니다.</span>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Title;
