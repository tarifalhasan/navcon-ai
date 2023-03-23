import React from 'react';
import { Hero, Slide } from '../components';

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Slide />
      <div className="container lg:py-24 ">
        <div className="relative py-16">
          <div className="flex flex-col lg:flex-row gap-5 overflow-hidden z-10 items-center justify-between">
            <div className=" basis-2/3 w-full">
              <div className="text-4xl    space-y-4  lg:text-8xl font-neueMedium">
                <h2
                  className="text-center"
                  data-aos="fade-right"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  WER
                </h2>
                <h2
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                  className="text-center font-Fontspring "
                >
                  DAHINTER
                </h2>
                <h2
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="text-right "
                >
                  STECKT
                </h2>
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
