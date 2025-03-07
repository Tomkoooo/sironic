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
        name: "Home",
        link: "#",
        },
        {
        id: 2,
        name: "About",
        link: "#",
        },
        {
        id: 3,
        name: "Services",
        link: "#",
        },
        {
        id: 4,
        name: "Contact",
        link: "#",
        },
    ]

    const contactElements: ContactElements[] = [
        {
        id: 1,
        icon: <IconMail size={16}/>,
        link: "mailto:",
        text: "info@email.me"
        },
        {
        id: 2,
        icon: <IconPhoneCall size={16}/>,
        link: "tel:",
        text: "+36 30 123 4567"
        }
    ]

    const icon: Icon = {
        link: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        alt: "Google"
    }
    return (
        <nav className="bg-primary text-white w-full sticky top-0 z-50 rounded-b-lg shadow-md">
          <div className="px-3 flex justify-between items-center h-16">
            {/* Left Side - Logo & Brand Name */}
            <div className="flex gap-3 items-center">
              <img src={icon.link} alt={icon.alt} className="w-12 lg:w-16" />
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