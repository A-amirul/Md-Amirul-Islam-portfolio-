import React from 'react';
import img2 from '../assets/profile-removebg.png'
import { FaCloudDownloadAlt, FaEnvelopeOpen, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Resume from "../assets/Md Amirul Islam-Resume.pdf"
import { Rotate, Zoom } from "react-awesome-reveal";

const Home = () => {
    return (
        <div className='md:px-10 px-7  bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full ' data-aos='zoom-in'
                    data-aos-offset='200'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'>
                    <div className='text-white'>
                        <h6 className='text-xl mt-12 text-primary'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-4xl my-4 text-3xl'>Md Amirul Islam</h1>
                        <p className='md:w-96'><span className='text-2xl py-8 text-primary font-bold'>Fullstack Web developer</span>  <br /> Dynamic and skilled web developer with expertise in HTML, CSS, JavaScript, React JS,
                            Tailwind CSS, and Bootstrap. Familiarity with Node.js, MongoDB, and Express.js</p>
                        <div className='flex gap-4 w-full my-4'>
                            <a href="https://www.facebook.com/mdamirul.islam.718689" target="_blank"><FaFacebook className='w-5 h-5'></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/md-amirul-islam-518a2b261" target='_blank'><FaLinkedinIn className='w-5 h-5'></FaLinkedinIn></a>
                            <a href="mailto:amirulislamamir412@gmail.com" target='_blank'><FaEnvelopeOpen className='w-5 h-5'></FaEnvelopeOpen></a>
                            <a href="https://github.com/A-amirul" target='_blank'><FaGithub className='w-5 h-5'></FaGithub></a>
                        </div>
                        <div className='mt-5 flex'>
                           
                            <a download='' href={Resume} className='btn btn-outline normal-case px-4 rounded-full text-white'>DownLoad Resume <FaCloudDownloadAlt></FaCloudDownloadAlt></a>
                        </div>
                    </div>
                    <div className='order-first md:order-last relative md:w-[500px] h-full'>
                        <Zoom>   <img src={img2} alt="" data-aos='fade-up'
                            data-aos-offset='200'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out' /></Zoom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;