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
    <div className="bg-[#F2CDF1] w-screen h-screen flex flex-col items-center justify-evenly">
      <p className="text-[#851a3d]">CLIPTAB과 함께 가자!</p>
      <p className="text-[#851a3d] text-4xl w-1/3 text-center">Cliptab은 다양한 요구에 맞춘 포괄적인 북마크 서비스 패키지를 제공합니다.</p>
      <div className="flex flex-row">
      <div className="flex flex-col w-1/2 items-center">
        <img 
        className="w-full h-1/2"
        src="https://mteam.my.canva.site/onboarding-web/images/d40da239b55d2c9c207d157f9f63f452.svg" 
        alt="이미지3"/>
        <p className="text-[#851a3d] text-center w-1/2 pt-4 text-lg">확장 기능으로, 사용자들은 필요할 때 빠르게 액세스할 수 있습니다.</p>
      </div>
      <div className="flex flex-col w-1/2 items-center">
      <img 
      className="w-full h-1/2"
      src="https://mteam.my.canva.site/onboarding-web/images/8554d684835b3ba64f11d87a3d9cd6f7.svg" 
      alt="이미지4"/>
        <p className="text-[#851a3d] text-center w-1/2 pt-4 text-lg">쉬운 이미지 생성.우리의 확장 프로그램은 간편하고 사용자 친화적입니다.</p>
      </div>
      </div>
    </div>
    <div className="bg-[#B9C7D2] w-screen h-screen flex flex-col items-center justify-evenly">
      <p className="text-[#0D3A5C] text-6xl font-medium">Cliptab 언제 어디서나</p>
      <p className="text-[#0D3A5C] text-lg w-1/4 text-center">Cliptab 서비스는 확장 기능을 활용하여 유연하게 작동하며 필요할 때 빠르게 액세스할 수 있도록 해줍니다.</p>
      <img 
      className="h-1/2"
      src="https://mteam.my.canva.site/onboarding-web/images/c643a70ca5befc44bd1d3bf8720ab2cb.svg" 
      alt="이미지5"/>
    </div>
    </div>
  );
};

export default Title;