"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger   
import Tag from './Tag';

function About() {
  const boxRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    // Image animation
    gsap.to(boxRef.current, {
      delay: 2,
      y: -120,
      duration: 2,
    });

    // Text animation with ScrollTrigger
    // gsap.to(paraRef.current, {
    //   scale: 0.9, // Scale up the text
    //   opacity: 1, // Fade in the text
    //   duration: 2, 
    //   scrollTrigger: {
    //     trigger: '.about',
    //     start: 'top center',
    //     end: 'top 80%', // Adjust end position as needed
    //   },
    // });
    gsap.to('.para', {
      y:-70,
      ease:"power2.out",
      delay:1,
      yoyo:true,
       // Scale up the text
      opacity: 1, // Fade in the text
      duration: 4, 
      scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'top 80%', // Adjust end position as needed
      },
    });
  }, []);

  return (
    <div id='about' className=" about scroll-smooth flex pb-0 h-auto p-3 justify-items-end w-full text-[#] -mb-10">
      <div>
        <h2 className="text-9xl  tracking-tighter font-sans font-semibold mb-20 uppercase h-auto leading-[120px] font-regular pt-4 text-center pl-96">
          Developer , <br /> Programmer
        </h2>
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
        <div className="flex flex-row gap-8 pt-4">
          <img
            ref={boxRef}
            className="h-[600px] pt-4 p-4 w-auto rounded-2xl "
            src="./images/laptop.webp"
            alt=""
          />
          <div className="text_part ">
            <p className="para font-medium flex flex-col h-auto w-full pr-4 align-top items-start text-3xl font-regular" ref={paraRef}>
              Hello, I'm Aryan, a full-stack developer with a passion for continuous learning and professional growth. While my foundation lies in the MERN stack, I am actively exploring advanced topics in web development such as performance optimization, serverless architectures, and progressive web apps (PWAs).
            </p>
            <div className="flex h-auto text-[#D5FF3F] pt-10">
              <p className="para flex flex-wrap gap-8 font-thin text-2xl justify-start w-[600px] items-start">
                ( ABOUT ME ) {" "}
                <span className="flex flex-wrap text-2xl">
                  Creating great websites and giving users a better experience is my primary focus. I ensure each project leaves users a good sensation through
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
