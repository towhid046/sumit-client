import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./../../components/shared/Button/Button";
// import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/students", label: "Students", icon: FaUserGraduate },
  { path: "/teachers", label: "Teachers", icon: FaChalkboardTeacher },
  { path: "/about", label: "About Us", icon: FaInfoCircle },
  { path: "/contact", label: "Contact", icon: FaEnvelope },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className={`py-3.5 shadow-sm bg-base-100 sticky top-0 z-50`}>
      <div className="container flex justify-between mx-auto px-4 items-center">
        <div className="md:hidden text-xl mt-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div>
          <Link to={"/"}>
            {" "}
            <h2 className="md:text-3xl text-2xl font-bold">Summit</h2>
          </Link>
        </div>
        <ul className="md:flex hidden items-center lg:gap-8 gap-5">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              <li className="flex items-center lg:gap-2 gap-1.5 hover:text-primary-color duration-300 transition">
                <span>
                  <link.icon />
                </span>
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
        <div>
          <Link className="" to={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>

      {/* for responsive menu */}
      {isMenuOpen && (
        <ul className="absolute md:hidden top-16 left-0 w-full bg-base-200 justify-center items-center flex h-[90vh] flex-col gap-3 p-6">
          {navLinks.map((link) => (
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              key={link.path}
              to={link.path}
            >
              <li className="flex items-center lg:gap-2 gap-1.5 hover:text-primary-color duration-300 transition">
                <span>
                  <link.icon />
                </span>
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
