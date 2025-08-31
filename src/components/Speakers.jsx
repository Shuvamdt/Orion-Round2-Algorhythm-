import React from "react";
import pic1 from "/1.jpg";
import pic2 from "/2.jpg";
import pic3 from "/3.jpg";
import lArrow from "/left_arrow.png";
import rArrow from "/right_arrow.png";

const Speakers = () => {
  return (
    <section id="#Speakers">
      <div className="px-15 py-10">
        <h1 className="anton text-[60px] leading-15 font-bold text-white">
          <span className="text-white">OUR</span>
          <br />
          SPEAKERS
        </h1>
        <div className="flex gap-10 py-10 flex-col justify-center items-center lg:flex-row">
          <img src={lArrow} alt="" className="h-10 w-10" />
          <div className="flex flex-col justify-center items-center anton">
            <img src={pic1} alt="sp1" className="h-100 w-80" />
            <h1 className="text-[30px] leading-8 py-4 text-white">
              MIRACLE <br />
              KORSGAARD
            </h1>
            <p className="py-2 text-[#A13695] text-[15px]">CEO AT ALPINES</p>
          </div>
          <div className="flex flex-col justify-center items-center anton">
            <img src={pic2} alt="sp2" className="h-100 w-80" />
            <h1 className="text-[30px] leading-8 py-4 text-white">
              DAVIS <br /> GEORGE
            </h1>
            <p className="py-2 text-[#A13695] text-[15px]">
              CO-FOUNDER AT PINO
            </p>
          </div>
          <div className="flex flex-col justify-center items-center anton">
            <img src={pic3} alt="sp3" className="h-100 w-80" />
            <h1 className="text-[30px] leading-8 py-4 text-white">
              RVAN
              <br /> DIAS
            </h1>
            <p className="py-2 text-[#A13695] text-[15px]">FOUNDER AT PLUN</p>
          </div>
          <img src={rArrow} alt="" className="h-10 w-10" />
        </div>
        <div className="py-20 my-20 px-20 flex flex-col lg:flex-row justify-center items-center gap-30">
          <div className="anton text-[30px] text-white flex flex-col justify-center items-center leading-10">
            <span className="text-[60px] text-[#D382DE]">4+</span>
            <br />
            FORMATS
          </div>
          <div className="anton text-[30px] text-white flex flex-col justify-center items-center leading-10">
            <span className="text-[60px] text-[#D382DE]">5+</span>
            <br />
            WORKSHOPS
          </div>
          <div className="anton text-[30px] text-white flex flex-col justify-center items-center leading-10">
            <span className="text-[60px] text-[#D382DE]">20+</span>
            <br />
            SPEAKERS
          </div>
          <div className="anton text-[30px] text-white flex flex-col justify-center items-center leading-10">
            <span className="text-[60px] text-[#D382DE]">60+</span>
            <br />
            TALKS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
