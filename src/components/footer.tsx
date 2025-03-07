// Footer.jsx
import { IconMapPin, IconPhone, IconMail, IconBuilding, IconInfoCircle } from '@tabler/icons-react';

const Footer = () => {
  // Data object for footer sections
  const footerData = {
    address: {
      title: 'Kapcsolat',
      street: '1111 Budapest, Kossuth Lajos utca 1.',
      phone: '+36 1 123 4567',
      email: 'email@me.hu',
    },
    companyInfo: {
      title: 'Cégadatok',
      name: 'Példa Kft.',
      taxNumber: '12345678-1-23',
      registrationNumber: '01-09-123456',
    },
    infoLinks: {
      title: 'Tájékoztató',
      links: [
        { label: 'Adatkezelési Tájékoztató', href: '/adatkezelesi-tajekoztato' },
        { label: 'ÁSZF', href: '/aszf' },
        { label: 'Impresszum', href: '/impresszum' },
      ],
    },
  };

  return (
    <footer className="w-full bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <IconMapPin size={24} />
              <span>{footerData.address.title}</span>
            </h3>
            <p className="text-sm mb-2">{footerData.address.street}</p>
            <p className="text-sm mb-2 flex items-center space-x-2">
              <IconPhone size={20} />
              <span>{footerData.address.phone}</span>
            </p>
            <p className="text-sm flex items-center space-x-2">
              <IconMail size={20} />
              <a href={`mailto:${footerData.address.email}`} className="hover:underline">
                {footerData.address.email}
              </a>
            </p>
          </div>

          {/* Company Info Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <IconBuilding size={24} />
              <span>{footerData.companyInfo.title}</span>
            </h3>
            <p className="text-sm mb-2">{footerData.companyInfo.name}</p>
            <p className="text-sm mb-2">Adószám: {footerData.companyInfo.taxNumber}</p>
            <p className="text-sm">Cégjegyzékszám: {footerData.companyInfo.registrationNumber}</p>
          </div>

          {/* Info Links Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <IconInfoCircle size={24} />
              <span>{footerData.infoLinks.title}</span>
            </h3>
            <ul className="space-y-2">
              {footerData.infoLinks.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional Copyright */}
        <div className="text-center mt-8 border-t border-white/20 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {footerData.companyInfo.name}. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;