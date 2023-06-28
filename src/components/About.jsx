import React from "react";
import Services from "./Services";
import MongoDB from "../assets/tools/mongodb.png"
import Express from "../assets/tools/express.png"
import react from "../assets/tools/React-icon.png"
import Node from "../assets/tools/node.png"
import CSS from "../assets/tools/CSS.png"
import TailWind from "../assets/tools/Tailwind.png"
import JS from "../assets/tools/JS.png"
import html from "../assets/tools/html.png"
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
    <>
      <h1 className="text-center text-primary md:text-3xl font-bold text-2xl mt-10 mb-14">Technical Skills</h1>
      {/* skills */}
      <div className="w-full flex flex-wrap gap-10 justify-center items-center  " id="about">
       
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
                <div className="bg-neutral-300 h-full " style={{width:skill.value + "%"}}>

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

      

      <Services/>
    </>
  );
};

export default About;
