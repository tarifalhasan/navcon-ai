import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
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
      translateX: -300,
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
      translateX: -150,
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
      translateX: 110,
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
    <div className="container w-[60%] mx-auto">
      <motion.div
        whileHover="hover"
        initial="exit"
        animate="enter"
        exit="exit"
        transition={transition}
        className="text-4xl  space-y-3 texter lg:text-8xl font-neueMedium"
      >
        <motion.div
          transition={transition}
          className=""
          variants={animationVariants}
        >
          <h2 className="text-center ">BLICK</h2>
        </motion.div>

        <motion.div transition={transition} variants={animationVariants2}>
          <h2 className="lg:pl-[23rem]">HINTER</h2>
        </motion.div>

        <motion.div transition={transition} variants={animationVariants3}>
          <h2 className="flex justify-center">
            <span>DIE</span>
          </h2>
        </motion.div>
        <motion.h2
          variants={animationVariants4}
          className="lg:pr-[10rem] font-Fontspring text-center"
          transition={transition}
        >
          KULISSEN
        </motion.h2>
      </motion.div>
      <div>
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth',
            })
          }
          className="animate-bounce mt-10 w-[65px] mx-auto block"
        >
          <img src="/arrowdown.png" className="w-[80%]" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
