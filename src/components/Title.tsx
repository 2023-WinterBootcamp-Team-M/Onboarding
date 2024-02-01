import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const Title = () => {

  // AOS 라이브러리 초기화
  useEffect(() => {
    AOS.init();
  }, []);

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    const handleScroll = () => {
      var scrollPosition = window.scrollY;
      var scrollPositionElement = document.getElementById("scrollPosition");

      // Update the content of the element with the current scroll position
      if (scrollPositionElement) {
        console.log("Current Scroll Position: " + scrollPosition + "px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="" id="scrollPosition">
    <div className="bg-white w-screen h-screen flex flex-row items-center justify-evenly">
      <div 
      data-aos="fade-down-right"
      data-aos-delay="500"
      data-aos-duration="2000"
      data-aos-once="false"
      className="flex flex-col items-start">
      <span
      className=" text-[FFFFFF] font-normal sm:text-4xl md:text-8xl">ClipTab</span>
      <span className="text-[FFFFFF] self-end sm:text-xl md:text-lg">World Management</span>
      </div>
      <img 
      data-aos="fade-down-left"
      data-aos-delay="500"
      data-aos-duration="2000"
      data-aos-once="false"
      className="w-2/5 h-2/5"
      src="https://mteam.my.canva.site/onboarding-web/images/3dbc505e2279eade54f64358ae99f75b.svg" 
      alt="이미지1"/>
    </div>
    <div className="bg-[white] w-screen h-screen flex flex-col items-center justify-evenly">
      <p 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] font-bold sm:text-2xl md:text-6xl">About Cliptab </p>
      <div className="flex flex-row w-full items-center justify-center">
      <img 
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="2000"
      className="w-1/3 h-full pl-0"
      src="https://i.ibb.co/mR6vRvf/clip-tab-2-removebg-preview.png" 
      alt="Cliptab-logo"/>
      <div 
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex flex-col w-[25%] h-full justify-center">
      <p className="text-[FFFFFF] font-bold text-2xl">Cliptab</p>
      <span className="text-[FFFFFF] text-lg font-norma">저희 서비스는 사용자가 북마크를 통해 웹 페이지에 진입하기 전에 간단한 정보를 확인할 수 있도록 웹 페이지의 내용을 GPT로 요약하여 제공하는 기능을 하는 익스텐션입니다. 그 뿐만 아니라, 특정 URL에서 이미지를 추출하여 클립보드에 저장하고 활용하는 기능도 함께 제공합니다.</span>
      </div>
      </div>
    </div>
    <div className="bg-white w-screen h-screen flex flex-col items-center justify-evenly">
      <p 
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[#851a3d]">CLIPTAB과 함께 가자!</p>
      <p 
      data-aos="fade-down"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[#851a3d] text-4xl w-1/3 text-center">Cliptab은 사람들의 다양한 요구에 따라 포괄적인 북마크 서비스 패키지를 제공합니다.</p>
      <div className="flex flex-row">
      <div
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000" 
      className="flex flex-col w-1/2 items-center">
        <img 
        className="w-full h-1/2"
        src="https://mteam.my.canva.site/onboarding-web/images/d40da239b55d2c9c207d157f9f63f452.svg" 
        alt="이미지3"/>
        <p className="text-[#851a3d] text-center w-1/2 pt-4 text-lg">확장 기능으로, 사용자들은 필요할 때 빠르게 액세스할 수 있습니다.</p>
      </div>
      <div 
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex flex-col w-1/2 items-center">
      <img 
      className="w-full h-1/2"
      src="https://mteam.my.canva.site/onboarding-web/images/8554d684835b3ba64f11d87a3d9cd6f7.svg" 
      alt="이미지4"/>
        <p className="text-[#851a3d] text-center w-1/2 pt-4 text-lg">쉬운 이미지 생성. 우리의 확장 프로그램은 간편하고 사용자 친화적입니다.</p>
      </div>
      </div>
    </div>
    <div className="bg-white w-screen h-screen flex flex-col items-center justify-evenly m-[-20%]">
      <p 
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-6xl font-bold">About BookmarkPage</p>
      </div>
      <div className="p-2 m-[20%] mt-[-20%]">
      <img 
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="h-[18%] w-[30%]"
      src="https://i.ibb.co/XDbygFc/2024-01-31-12-44-05.png" 
      alt="북마크 생성"/>
      <p 
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-base w-[40%] text-center mt-[-15%] m-80">사용자마다 폴더를 생성해 북마크를 직접 관리할 수 있고 또한, 북마크 자동분류 기능을 통해 북마크를 관리할 수 있습니다. 더불어 요약된 웹 사이트 정보를 받아보실 수 있습니다.</p>
      <div className="bg-white w-screen h-screen flex flex-col items-center justify-evenly m-[-20%]">
     </div>
     <div className="p-2 mr-[62%] mt-[-90%]">
      <img 
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="h-[18%] w-[81%]"
      src="https://i.ibb.co/v4nYmMq/2024-01-30-11-28-52.png" 
      alt="요약본 처리"/>
      </div>
      <p 
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-base w-[40%] text-center mt-[-15%] m-80">직접 웹 사이트를 들어가지 않아도 사이트 내 정보를 확인하실 수 있습니다. 요약 정보는 사용자 설정마다 짧은 요약본이나 긴 요약본으로 받아보실 수 있습니다.</p>
     </div>
     <div className="bg-white w-screen h-screen flex flex-col items-center justify-evenly m-[-35%]">
      <p 
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-6xl font-bold ml-[30%] mt-[-20%]">About ClipboardPage</p>
      </div>
      <div className="mt-1/2 p-36 m-[10%]">
      <img 
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="h-[20%] w-[30%] mt-[-22%]"
      src="https://i.ibb.co/vLy7jQL/2024-01-31-2-50-46.png" 
      alt="URL 입력"/>
      <p 
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-base w-[36%] text-center mt-[-10%] m-80">선택한 페이지 URL 안에 있는 이미지 URL을 입력하면 웹 스크래핑을 통해 관련 이미지를 받아보실 수 있습니다.   </p>
      </div>
      <div className="mt-[-43%] p-28 m-[12%]">
      <img 
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="h-[20%] w-[30%]"
      src="https://i.ibb.co/FhQ1HQF/2024-01-31-2-49-13.png" 
      alt="이미지 추출"/>
      <p 
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="text-[FFFFFF] text-base w-[35%] text-center mt-[-28%] m-[36%]">클립보드에 관련 이미지가 생성되고 생성된 이미지는 저장 또는 삭제할 수 있습니다. 또한 DragNDrop 형식으로 이미지를 관리할 수 있으며 MarkDown 언어를 지원하는 노션이나 이미지가 필요한 어느 곳에서든지 바로 사용하실 수 있습니다.</p>
      </div>
      <div className="bg-white flex flex-col h-screen w-screen items-center justify-evenly mt-[-20%]">
        <p 
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-black text-6xl font-bold">세계적인 관리 서비스, Cliptab</p>
        <p 
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="text-black text-5xl font-medium">지금 시작해보세요</p>
        <button
        data-aos="zoom-in-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        className="bg-[#90ADCD] w-[20%] h-[6%] text-black rounded-md animate-bounce"
        onClick={() => {
          const firstPageElement = document.getElementById("scrollPosition");
          if (firstPageElement) {
            window.scrollTo({
              top: firstPageElement.offsetTop,
              behavior: "smooth",
            });
          }
        }}
      >
        START NOW
      </button>
      </div>
    </div>
  );
};

export default Title;

