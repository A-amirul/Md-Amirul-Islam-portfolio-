import React from 'react';
import img2 from '../assets/profile-removebg.png'
import { FaCloudDownloadAlt, FaEnvelopeOpen, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Resume from "../assets/Md Amirul Islam-Resume.pdf"

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
                        <p className='md:w-96'><span className='text-2xl py-8 text-primary font-bold' data-aos='flip-up'
                            data-aos-offset='200'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out'>Fullstack Web developer</span> <br /> Dynamic and skilled web developer with expertise in HTML, CSS, JavaScript, React JS,
                            Tailwind CSS, and Bootstrap. Familiarity with Node.js, MongoDB, and Express.js</p>
                        <div className='flex gap-4 w-full my-4'>
                            <a href=""><FaFacebook className='w-5 h-5'></FaFacebook></a>
                            <a href=""><FaLinkedinIn className='w-5 h-5'></FaLinkedinIn></a>
                            <a href=""><FaEnvelopeOpen className='w-5 h-5'></FaEnvelopeOpen></a>
                            <a href=""><FaGithub className='w-5 h-5'></FaGithub></a>
                        </div>
                        <div className='mt-5 flex'>
                            {/* <button className='btn btn-primary transition-all duration-500 bg-primary px-4 mr-2 md:px-8  rounded-full text-white hover:bg-white text-xs md:text-md normal-case' >GitHub</button>  */}
                            <a download='' href={Resume} className='btn btn-outline normal-case px-4 rounded-full text-white'>DownLoad Resume <FaCloudDownloadAlt></FaCloudDownloadAlt></a>
                        </div>
                    </div>
                    <div className='order-first md:order-last relative md:w-[500px] h-full'>
                        <img src={img2} alt="" data-aos='fade-up'
                            data-aos-offset='200'
                            data-aos-delay='50'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;