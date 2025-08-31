import React from "react";
import left from "/left.png";
import right from "/right.png";

const Schedule = () => {
  return (
    <section id="#Schedule">
      <div className="flex justify-between items-center my-10 py-5">
        <img src={left} alt="left" className="h-160 w-100" />
        <div className="text-center">
          <p className="text-[25px] text-[#A6CC49] font-bold">
            29 AUG - 31 AUG 2025
          </p>
          <h1 className="text-[100px] text-[#D382DE] alumni leading-22 font-bold py-5">
            UNLOCKING THE <br /> METAVERSE
          </h1>
          <button className="bg-white px-3 py-2 jaro text-[35px] text-[#847894]">
            LEARN MORE
          </button>
        </div>
        <img src={right} alt="right" className="h-100 w-100" />
      </div>
    </section>
  );
};

export default Schedule;
