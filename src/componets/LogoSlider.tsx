import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./landingpage.css";


const LogoSlider: React.FC<{ onApplyClick?: () => void }> = ({ onApplyClick = () => {} })  => {
  const cards = [
    "./imgs/Quantum_logo.png",
    "./imgs/1631180032phpvUgTqj.jpeg",
    "./imgs/images.png",
    "./imgs/sandip.png",
    "./imgs/Slide80.jpeg",
    "./imgs/iilm.png",
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-10 relative">
      <h1 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
        Top Ranked Institutes & Universities
      </h1>
      <div className="container mx-auto px-4 relative">
        <Slider {...sliderSettings}>
          {cards.map((logoUrl, index) => (
            <div key={index} className="p-5 pb-8">
              <div className="bg-white shadow-md rounded-lg overflow-hidden flex justify-center items-center cursor-pointer" style={{ height: "10rem" }} >
                <img className="max-w-full max-h-full object-contain" src={logoUrl} alt="Logo" style={{ width: "auto" }} onClick={() => {
            console.log("Image clicked! Triggering onApplyClick...");
            onApplyClick();
          }}/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSlider;
