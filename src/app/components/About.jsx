"use client";

import React, { useEffect, useRef } from "react";

import gsap from "gsap";
function About() {
  const boxRef = React.useRef(null);
  useEffect(() => {
    gsap.to(boxRef.current, {
      delay: 1,

      y: -80,
      duration: 2,
    });
  }, []);

  return (
    <div className="flex pb-8 h-auto p-3  justify-items-end w-full text-[#] mb-8">
      <div>
        <h1 className="text-[125px] mb-24 uppercase h-auto leading-tight font-regular  pt-4 text-center pl-96 ">
          Developer, <br />
          Programmer
        </h1>
        <div className="flex items-center spinner bottom-72 left-32 align-middle pb-10">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="flex flex-row gap-8 pt-6">
          <img
            ref={boxRef}
            className="h-[550px] pt-4 p-4  w-auto rounded-2xl "
            src="./images/profile2.png"
            alt=""
          />
          <div className="text_part ">
            <p className=" font-medium flex flex-col h-auto w-full pr-4 align-top items-start   text-3xl font-regular ">
              Hello, I'm Aryan, a full-stack developer with a passion for
              continuous learning and professional growth. While my foundation
              lies in the MERN stack, I am actively exploring advanced topics in
              web development such as performance optimization, serverless
              architectures, and progressive web apps (PWAs).
            </p>
            <div className="flex h-auto text-[#807D7A] pt-10">
              <p className="flex  flex-wrap gap-8  font-thin text-2xl justify-start w-[600px] items-start">
                ( ABOUT ME ){" "}
                <span className="flex flex-wrap text-2xl">
                  Creating great websites and giving user a better experience is
                  my primary focus. I ensure each project leaves user a
                  good-sensation through{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
