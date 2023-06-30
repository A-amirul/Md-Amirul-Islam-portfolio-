import React from "react";
import MongoDB from "../assets/tools/mongodb.png"
import Express from "../assets/tools/express.png"
import react from "../assets/tools/React-icon.png"
import Node from "../assets/tools/node.png"
import CSS from "../assets/tools/CSS.png"
import TailWind from "../assets/tools/Tailwind.png"
import JS from "../assets/tools/JS.png"
import html from "../assets/tools/html.png"
import profile from "../assets/profile.jpg"
import bootstrap from "../assets/tools/bootstrap.png"
import { BiCheckDouble } from "react-icons/bi";

const About = () => {
  const skills = [
    {
      name: "HTML",
      icon: html,
      value:90
    },
    {
      name: "CSS",
      icon: CSS,
      value:80
    },
    {
      name: "TailWind CSS",
      icon: TailWind,
      value:85
    },
    {
      name: "BootStrap",
      icon: bootstrap,
      value:75
    },

    {
      name: "React JS",
      icon: react,
      value:70
    },
    {
      name: "MongoDB",
      icon: MongoDB,
      value:50
    },

    {
      name: "Express JS",
      icon: Express,
      value:45
    },
    {
      name: "Node JS",
      icon: Node,
      value:40
    },
    {
      name: "JavaScript",
      icon: JS,
      value:35
    },
    
  ];
  const softSkills = [
    {
      name:"Time Management",
    },
    {
      name:"Continuous learning",
    },
    {
      name:"Communication",
    },
    {
      name:"Adaptability",
    },
    {
      name:"Attention to details",
    },
    {
      name:"Collaboration",
    },
    {
      name:"Self-motivation",
    },
    {
      name:"User experience focus",
    },
    {
      name:"Problem-solving",
    },
    
    {
      name:"Patience",
    }
  ];
  return (
    <div id="about">
      <h3 className="text-center text-3xl text-primary font-bold my-10 md:my-20 ">About Me</h3>
      <div className="w-full flex flex-wrap md:gap-20 justify-center items-center text-xl px-10 my-10 ">
        <div className=" relative md:w-[300px]  h-full md:ms-10">
          <img className="rounded-full" src={profile} alt="" />
        </div>
        <div className=" text-primary my-4">
          <h3> <span className="text-white"> name : </span> Md Amirul Islam </h3>
          <h3> <span className="text-white"> age : </span> 25 </h3>
          <h3> <span className="text-white"> qualification : </span> BSc in CSE </h3>
          <h3> <span className="text-white"> CGPA : </span> 3.79 out of 4.00 </h3>
          <h3> <span className="text-white"> post : </span> FullStack Web Developer </h3>
          <h3> <span className="text-white"> language : </span> Bangla </h3>
          <h3> <span className="text-white"> language : </span> English </h3>
          <a href="#"><button className="text-white"> download Resume <i className="fas fa-download"></i> </button></a>
        </div>
      </div>
      <h1 className="text-center text-primary md:text-3xl font-bold text-2xl my-10">Technical Skills</h1>
      <div className="w-full flex flex-wrap gap-10 justify-center items-center " >
       
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-4 py-2 shadow-lg px-6 rounded-full items-center hover:animate-bounce ease-in-out duration-300"
          >
            <div className="w-10 h-10">
              <img className="w-full h-full rounded-full" src={skill.icon} alt={skill.name} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-md font-semibold text-white">{skill.name}</p>
                <p className="text-md font-semibold text-white">{skill.value + "%"}</p>

              </div>

              <div className="w-[200px] md:w-[250px] h-[12px] bg-slate-800 rounded-lg mb-1">
                <div className="bg-blue-700 h-full " style={{width:skill.value + "%"}}>

                </div>

              </div>
            </div>

          </div>
        ))}

        
      </div>
      <div>
        <div className="mt-20">
          <h4 className="text-3xl font-bold text-primary dark:text-white mb-14 text-center">Soft Skills</h4>
          <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
            <div className="flex flex-col bg-sky-900 dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
              {
                softSkills?.slice(0,5).map((sk, index) => (
                  <div className="flex items-center gap-3 p-4 ">
                    <BiCheckDouble color="white" size={22}></BiCheckDouble>
                    <p className="text-white">{ sk.name}</p>
                  </div>
                ))
              }

            </div>

            <div className="flex flex-col bg-sky-900 dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
              {
                softSkills?.slice(5, 10).map((sk, index) => (
                  <div className="flex items-center gap-3 p-4 ">
                    <BiCheckDouble color="white" size={22}></BiCheckDouble>
                    <p className="text-white">{sk.name}</p>
                  </div>
                ))
              }

            </div>
          </div>

        </div>
      
      </div>

      

    </div>
  );
};

export default About;
