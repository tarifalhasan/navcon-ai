import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, name, name2, id }) => {
  return (
    <div className="w-full">
      <div className="relative  overflow-hidden bg-cover bg-no-repeat">
        <Link to={`${id}`}>
          <img
            src={img}
            className="block transition duration-300 ease-in-out hover:scale-110 w-full object-cover mx-auto"
            alt={name}
          />
        </Link>
      </div>
      <div className="text-xl lg:text-3xl pt-3">
        <h2 className=" font-body text-center">{name}</h2>
        <Link to={`${id}`}>
          <h2 className=" flex items-center gap-x-3 font-Fontspring  justify-end">
            <span> {name2}</span>
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.634277 17.9031L9.26862 9.26874L0.634277 0.6344"
                stroke="black"
              />
            </svg>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
