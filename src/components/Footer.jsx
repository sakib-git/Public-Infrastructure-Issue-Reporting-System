import React from 'react';
import { NavLink } from 'react-router';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className="bg-[#edf2ff] py-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 max-lg:mx-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Logo onClick={() => console.log('clicked on footer logo')} />

          <div>
            <h2 className="font-bold">Address</h2>
            <p>Bogura, Sherpur Bus stand, Bangladesh</p>
          </div>
          <div>
            <h2 className="font-bold">Contact</h2>
            <p>01734837341</p>
            <p>sakib43@gmail.com</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-4 text-gray-700">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/allissues">
              <li>All Issues</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-3">
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-7 flex max-w-[1400px] justify-between rounded-md bg-[#e7edfc] p-6 shadow max-lg:mx-4 max-md:flex-col">
        <p>© 2025 CityFix portal & Solutions. All Right Reserved.</p>
        <p>Privacy Policy Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
