import React, { useState } from 'react';
import { arbeiten } from '../data';
import Card from '../components/Card';
const Arbeiten = () => {
  const [category, setCategory] = useState('allArbeiten');
  const [selectedButton, setSelectedButton] = useState(null);

  console.log(category);
  const filterArry = arbeiten.filter(
    arbeiten => arbeiten.category === category
  );

  return (
    <section className="container">
      <div className="text-4xl py-16  space-y-3 texter lg:text-8xl font-neueMedium">
        <h2
          className="text-center pr-7"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          MEINE
        </h2>
        <h2
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className="ml-[40%] font-Fontspring text-center"
        >
          ARBEITEN
        </h2>
      </div>
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
