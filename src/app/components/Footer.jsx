// components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineTwitter, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer=() => {
  return ( 
    <footer className="flex text bg-[#E2E2DF] rounded-lg text-[#000] p-0 gap-20  justify-evenly flex-wrap items-center h-[400px] space-y-60 w-full ">
      <div className='flex  flex-col absolute justify-center items-center text-center flex-wrap  pb-10'>
        <p className='text-lg'>Got a project? Need an unfair advantage?</p>
        <a href="#">
         <h3 className='text-9xl font-medium'>GET IN T<span className='font-semibold'>O</span>UCH</h3>

        </a>
      </div>
      <div className="col-md-4 d-flex items-center  gap-20 align-items-center flex-row">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          {/* Replace with your SVG or other logo if needed */}
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap" />
          </svg>
        </a>
        <span className="mb-2 mb-md-0 text-body-secondary"> @ setharyan53@gmail.com</span>
      </div>

      <ul className="nav col-md-4 gap-4 flex justify-center   justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="https://twitter.com">
            <AiOutlineTwitter size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://instagram.com">
            <AiFillInstagram size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://facebook.com">
            <AiFillFacebook size={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
