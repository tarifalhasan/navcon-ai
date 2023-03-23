import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="  container text-white flex justify-between items-center">
        <div className="logo">
          <Link to={'/'}>
            <h2 className="text-xl">LOGO</h2>
          </Link>
        </div>
        <ul className="flex py-4 flex-col items-center gap-5 lg:flex-row">
          <li className="text-base lg:text-xl font-neueLight">
            <Link>DATENSCHUTZ</Link>
          </li>
          <li className="text-base lg:text-xl font-neueLight">
            <Link>IMPRESSUM</Link>
          </li>
          <li className="text-base order-first lg:order-last lg:text-xl   font-neueLight">
            <Link>RAHEL@BUETIKOFER.CH</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
