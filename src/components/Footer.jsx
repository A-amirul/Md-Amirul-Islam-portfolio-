import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import email from "../assets/socials/sms.png";

import { FaCloudDownloadAlt, FaEnvelopeOpen, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2025 by Md Amirul Islam</p>
        <p className="hidden sm:block">Fullstack Developer</p>
        <p className="hidden sm:block">Designed by @amir</p>
      </div>
      {/* social media */}
      <div className='flex gap-6 w-full text-white py-4 justify-center md:justify-start '>
        <a href="https://www.facebook.com/mdamirul.islam.718689" target="_blank"><FaFacebook className='w-5 h-5'></FaFacebook></a>
        <a href="https://www.linkedin.com/in/md-amirul-islam-518a2b261" target='_blank'><FaLinkedinIn className='w-5 h-5'></FaLinkedinIn></a>
        <a href="mailto:amirulislamamir412@gmail.com" target='_blank'><FaEnvelopeOpen className='w-5 h-5'></FaEnvelopeOpen></a>
        <a href="https://github.com/A-amirul" target='_blank'><FaGithub className='w-5 h-5'></FaGithub></a>
      </div>
    </div>
  );
};

export default Footer;
