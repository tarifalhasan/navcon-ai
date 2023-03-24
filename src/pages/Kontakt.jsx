import React from 'react';
import { motion } from 'framer-motion';
const Kontakt = () => {
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
      translateX: 140,
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

  const animationVariants5 = {
    hover: {
      translateX: -180,
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
    <section className="container space-y-14 lg:py-16">
      <div className=" w-[60%] mx-auto">
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
            <h2 className="text-center pr-7">WER</h2>
          </motion.div>

          <motion.h2
            className="ml-[50%] font-Fontspring text-center"
            transition={transition}
            variants={animationVariants2}
          >
            DAHINTER
          </motion.h2>

          <>
            <motion.div
              transition={transition}
              variants={animationVariants3}
              className="flex justify-center"
            >
              <span>STECKT </span>
            </motion.div>
          </>
        </motion.div>
      </div>
      <div>
        <img
          className="max-h-[550px] w-full object-cover"
          src="/Rahel_Quadratisch.png"
          alt="Rahel_Quadratisch"
        />
      </div>
      <div className=" space-y-5">
        <motion.div
          whileHover="hover"
          initial="exit"
          animate="enter"
          exit="exit"
          transition={transition}
          className="text-xl lg:w-2/3 mx-auto px-16  space-y-3 texter lg:text-5xl font-neueMedium"
        >
          <motion.div
            transition={transition}
            className=""
            variants={animationVariants4}
          >
            <h2 className="text-center w-full pr-7">HIER STEHT</h2>
          </motion.div>

          <motion.div transition={transition} variants={animationVariants5}>
            <h2 className="ml-[20%] w-full font-Fontspring text-center">
              EIN TITEL
            </h2>
          </motion.div>
        </motion.div>

        <div className="text-center pb-11 lg:pb-0 text-2xl px-4 lg:px-10 font-neueLight">
          <p>
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
          </p>
          <p>
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design. Hier steht eine kurze Erklärung zum Design.
            Hier steht eine kurze Erklärung zum Design. Hier steht eine kurze
            Erklärung zum Design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
