import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { arbeiten } from '../data';
const ArbeitenDetails = () => {
  const { arbeitenId } = useParams();

  const getArbeiTen = arbeiten.find(data => data.id === arbeitenId);

  return (
    <div className="container ">
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
          <span>{getArbeiTen?.name}</span>
        </div>
      </Link>
      <div>
        <div className="text-4xl pb-8  space-y-3 texter lg:text-8xl font-neueMedium">
          <h2
            className="text-center pr-7"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-anchor=".container"
            data-aos-duration="700"
            data-aos-easing="ease-in"
            data-aos-once="false"
          >
            {getArbeiTen?.descripetion.heading1}
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-anchor=".container"
            data-aos-easing="ease-in"
            className="ml-[40%] font-Fontspring text-center"
          >
            {getArbeiTen?.descripetion.heading2}
          </h2>
          <h2
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in"
            data-aos-once="false"
            className="ml-[40%]"
            data-aos-anchor=".container"
          >
            <span>{getArbeiTen?.descripetion.heading3}</span>
          </h2>
        </div>
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
                <div className="text-xl pb-8  space-y-3 texter lg:text-5xl font-neueMedium">
                  <h2
                    className="text-center w-full pr-7"
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-anchor=".container"
                    data-aos-duration="700"
                    data-aos-easing="ease-in"
                    data-aos-once="false"
                  >
                    {getArbeiTen?.descripetion?.heading1}
                  </h2>
                  <h2
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-anchor=".container"
                    data-aos-duration="700"
                    data-aos-easing="ease-in"
                    data-aos-once="false"
                    className="ml-[40%] w-full font-Fontspring text-center"
                  >
                    {getArbeiTen?.descripetion.content.title}
                  </h2>
                </div>
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
    </div>
  );
};

export default ArbeitenDetails;
