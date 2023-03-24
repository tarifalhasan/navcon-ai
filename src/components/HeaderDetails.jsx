import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white mb-10  sticky z-50  top-0">
      <div className="flex py-5  container justify-between items-center">
        <Link to={'/'}>
          <h2 className="text-xl">LOGO</h2>
          <Link to={'/arbeiten'}>
            <div className="flex items-center gap-2">
              <svg
                width="10"
                height="27"
                viewBox="0 0 16 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.293 25.4424L1.99913 13.1485L14.293 0.854714"
                  stroke="black"
                  strokeWidth="2.3121"
                />
              </svg>
              <span>Zurück zu übersicht</span>
            </div>
          </Link>
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
        className={`absolute hidden lg:block  ${
          isOpen
            ? '  translate-y-full lg:translate-y-0 '
            : '  lg:-translate-y-full '
        } transition  overflow-y-hidden z-40  ease-in delay-300 top-0 w-full h-screen text-white bg-[#000000]`}
      >
        <div className="flex py-5 container justify-between items-center">
          <Link to={'/'}>
            <h2 onClick={() => handler()} className="text-xl">
              LOGO
            </h2>
          </Link>
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
            <ul className=" block nav-link  space-y-4 text-3xl lg:text-8xl">
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
      <nav
        className={`absolute  lg:hidden  ${
          isOpen ? '  translate-x-0' : '  translate-x-full '
        } transition  overflow-y-hidden z-40  ease-in delay-300 top-0 w-full h-screen text-white bg-[#000000]`}
      >
        <div className="flex py-5 container justify-between items-center">
          <Link to={'/'}>
            <h2 onClick={() => handler()} className="text-xl">
              LOGO
            </h2>
          </Link>
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
          <div className="flex text-center lg:text-right w-full justify-center  items-end">
            <ul className=" b nav-link flex gap-3 flex-col items-center justify-center space-y-4 text-6xl lg:text-8xl">
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

export default Header2;
