import { useState } from "react";
import { IconWorld, IconServer, IconCloud, IconNetwork, IconDevicesPc } from '@tabler/icons-react';

const CardList = () => {
  const cards = [
    {
      title: 'WEB',
      icon: <IconWorld size={48} className="text-primary" />,
      description: 'Modern, gyors és felhasználóbarát weboldalak tervezése és fejlesztése, hogy vállalkozása kitűnjön a versenytársak közül. Biztosítjuk az optimális felhasználói élményt és a folyamatos karbantartást, hogy weboldala mindig naprakész maradjon.',
    },
    {
      title: 'Szerver üzemeltetés és karbantartás',
      icon: <IconServer size={48} className="text-primary" />,
      description: 'Professzionális szervermegoldások, amelyek garantálják a stabilitást, gyorsaságot és biztonságot. Segítünk az ideális infrastruktúra kialakításában, folyamatos monitorozással és megelőző karbantartással.',
    },
    {
      title: 'FELHŐ ALAPÚ MEGOLDÁSOK',
      icon: <IconCloud size={48} className="text-primary" />,
      description: 'Skálázható és biztonságos felhőmegoldások, amelyek csökkentik a költségeket és növelik az üzleti hatékonyságot. Segítünk az átállásban és az optimális felhőalapú környezet kialakításában.',
    },
    {
      title: 'Internet kapcsolati problémák kezelése',
      icon: <IconNetwork size={48} className="text-primary" />,
      description: 'Ha lassú vagy instabil az internetkapcsolata, mi feltárjuk a problémák gyökerét és optimalizáljuk hálózatát. Gondoskodunk róla, hogy vállalkozása mindig megbízható és gyors internetkapcsolattal működjön.',
    },
    {
      title: 'Informatikai rendszerek kiépítése, korszerűsítése, karbantartása',
      icon: <IconDevicesPc size={48} className="text-primary" />,
      description: 'Teljes körű IT megoldások a vállalkozása számára. Legyen szó új infrastruktúra kiépítéséről vagy meglévő rendszerének modernizálásáról, biztosítjuk a stabil és biztonságos működést.',
    },  
  ];

  return (
    <div id='szolgaltatas' className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-primary h-[70vh] opacity-90"></div>
      <div className="relative z-10 md:text-right pt-20">
        <h1 className="text-white text-4xl p-3 font-bold relative before:content-[''] before:block before:w-32 before:h-1 before:bg-white before:mt-12 before:absolute before:right-0">
          Szolgáltatások
        </h1>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <FlippableCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FlippableCard = ({ card }: {card: any}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[300px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-lg backface-hidden">
          <div className="text-primary">{card.icon}</div>
          <h3 className="text-center text-sm font-semibold text-gray-800">{card.title}</h3>
          <button className="btn btn-primary mt-auto">Részletek</button>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-primary text-white rounded-lg shadow-lg rotate-y-180 backface-hidden">
          <h3 className="text-center text-sm font-semibold">{card.title}</h3>
          <p className="text-center text-xs mt-2">{card.description}</p>
          <button className="btn border-white hover:bg-white btn-outline mt-auto">Kevesebb</button>
        </div>
      </div>
    </div>
  );
};

export default CardList;