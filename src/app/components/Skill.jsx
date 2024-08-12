import React from 'react';
import './Skill.css'; // Import the CSS file for the animation

function Skill() {
  return (
    <div className="skill h-auto pb-20 overflow-hidden ">
      <div className="header_part">
        <h2 className="text-6xl text-center uppercase font-semibold">Skills</h2>
      </div>
      <div className="skills-wrapper ">
        <div className="skills2 gap-8 flex items-center align-items-center">
          {/* Icons go here */}
          <div className="icon html">
            <a href="">
              <img className="h-20 w-20" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html5-3-502526.png?f=webp&w=256" alt="" />
            </a>
          </div>
          <div className="icon css h-20 w-20">
            <a href="">
              <img className="bg-none" src="https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png" alt="" />
            </a>
          </div>
          <div className="icon js h-24 w-24">
            <a href="">
              <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
            </a>
          </div>
          <div className="icon tailwind css h-20 w-20 align-middle items-center">
            <a href="" className="items-center">
              <img className="pt-4" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="" />
            </a>
          </div>
          <div className="icon MERN flex items-center align-middle">
            <a href="">
              <img className="h-20 w-full" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="" />
            </a>
          </div>
          <div className="icon git h-40 w-40">
            <a href="">
              <img className="color-white pt-12" src="https://cdn.worldvectorlogo.com/logos/git.svg" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
            </a>
          </div>

          {/* Duplicate the icons for seamless looping */}
          <div className="icon html">
            <a href="">
              <img className="h-20 w-20" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html5-3-502526.png?f=webp&w=256" alt="" />
            </a>
          </div>
          <div className="icon css h-20 w-20">
            <a href="">
              <img className="bg-none" src="https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png" alt="" />
            </a>
          </div>
          <div className="icon js h-24 w-24">
            <a href="">
              <img src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt="" />
            </a>
          </div>
          <div className="icon tailwind css h-20 w-20 align-middle items-center">
            <a href="" className="items-center">
              <img className="pt-4" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png" alt="" />
            </a>
          </div>
          <div className="icon MERN flex items-center align-middle">
            <a href="">
              <img className="h-20 w-full" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/c-1.svg" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="" />
            </a>
          </div>
          <div className="icon git h-40 w-40">
            <a href="">
              <img className="color-white pt-12" src="https://cdn.worldvectorlogo.com/logos/git.svg" alt="" />
            </a>
          </div>
          <div className="icon h-20 w-20">
            <a href="">
              <img className="color-white" src="https://cdn.worldvectorlogo.com/logos/github-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
