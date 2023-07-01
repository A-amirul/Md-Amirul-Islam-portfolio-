import React from "react";
import { FaEnvelopeOpen, FaFacebook, FaGithub, FaLinkedinIn, FaPhone, } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:ms-20">
        <h1 className="text-primary font-semibold text-3xl my-10">
      Connect with me
      </h1>
      
          <div className='flex gap-6 w-full text-white'>
            <a href="https://www.facebook.com/mdamirul.islam.718689" target="_blank"><FaFacebook className='w-5 h-5'></FaFacebook></a>
            <a href="https://www.linkedin.com/in/md-amirul-islam-518a2b261" target='_blank'><FaLinkedinIn className='w-5 h-5'></FaLinkedinIn></a>
            <a href="mailto:amirulislamamir412@gmail.com" target='_blank'><FaEnvelopeOpen className='w-5 h-5'></FaEnvelopeOpen></a>
            <a href="https://github.com/A-amirul" target='_blank'><FaGithub className='w-5 h-5'></FaGithub></a>
          </div>
          <div className="text-primary my-6">
            <h3 className="flex gap-2"> <span className="text-white "> <FaPhone></FaPhone> </span> +8801773498884 </h3>
            <h3 className="flex gap-2 my-2"> <span className="text-white"> <FaEnvelopeOpen></FaEnvelopeOpen> </span> amirulislamamir412@gmail.com </h3>
            <h3 className="flex gap-2"> <span className="text-white"> <FaLocationDot></FaLocationDot> </span> Kallayanpur, Dhaka </h3>
           
          </div>
        </div>
        {/* form */}
        <div className="md:w-1/2">
            <p className="mt-10 text-white text-2xl mb-6 font-bold">Contact me</p>
            <form>
                <input type="text" name="name" placeholder="Name" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded "/>
                <input type="email" name="email" placeholder="Email" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>
                <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message"></textarea>
                <button className="btn transition-all duration-500 bg-primary py-2 px-12 rounded-full text-center text-white hover:bg-white hover:text-primary block">
                  Send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
