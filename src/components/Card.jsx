import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Card = ({ img, name, name2, id }) => {
  const animationVariants = {
    hover: {
      translateX: 100,
    },
    exit: {
      opacity: 0,
      x: 50,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };
  const animationVariants2 = {
    hover: {
      translateX: -200,
    },
    exit: {
      opacity: 0,
      x: 50,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };
  const animationVariants3 = {
    hover: {
      translateX: -190,
    },
    exit: {
      opacity: 0,
      x: 50,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };
  const animationVariants4 = {
    hover: {
      translateX: 180,
    },
    exit: {
      opacity: 0,
      x: 160,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };
  const animationVariants5 = {
    hover: {
      translateX: -140,
    },
    exit: {
      opacity: 0,
      x: 160,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };

  const transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.6,
  };
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
      <motion.div
        whileHover="hover"
        initial="exit"
        animate="enter"
        exit="exit"
        transition={transition}
        className="text-xl lg:text-3xl pt-3"
      >
        <motion.div
          transition={transition}
          className=""
          variants={animationVariants}
        >
          <h2 className=" font-body text-center">{name}</h2>
        </motion.div>

        <motion.div transition={transition} variants={animationVariants2}>
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
        </motion.div>
      </motion.div>
      <div></div>
    </div>
  );
};

export default Card;
