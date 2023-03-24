import React, { useEffect, useState } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Slide = () => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,

    autoplayTimeout: 855500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className=" testimonials md:bg-white ">
      <div className=" mx-auto">
        <div>
          <div>
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel

              owl-theme"
              {...options}
            >
              <div className="item  drop-shadow-lg flex flex-col gap-y-6">
                <div className="flex items-end gap-3">
                  <Link to={'arbeiten/1'}>
                    <img
                      className="w-full  block"
                      src={'/t1.png'}
                      alt="tarif"
                    />
                  </Link>
                </div>
              </div>

              <div className="item  drop-shadow-lg flex flex-col gap-y-6">
                <div className="flex items-end gap-3">
                  <Link to="arbeiten/5">
                    <img className="w-full block" src={'/t2.png'} alt="tarif" />
                  </Link>
                </div>
              </div>

              <div className="item   drop-shadow-lg flex flex-col gap-y-6">
                <div className="flex items-end gap-3">
                  <Link to="arbeiten/3">
                    <img className="w-full block" src={'/t3.png'} alt="tarif" />
                  </Link>
                </div>
              </div>
              <div className="item  drop-shadow-lg flex flex-col gap-y-6">
                <div className="flex items-end gap-3">
                  <Link to="/arbeiten/2">
                    <img className="w-full block" src={'/t4.png'} alt="tarif" />
                  </Link>
                </div>
              </div>
            </OwlCarousel>
          </div>
          <Link to={'arbeiten'}>
            <button className="btn-primary block mx-auto font-body px-5 py-2">
              ALLE ARBEITEN
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Slide;
