
interface AboutSectionData {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
  }
  
  const aboutData: AboutSectionData = {
    title: "DATACORE TECHNOLOGY",
    subtitle: "RÓLUNK",
    description:
      "A DataCore Technology-nál célunk, hogy vállalkozása informatikai rendszerei mindig megbízhatóan és biztonságosan működjenek. Segítünk a hálózati infrastruktúra kiépítésében, karbantartásában, valamint a napi szintű IT támogatásban. Felhasználói számítógépek, szerverek és adatmentési megoldások terén is számíthat ránk. Emellett modern és gyors weboldalakat fejlesztünk, legyen szó bemutatkozó oldalról, webshopról vagy egyedi fejlesztésről.",
    buttonText: "Részletek",
    buttonLink: "#",
    imageUrl: "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg", // Update this with your actual image path
  };

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
      {/* Left Text Content */}
      <div className="lg:w-1/2 text-left">
        <h3 className="text-primary uppercase font-bold tracking-wider">{aboutData.subtitle}</h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{aboutData.title}</h2>
        <div className="w-20 h-1 bg-primary my-4"></div>
        <p className="text-gray-700 mt-4">{aboutData.description}</p>
        <a
          href={aboutData.buttonLink}
          className="btn btn-primary mt-6"
        >
          {aboutData.buttonText}
        </a>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-primary overflow-hidden shadow-lg">
          <img
            src={aboutData.imageUrl}
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-10 w-10 h-2 bg-primary"></div>
        <div className="absolute bottom-4 right-12 w-6 h-6 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default AboutSection;