import Icon, { IconMail, IconPhoneCall, IconX, IconMenu2 } from "@tabler/icons-react"
import { JSX, useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
interface Icon {
    link: string
    alt: string
}

interface NavbarElement {
    id: number
    name: string
    link: string
}

interface ContactElements {
    id: number
    icon: JSX.Element
    link: string
    text: string
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarElements: NavbarElement[] = [
        {
        id: 1,
        name: "Kezdőlap",
        link: "#",
        },
        {
        id: 2,
        name: "Rólunk",
        link: "#rolunk",
        },
        {
        id: 3,
        name: "Szolgáltatásaink",
        link: "#szolgaltatas",
        },
        {
        id: 4,
        name: "Kapcsolat",
        link: "#kapcsolat",
        },
    ]

    const contactElements: ContactElements[] = [
        {
        id: 1,
        icon: <IconMail size={16}/>,
        link: "mailto:",
        text: "hello@sironic.hu"
        },
        {
        id: 2,
        icon: <IconPhoneCall size={16}/>,
        link: "tel:",
        text: "+36702735532"
        }
    ]

    const icon: Icon = {
        link: "/logo/logo2.svg",
        alt: "SIRONIC rendszerház"
    }
    return (
        <nav className="bg-primary text-white w-full sticky top-0 z-50 rounded-b-lg shadow-md">
          <div className="px-3 flex justify-between items-center h-16">
            {/* Left Side - Logo & Brand Name */}
            <div className="flex gap-3 items-center">
              <img src={icon.link} alt={icon.alt} className="w-12 rounded-full lg:w-16" />
              <a href="#" className="uppercase font-bold text-lg">
                {icon.alt}
              </a>
            </div>
    
            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }} // Rotate animation
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {menuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
              </motion.div>
            </button>
    
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-3">
              {navbarElements.map((element) => (
                <a key={element.id} href={element.link} className="btn btn-ghost uppercase font-bold">
                  {element.name}
                </a>
              ))}
            </div>
    
            {/* Desktop Contact Links */}
            <div className="hidden lg:flex items-center gap-2">
              {contactElements.map((element) => (
                <a key={element.id} href={element.link} className="flex btn btn-ghost items-center gap-2">
                  {element.icon}
                  <span>{element.text}</span>
                </a>
              ))}
            </div>
    
            {/* Desktop Partner Portal Button */}
            <a href="/partner-portal" className="hidden lg:flex btn btn-success btn-outline uppercase">
              Partner Portal belépés
            </a>
          </div>
    
          {/* Mobile Dropdown Menu with Smooth Slide Animation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="lg:hidden bg-primary p-4 flex flex-col gap-3"
              >
                {navbarElements.map((element) => (
                  <a key={element.id} href={element.link} className="btn btn-ghost w-full text-center uppercase font-bold">
                    {element.name}
                  </a>
                ))}
                {contactElements.map((element) => (
                  <a key={element.id} href={element.link} className="flex btn btn-ghost items-center gap-2">
                    {element.icon}
                    <span>{element.text}</span>
                  </a>
                ))}
                <a href="/partner-portal" className="btn btn-success btn-outline uppercase w-full text-center">
                  Partner Portal belépés
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      );
}

export default Navbar