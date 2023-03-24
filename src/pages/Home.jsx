import React from 'react';
import { Link } from 'react-router-dom';
import { Hero, Slide } from '../components';
import { motion } from 'framer-motion';
const Home = () => {
  const animationVariants = {
    hover: {
      translateX: 60,
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
      translateX: -150,
    },
    exit: {
      opacity: 0,
      x: 250,
    },
    enter: {
      opacity: 1,
      x: 0,
    },
  };
  const animationVariants3 = {
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

  const transition = {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.6,
  };

  return (
    <section id="home">
      <Hero />
      <Slide />
      <div className="container lg:py-24 ">
        <div className="relative ">
          <div className="flex flex-col lg:flex-row gap-5 overflow-hidden z-10 items-center justify-between">
            <div className=" basis-2/3 w-full">
              <motion.div
                whileHover="hover"
                initial="exit"
                animate="enter"
                exit="exit"
                transition={transition}
                className="text-4xl   p-[44px] space-y-4  lg:text-8xl font-neueMedium"
              >
                <motion.div
                  transition={transition}
                  className=""
                  variants={animationVariants}
                >
                  <h2 className="text-center">WER</h2>
                </motion.div>

                <motion.div
                  transition={transition}
                  variants={animationVariants2}
                >
                  <h2 className="text-center font-Fontspring ">DAHINTER</h2>
                </motion.div>

                <motion.div
                  transition={transition}
                  variants={animationVariants3}
                >
                  <h2 className="text-right ">STECKT</h2>
                </motion.div>
              </motion.div>
              <div></div>
              <div className="flex justify-center">
                <Link to={'kontakt'}>
                  <button className="btn-primary text-lg px-8 font-body">
                    Kontakt
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:absolute right-0  -z-10 top-0">
              <img
                src="/Rahel.png"
                className="h-[460px] max-w-[550px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
