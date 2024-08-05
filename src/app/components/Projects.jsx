import React from "react";
import About from "./About";
import "./Project.css";

function Projects() {
  return (
    <div className="bg-[#131311] mb-aut pb-20 text-[#D1D1C7] shadow-lg border-black rounded-3xl h-auto min-h-screen p-4">
      <About />
      <div className="flex flex-col pb-20 ">
        <div className="flex items-center pl-20 gap-56 mb-40 ">
          <div className="loader">
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
            <div className="circle">
              <div className="dot"></div>
              <div className="outline"></div>
            </div>
          </div>
          <h2 className="text-center text-9xl font-semibold font-sans">
            PROJECTS
          </h2>
        </div>
      </div>
      <div className="space-y-96 ">
        {/* Project 1 */}
        <div className="flex flex-row">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] leading-none text-center">
              <span>01.</span>
            </h2>
          </div>
          <div className="flex w-[750px] h-[580px] relative pt-32 mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="https://pinterest-clone-six-psi.vercel.app/" className="relative">
                <img
                  className="w-[750px] h-[700px] rounded-lg"
                  src="https://images.pexels.com/photos/4348556/pexels-photo-4348556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute h- w-[650px] inset-0 m-auto"
                  src="./videos/pinterest.webm"
                ></video>
                <h3 className="font-regular text-[30px] pb-20">
                  Pinterest Clone
                </h3>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-row">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] leading-none text-center">
              <span>02.</span>
            </h2>
          </div>
          <div className="flex  w-[750px] h-[580px]  relative mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="" className="relative">
                <img
                  className="w-[700px] h-[700px] rounded-lg"
                  src="https://images.pexels.com/photos/3925875/pexels-photo-3925875.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute h-[600px] w-[650px] inset-0 m-auto"
                  src="./videos/sample.webm"
                ></video>
                <h3 className="font-regular text-[30px]">QDRA App</h3>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-row mb-4 pb-32">
          <div className="p-4 flex w-1/2 justify-center">
            <h2 className="text-[300px] leading-none text-center">
              <span>03.</span>
            </h2>
          </div>
          <div className="flex w-[750px] h-[580px]  relative mr-20">
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="" className="relative">
                <img
                  className="w-[700px] h-[700px] rounded-lg"
                  src="https://images.pexels.com/photos/8064312/pexels-photo-8064312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute h-[600px] w-[650px] inset-0 m-auto"
                  src="./videos/sample.webm"
                ></video>
                <h3 className="font-regular text-[30px] pb-20">
                  Express System App
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
