import React from 'react';

const Hero = () => {
  return (
    <div className="container w-[60%] mx-auto">
      <div className="text-4xl  space-y-3 texter lg:text-8xl font-neueMedium">
        <h2
          className="text-center pr-7"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          BLICK
        </h2>
        <h2
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className="ml-[50%] font-Fontspring text-center"
        >
          HINTER
        </h2>
        <h2
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className="flex justify-center"
        >
          <span>DIE</span>
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className=" font-Fontspring pl-16"
        >
          KULISSEN
        </h2>
      </div>
      <div>
        <button className="animate-bounce mt-10 w-[65px] mx-auto block">
          <img src="/arrowdown.png" className="w-[80%]" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
