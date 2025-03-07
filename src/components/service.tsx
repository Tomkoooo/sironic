// CardList.jsx
import { IconWorld, IconServer, IconCloud, IconNetwork, IconDevicesPc } from '@tabler/icons-react';

const CardList = () => {
  // List of card objects
  const cards = [
    {
      title: 'WEB',
      icon: <IconWorld size={48} className="text-primary" />,
      description: 'Weboldal készítés, üzemeltetés, és karbantartás.',
    },
    {
      title: 'SZERVER ÜZEMELTETÉS, KARBANTARTÁS',
      icon: <IconServer size={48} className="text-primary" />,
      description: 'Szerverek üzemeltetése és karbantartása magas szinten.',
    },
    {
      title: 'FELHŐ ALAPÚ MEGOLDÁSOK',
      icon: <IconCloud size={48} className="text-primary" />,
      description: 'Felhő alapú rendszerek kiépítése és kezelése.',
    },
    {
      title: 'HÁLÓZAT ÜZEMELTETÉS, KARBANTARTÁS',
      icon: <IconNetwork size={48} className="text-primary" />,
      description: 'Hálózati infrastruktúra üzemeltetése és karbantartása.',
    },
    {
      title: 'SZÁMÍTÓGÉPEK, ÉS IT ESZKÖZÖK ÜZEMBE HELYEZÉSE',
      icon: <IconDevicesPc size={48} className="text-primary" />,
      description: 'IT eszközök és számítógépek beüzemelése.',
    },
  ];

  return (
    <div id='szolgaltatas' className="min-h-screen relative overflow-hidden">
      {/* Gradient Background - Adjusted to half the height */}
      <div className="absolute inset-0 bg-primary h-[70vh] opacity-90"></div>

      {/* Header with Before Line */}
      <div className="relative z-10 md:text-right pt-20">
        <h1 className="text-white text-4xl p-3 font-bold relative before:content-[''] before:block before:w-32 before:h-1 before:bg-white before:mt-12 before:absolute  before:right-0">
          Szolgáltatások
        </h1>
      </div>

      {/* Card Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl"
              style={{ height: '300px', perspective: '1000px' }} // Fixed height and perspective for 3D effect
            >
              {/* Front Side */}
              <div className="flex flex-col items-center space-y-4 transition-opacity duration-500 group-hover:opacity-0 h-full">
                <div className="text-primary">{card.icon}</div>
                <h3 className="text-center text-sm font-semibold text-gray-800">{card.title}</h3>
                <button className="btn btn-primary mt-auto">Részletek</button>
              </div>

              {/* Back Side - Fixed text orientation */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-primary text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 backface-hidden">
                <h3 className="text-center text-sm font-semibold">{card.title}</h3>
                <p className="text-center text-xs mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;