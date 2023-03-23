import React from 'react';

const Kontakt = () => {
  return (
    <section className="container space-y-14 lg:py-16">
      <div className=" w-[60%] mx-auto">
        <div className="text-4xl  space-y-3 texter lg:text-8xl font-neueMedium">
          <h2
            className="text-center pr-7"
            data-aos="fade-left"
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
            className="ml-[50%] font-Fontspring text-center"
          >
            DAHINTER
          </h2>
          <h2
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
            className="flex justify-center"
          >
            <span>STECKT </span>
          </h2>
        </div>
      </div>
      <div>
        <img
          className="max-h-[550px] w-full object-cover"
          src="/Rahel_Quadratisch.png"
          alt="Rahel_Quadratisch"
        />
      </div>

      <div className=" space-y-5">
        <div className="text-xl lg:w-2/3 mx-auto px-16  space-y-3 texter lg:text-5xl font-neueMedium">
          <h2
            className="text-center w-full pr-7"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in"
            data-aos-once="false"
          >
            HIER STEHT
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in"
            data-aos-once="false"
            className="ml-[20%] w-full font-Fontspring text-center"
          >
            EIN TITEL
          </h2>
        </div>
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
