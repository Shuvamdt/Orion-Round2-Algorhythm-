import React from "react";
import image1 from "/image1.png";

const Hero = () => {
  return (
    <section id="Home">
      <div className=" mt-50 flex justify-center items-center gap-6">
        <div className="flex flex-col text-[100px] anton">
          <p className="leading-15 text-[#EF78CF]">META</p>
          <p className="leading-40 text-[#BCF645]">HACKATHON</p>
          <p className="leading-15 text-white text-[90px]">WEEK</p>
          <p className="text-xl inter text-[white] my-10">
            Join our Online Design Hackathon to
            <br />
            showcase your creativity, tackle unique
            <br /> challenges, and win incredible prizes!
          </p>
          <button className="py-3 jaro bg-[#F949C8] text-[35px] text-white w-80">
            REGISTER TODAY{" "}
          </button>
        </div>
        <div>
          <img
            src={image1}
            alt="image-1"
            className="flex justify-center items-center h-170 w-170"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
