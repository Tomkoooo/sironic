import { useState } from "react";

interface AboutSectionData {
    title: string;
    subtitle: string;
    description: string;
    longerDescription: string;
    buttonText: string;
    buttonLink: string;
    imageUrl: string;
}

const aboutData: AboutSectionData = {
    title: "SIRONIT Rendszerház",
    subtitle: "RÓLUNK",
    description:
    "Megbízható, biztonságos és hatékony IT megoldásokat nyújtunk vállalkozásoknak. Rendszerépítés, karbantartás, felhőmegoldások és webfejlesztés – mindent egy kézben, előre tervezhető költségekkel. Zökkenőmentes működés, Gyors hibaelhárítás, Proaktív IT támogatás.",
    longerDescription:
      "A modern vállalkozások sikerének alapja egy jól működő, biztonságos és hatékony informatikai rendszer. A SIRONIT Rendszerház célja, hogy levegye az IT-val kapcsolatos terheket ügyfelei válláról, és megbízható, átlátható megoldásokat nyújtson.\n\n Cégünk teljes körű informatikai szolgáltatásokat kínál, legyen szó rendszerek kiépítéséről, karbantartásáról vagy korszerűsítéséről. Segítünk a szerver- és felhőmegoldások kialakításában, biztosítjuk a hálózati stabilitást, és gyorsan reagálunk a felmerülő problémákra. Ügyfeleink számára havonta előre tervezhető IT támogatást biztosítunk, így nem kell váratlan költségekkel számolniuk.\n\nWebfejlesztési szolgáltatásainkkal gondoskodunk arról, hogy vállalkozása online megjelenése professzionális és naprakész legyen. Modern, gyors és felhasználóbarát weboldalakat készítünk, amelyek megfelelnek a mai piaci elvárásoknak.\n\nHa Ön is szeretné, hogy informatikai rendszerei megbízhatóan működjenek, biztonságosak és hatékonyak legyenek, vegye fel velünk a kapcsolatot!",
    buttonText: "Részletek",
    buttonLink: "#szolgaltatas",
    imageUrl: "/logo/logo1.svg",
};

const AboutSection = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="rolunk" className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
            {/* Left Text Content */}
            <div className="lg:w-1/2 text-left">
                <h3 className="text-primary uppercase font-bold tracking-wider">{aboutData.subtitle}</h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">{aboutData.title}</h2>
                <div className="w-20 h-1 bg-primary my-4"></div>
                <p className="text-gray-700 mt-4">{aboutData.description}</p>
                
                {/* Expandable Longer Description */}
                <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${showMore ? ' opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-700 mt-4 whitespace-pre-line">{aboutData.longerDescription}</p>
                </div>
                
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="btn btn-primary mt-6 transition-transform transform hover:scale-105"
                >
                    {showMore ? "Kevesebb" : "Szeretnék megtudni többet!"}
                </button>
                <a
                    href="#szolgaltatas"
                    className="btn btn-primary md:ml-2 btn-outline mt-6 transition-transform transform hover:scale-105"
                >
                    Ismerje meg szolgáltatásainkat!
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
                <div className="absolute bottom-4 right-12 w-6 h-6 bg-primary rounded-full"></div>
            </div>
        </div>
    );
};

export default AboutSection;