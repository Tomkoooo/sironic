import Icon, { IconMail, IconPhoneCall } from "@tabler/icons-react"
import { JSX } from "react"
import { Link } from "react-router-dom"

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
    <div className="bg-primary text-primary h-16 w-full flex items-center justify-between p-4 sticky top-0 z-50 rounded-b-lg shadow-md">
        <div className="flex gap-3 items-center">
            <img src={icon.link} alt={icon.alt} className=" w-16"/>
            <Link to="/" className="uppercase font-bold">{icon.alt}</Link>
        </div>
        <div className="flex gap-3">
            {navbarElements.map((element) => (
                <Link key={element.id} to={element.link} className="uppercase font-bold">{element.name}</Link>
            ))}
            </div>
            <div className="flex gap-3">
            {contactElements.map((element) => (
                <a key={element.id}
                href={element.link}
                className="flex gap-2 items-center"
                >
                    {element.icon}
                    <span>{element.text}</span>
                </a>
            ))}
            </div>
    </div>
  )
}

export default Navbar