import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.facebook.com", icon: FaFacebook },
  { href: "https://www.instagram.com", icon: FaInstagram },
  { href: "https://www.linkedin.com", icon: FaLinkedin },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 pt-6 pb-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center pb-6">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <Link to="/">
              <h2 className="text-2xl font-bold md:text-left text-center">
                Summit
              </h2>
            </Link>
            <p className="mt-2 text-sm ">
              A brief description about Summit and the services offered.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="hover:text-primary-color duration-300 transition text-xl " />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className=" text-center text-sm pt-2 border-t border-gray-400">
          &copy; {new Date().getFullYear()} Summit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
