import React from 'react';
import gsap from 'gsap';
import About from './About'
function Projects() {
 

 
  return (
    <div className='bg-[#131311] text-[#D1D1C7] shadow-lg border-black  rounded-3xl  h-auto min-h-screen p-4 '>
      <About />
      <h2 className='text-center text-9xl mb-32 font-semibold font-sans'>PROJECTS</h2>
      <div className='space-y-80'>
        {/* Project 1 */}
        <div className='flex flex-row '>
          <div className='p-4 flex w-1/2 justify-center'>
            <h2 className='text-[300px] leading-none text-center'><span>01.</span></h2>
          </div>
          <div className='flex w-1/2 h-[500px] relative pt-32'>
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="" className='relative'>
                <img className='w-[700px] h-[700px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQID5ajnDwWJzDekXxkAjnz9NYh8gtHQa0IRg&s" alt="" />
                <video autoPlay loop   typeof='webm' className='absolute h-[500px] w-[550px] inset-0 m-auto' src="./videos/sample.webm"></video>
                <h3 className='font-regular text-[30px] pb-20 font-regular'>Pinterest Clone</h3>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='flex flex-row'>
          <div className='p-4 flex w-1/2 justify-center'>
            <h2 className='text-[300px] leading-none text-center'><span>02.</span></h2>
          </div>
          <div className='flex w-1/2 h-[500px] relative'>
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="" className='relative'>
              <img className='w-[700px] h-[700px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQID5ajnDwWJzDekXxkAjnz9NYh8gtHQa0IRg&s" alt="" />
              <video autoPlay loop   typeof='webm' className='absolute h-[500px] w-[550px] inset-0 m-auto' src="./videos/sample.webm"></video>
                <h3 className='font-regular text-[30px] font-regular'>QDRA App</h3>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className='flex flex-row mb-4 pb-32'>
          <div className='p-4 flex w-1/2 justify-center'>
            <h2 className='text-[300px] leading-none text-center'><span>03.</span></h2>
          </div>
          <div className='flex w-1/2 h-[500px] relative'>
            <div className="relative flex justify-center items-center w-full h-full">
              <a href="" className='relative'>
              <img className='w-[700px] h-[700px] rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQID5ajnDwWJzDekXxkAjnz9NYh8gtHQa0IRg&s" alt="" />
              <video autoPlay loop   typeof='webm' className='absolute h-[500px] w-[550px] inset-0 m-auto' src="./videos/sample.webm"></video>
                <h3 className='font-regular text-[30px] pb-20 font-regular'>Express System App</h3>

              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
