import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white  sticky z-50 py-2 top-0">
      <div className="flex py-5  container justify-between items-center">
        <Link to={'/'}>
          <h2 className="text-xl">LOGO</h2>
        </Link>
        <button onClick={() => handler()}>
          <svg
            width="43"
            height="27"
            viewBox="0 0 63 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3H63" stroke="black" strokeWidth="4.2" />
            <path d="M0 13.5H63" stroke="black" strokeWidth="4.2" />
            <path d="M0 24H63" stroke="black" strokeWidth="4.2" />
          </svg>
        </button>
      </div>
      <nav
        className={`absolute  ${
          isOpen ? 'translate-y-0 ' : '-translate-y-full '
        } transition transform overflow-y-hidden z-40  ease-in delay-300 top-0 w-full h-screen text-white bg-[#000000]`}
      >
        <div className="flex py-5 container justify-between items-center">
          <h2 className="text-xl">LOGO</h2>
          <button onClick={() => handler()}>
            <svg
              width="43"
              height="26"
              viewBox="0 0 65 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00027 2.00007L64.0003 24M1.00027 23.9999L64.0003 2"
                stroke="white"
                strokeWidth="4.2"
              />
            </svg>
          </button>
        </div>
        <div className="links  container mt-[18%] flex items-end justify-between">
          <div className="flex text-center lg:text-right w-full justify-between items-end">
            <ul className=" block font-Fontspring  space-y-4 text-8xl">
              <li onClick={() => handler()}>
                <NavLink activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li onClick={() => handler()}>
                <NavLink activeClassName="active" to="/arbeiten">
                  Arbeiten
                </NavLink>
              </li>
              <li onClick={() => handler()}>
                <NavLink activeClassName="active" to="/kontakt">
                  Kontakt
                </NavLink>
              </li>
            </ul>
            <div className="hidden lg:block">
              <div>
                <h3 className="text-3xl ml-[70%] font-Fontspring font-normal ">
                  KONTAKT
                </h3>
                <h2 className="text-4xl font-body">RAHEL@BUETIKOFER.CH</h2>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
