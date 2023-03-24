import React, { useState } from 'react';
import { arbeiten } from '../data';
import Card from '../components/Card';
import { motion } from 'framer-motion';
const Arbeiten = () => {
  const [category, setCategory] = useState('allArbeiten');
  const [selectedButton, setSelectedButton] = useState('allArbeiten');

  const filterArry = arbeiten.filter(
    arbeiten => arbeiten.category === category
  );
  // Farmer motion
  const animationVariants = {
    hover: {
      translateX: 80,
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
      translateX: -450,
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
    <section className="container">
      <motion.div
        whileHover="hover"
        initial="exit"
        animate="enter"
        exit="exit"
        transition={transition}
        className="text-4xl py-16  space-y-3 texter lg:text-8xl font-neueMedium"
      >
        <motion.div
          transition={transition}
          className=""
          variants={animationVariants}
        >
          <h2 className="text-center pr-7">MEINE</h2>
        </motion.div>

        <motion.div transition={transition} variants={animationVariants2}>
          <h2 className="ml-[40%] font-Fontspring text-center">ARBEITEN</h2>
        </motion.div>
      </motion.div>

      <div className=" px-5 py-10 space-y-3 ">
        <div className="tabs_btn flex-col lg:flex-row  flex justify-center gap-4  items-center">
          <button
            onClick={e => {
              setCategory('allArbeiten');
              setSelectedButton('allArbeiten');
            }}
            className={`btn-primary ${
              selectedButton === 'allArbeiten' ? 'selected' : ''
            }`}
          >
            ALLE ARBEITEN
          </button>
          <div className="flex gap-4">
            <button
              onClick={e => {
                setCategory('corporateDesign');
                setSelectedButton('corporateDesign');
              }}
              className={`btn-primary ${
                selectedButton === 'corporateDesign' ? 'selected' : ''
              }`}
            >
              CORPORATE DESIGN
            </button>
            <button
              onClick={e => {
                setCategory('printDesign');
                setSelectedButton('printDesign');
              }}
              className={`btn-primary ${
                selectedButton === 'printDesign' ? 'selected' : ''
              }`}
            >
              PRINTDESIGN
            </button>
          </div>
        </div>
        <div className="tabs_btn px-40 flex flex-col lg:flex-row lg:justify-center gap-4  items-center">
          <button
            onClick={e => {
              setSelectedButton('webDesign');
              setCategory('webDesign');
            }}
            className={`btn-primary ${
              selectedButton === 'webDesign' ? 'selected' : ''
            }`}
          >
            WEBDESIGN
          </button>
          <div className="flex flex-cols gap-4 lg:flex-row">
            <button
              onClick={e => {
                setSelectedButton('logoDesign');
                setCategory('logoDesign');
              }}
              className={`btn-primary ${
                selectedButton === 'logoDesign' ? 'selected' : ''
              }`}
            >
              LOGODESIGN
            </button>
            <button
              className={`btn-primary ${
                selectedButton === 'weiteres' ? 'selected' : ''
              }`}
              onClick={e => {
                setSelectedButton('weiteres');
                setCategory('weiteres');
              }}
            >
              WEITERES
            </button>
          </div>
        </div>
      </div>

      <div className="px-0 lg:px-20 pb-11 ">
        <div className="grid gap-10 place-items-center grid-cols-1 lg:grid-cols-2">
          {category === 'allArbeiten'
            ? arbeiten.map(data => (
                <Card
                  key={data.id}
                  name={data.name}
                  img={data.image}
                  name2={data.link}
                  id={data.id}
                />
              ))
            : filterArry.map(data => (
                <Card
                  key={data.id}
                  name={data.name}
                  img={data.image}
                  name2={data.link}
                  id={data.id}
                />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Arbeiten;
