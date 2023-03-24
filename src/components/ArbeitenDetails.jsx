import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { arbeiten } from '../data';
import { motion } from 'framer-motion';
import Header2 from './HeaderDetails';
import Footer from './Footer';

const ArbeitenDetails = () => {
  const { arbeitenId } = useParams();

  const getArbeiTen = arbeiten.find(data => data.id === arbeitenId);
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
      translateX: -500,
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
    <div className=" ">
      <Header2 />
      <div className="container">
        <motion.div
          whileHover="hover"
          initial="exit"
          animate="enter"
          exit="exit"
          transition={transition}
          className="text-4xl pb-8  space-y-3 texter lg:text-8xl font-neueMedium"
        >
          <motion.div
            transition={transition}
            className=""
            variants={animationVariants}
          >
            <h2 className="text-center pr-7">
              {getArbeiTen?.descripetion.heading1}
            </h2>
          </motion.div>

          <motion.div transition={transition} variants={animationVariants2}>
            <h2 className="ml-[40%] font-Fontspring text-center">
              {getArbeiTen?.descripetion.heading2}
            </h2>
          </motion.div>

          <motion.div transition={transition} variants={animationVariants3}>
            <h2 className="ml-[40%]" data-aos-anchor=".container">
              <span>{getArbeiTen?.descripetion.heading3}</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* This content is requert if nothing face error */}
        <div>
          <div className="py-10">
            <img
              className="w-full h-fit object-cover object-center"
              src={getArbeiTen?.descripetion.images.featureImg}
              alt={getArbeiTen?.name}
            />
          </div>
          <div className=" pb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center ">
            <div className="">
              <img
                className=" w-full object-cover"
                src={getArbeiTen?.descripetion.images.img1}
                alt={getArbeiTen?.name}
              />
            </div>
            <div className="">
              <div className="flex justify-start w-full">
                <motion.div
                  whileHover="hover"
                  initial="exit"
                  animate="enter"
                  exit="exit"
                  transition={transition}
                  className="text-xl pb-8  space-y-3 texter lg:text-5xl font-neueMedium"
                >
                  <motion.div
                    transition={transition}
                    className=""
                    variants={animationVariants4}
                  >
                    <h2 className="text-center w-full pr-7">
                      {getArbeiTen?.descripetion?.heading1}
                    </h2>
                  </motion.div>

                  <motion.div
                    transition={transition}
                    variants={animationVariants5}
                  >
                    <h2 className="ml-[40%] w-full font-Fontspring text-center">
                      {getArbeiTen?.descripetion.content.title}
                    </h2>
                  </motion.div>
                </motion.div>
              </div>
              <div className=" px-6  text-xl font-body items-center ">
                <div className="flex text-xl pt-8 lg:text-[25px] lg:leading-[40px] font-body gap-3">
                  <h3>Kunde : </h3>
                  <h3>{getArbeiTen?.descripetion.content.author}</h3>
                </div>
                <article className="text-xl pt-8 lg:text-[25px] lg:leading-[40px] font-body">
                  {getArbeiTen?.descripetion.content.description}
                </article>
              </div>
            </div>
          </div>
        </div>
        {/* Optional components */}
        <div className="grid grid-cols-1 gap-10 pb-10 lg:grid-cols-2 place-items-center">
          <img
            src={getArbeiTen.descripetion.images.img3}
            alt=""
            className="block"
          />
          <img
            src={getArbeiTen.descripetion.images.img4}
            alt=""
            className="block"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArbeitenDetails;
