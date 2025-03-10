import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";

interface HeroSlide {
  dividerSide: "left" | "right"; // Controls text div placement
  buttonLink?: string;
  buttonLabel?: string;
  title: string;
  subtitle?: string;
  bgColor: string;
  id: number;
  image: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "Vállalkozása Megbízható Technikai Háttere",
    subtitle: "IT üzemeltetés, hálózati karbantartás és professzionális webfejlesztés",
    buttonLabel: "Kapcsolatfelvétel",
    buttonLink: "#kapcsolat",
    bgColor: "bg-primary",
    dividerSide: "left",
    image: "slider-img.jpg",
  },
  {
    id: 2,
    title: "Biztonságos és Stabil Megoldások",
    subtitle: "Hálózati biztonság, adatmentés és IT tanácsadás",
    buttonLabel: "Tudj meg többet",
    buttonLink: "#szolgaltatas",
    bgColor: "bg-secondary",
    dividerSide: "right",
    image: "slider3-img.jpg",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFade(false);
    }, 500);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div id="hero" className={`relative w-full h-[80vh] flex items-center justify-center ${currentSlide.bgColor} transition-all duration-500`}>
      <div className={`absolute inset-0 flex transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {currentSlide.dividerSide === "left" ? (
          <>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 text-white">
              <h1 className="text-4xl font-bold">{currentSlide.title}</h1>
              {currentSlide.subtitle && <p className="mt-2">{currentSlide.subtitle}</p>}
              {currentSlide.buttonLabel && (
                <a href={currentSlide.buttonLink} className="mt-4 px-6 py-3 bg-white text-black rounded-lg btn ">
                  {currentSlide.buttonLabel}
                </a>
              )}
            </div>
               {/* Jobb oldali kép háttérrel és döntött elválasztással */}
                <div
                className="hidden md:flex w-1/2  justify-center bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundImage: "url(" + currentSlide.image + ")",
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
                ></div>
          </>
        ) : (
          <>
            <div
                className="w-1/2 hidden md:flex justify-center bg-no-repeat bg-cover bg-center relative"
                style={{
                    backgroundImage: "url(" + currentSlide.image + ")",
                    clipPath: "polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}
            ></div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-10 text-white">
              <h1 className="text-4xl font-bold">{currentSlide.title}</h1>
              {currentSlide.subtitle && <p className="mt-2">{currentSlide.subtitle}</p>}
              {currentSlide.buttonLabel && (
                <a href={currentSlide.buttonLink} className="mt-4 px-6 py-3 bg-white text-black rounded-lg">
                  {currentSlide.buttonLabel}
                </a>
              )}
            </div>
          </>
        )}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-auto bottom-10 lg:top-3/4  btn btn-outline border-white hover:bg-white hover:text-black text-white"
      >
        <IconArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-auto bottom-10 lg:top-3/4  btn btn-outline border-white hover:bg-white hover:text-black text-white"
      >
        <IconArrowRight />
      </button>

    </div>
  );
}