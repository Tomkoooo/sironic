import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PartnersComponent = () => {
  // List of partners
  const partners = [
    {
      name: "Readable Content",
      description: "Weboldal készítés és tartalomfejlesztés egy modern designnal.",
      logo: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg", 
      desc: "Readable Content offers professional website design and content development...",
    },
    {
      name: "Designer Studio",
      description: "Logótervezés és márkaidentitás kiépítése professzionális szinten.",
      logo: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg", 
      desc: "Designer Studio specializes in logo design and brand identity...",
    },
    {
      name: "Tech Solutions",
      description: "IT infrastruktúra optimalizálása és szerverüzemeltetés.",
      logo: "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-picture-icon-png-image_695350.jpg", 
      desc: "Tech Solutions provides IT infrastructure optimization and server management...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : partners.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < partners.length - 1 ? prev + 1 : 0));
  };

  return (
    <div id="partnerek" className="min-h-screen py-10 px-4 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-left w-full mb-10">
        <h2 className="text-3xl px-2 font-bold text-gray-800 relative uppercase before:content-[''] before:block before:w-32 before:h-1 before:bg-primary before:left-0 before:absolute before:mt-9">
          Partnereink
        </h2>
      </div>

      {/* Partner Card with Animation */}
      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative bg-white p-6 rounded-lg shadow-lg border border-gsecondary text-secondary"
          >
            {/* Partner Description */}
            <p className=" text-sm mb-6">{partners[activeIndex].desc}</p>

            {/* Bottom Section */}
            <div className="flex md:flex-row flex-col items-center justify-between ">
              {/* Image positioned outside the card */}
              <div className="flex items-center space-x-4 relative">
              <img
                  src={partners[activeIndex].logo}
                  alt={`${partners[activeIndex].name} logo`}
                  className="w-40 h-40 rounded-full object-cover absolute bottom-0 left:1/2 translate-x-[40%] translate-y-[13rem] md:left-0 trandform md:-translate-x-1/3 md:translate-y-1/2 border-4 border-white shadow-lg"
                />
                  <div className="md:ml-36"> {/* Offset to accommodate the image width */}
                    <h3 className="text-lg font-semibold ">{partners[activeIndex].name}</h3>
                    <p className="text-sm ">{partners[activeIndex].description}</p>
                  </div>
                </div>

              {/* Navigation Buttons */}
              <div className="flex w-full justify-between md:w-1/3 md:pace-x-2 md:mt-auto  mb-auto">
                <button onClick={handlePrev} className="btn btn-primary btn-sm">
                  <IconArrowLeft />
                </button>
                <button onClick={handleNext} className="btn btn-primary btn-sm">
                  <IconArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PartnersComponent;
