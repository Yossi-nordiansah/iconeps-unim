import React from 'react';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-[250px] flex bg-blue-950 overflow-x-hidden">
      <div className="relative w-full h-full">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1600 900"
          className="w-full h-full transform scale-y-[3] scale-x-[5] origin-bottom"
        >
          <defs>
            <linearGradient id="bg" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(53, 127, 242, 0.6)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(38, 89, 190, 0.06)' }} />
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859
              s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="8s"
                values="270 230; -334 180; 270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="6s"
                values="-270 230;243 220;-270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="4s"
                values="0 230;-140 190;0 230"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <section className="flex flex-col justify-end w-full gap-4 pb-4 pl-8">
        <ul className="flex gap-5">
          {/* <li><a href="#"><FaFacebook size={24} /></a></li>
          <li><a href="#"><FaTwitter size={24} /></a></li>
          <li><a href="#"><FaLinkedin size={24} /></a></li>
          <li><a href="#"><FaInstagram size={24} /></a></li> */}
        </ul>
        <ul className="flex flex-col gap-1">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p className="m-0 text-xs">© 2023 All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;