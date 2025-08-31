import React from "react";
import fb from "/fb.png";
import twitter from "/twitter1.png";
import insta from "/insta.png";
import Linkedin from "/Linkedin.png";
import yt from "/youtube_logo.png";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-10 px-15 py-10 items-end">
        <div>
          <h1 className="alumni text-white text-[50px] leading-12">
            UNLEASH
            <br />
            INNOVATION,
            <br />
            CODE YOUR DREAMS!
          </h1>
        </div>
        <div>
          <p className="text-white text-[20px]">
            Copyright © DriveBlaze- Algorhythm | All Rights Reserved
          </p>
        </div>
        <div className="flex gap-2">
          <img src={fb} alt="fb" className="h-10 w-10" />
          <img src={twitter} alt="" className="h-10 w-10" />
          <img src={insta} alt="" className="h-10 w-10" />
          <img src={Linkedin} alt="" className="h-10 w-10" />
          <img src={yt} alt="" className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
