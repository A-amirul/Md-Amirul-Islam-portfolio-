import React from 'react';
import img2 from '../assets/profile-removebg.png'

const Home = () => {
    return (
        <div className='md:px-10 px-7  bg-[#1a1a29]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full '>
                    <div className='text-white'>
                        <h6 className='text-xl mt-12 text-primary'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-4xl my-4 text-3xl'>Md Amirul Islam</h1>
                        <p className='md:w-96'><span className='text-2xl py-8 text-primary font-bold'>Fullstack Web developer</span> <br /> Dynamic and skilled web developer with expertise in HTML, CSS, JavaScript, React JS,
                            Tailwind CSS, and Bootstrap. Familiarity with Node.js, MongoDB, and Express.js</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-primary px-4 mr-2 md:px-8  rounded-full text-white hover:bg-white text-xs md:text-md hover:text-primary normal-case' >GitHub</button> 
                            <button className='btn btn-outline normal-case px-4 rounded-full text-white text-xs md:text-md '>DownLoad Resume</button>
                        </div>
                    </div>
                    <div className='order-first md:order-last relative md:w-[500px] h-full'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;