import React from "react";

const Navbar = () => {
  return (
    <div className="absolute alumni flex justify-between items-center top-0 px-20 py-10 w-full">
      <h1 className="flex flex-col">
        <p className="text-white text-[30px] leading-13">HACKATHON</p>
        <p className="text-[#F949C8] text-[30px] leading-0">.COM</p>
      </h1>
      <ul className="flex justify-center items-center gap-8 inter text-white text-[15px]">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Speakers">Speakers</a>
        </li>
        <li>
          <a href="#Schedule">Schedule</a>
        </li>
        <li>
          <a href="#Prizes">Prizes</a>
        </li>
      </ul>
      <div>
        <button className="px-4 py-3 jaro bg-[#F949C8] text-[20px] text-white">
          REGISTER TODAY{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
