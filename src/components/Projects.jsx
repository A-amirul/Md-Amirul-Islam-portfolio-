import React from "react";
import MongoDB from "../assets/tools/mongodb.png"
import Express from "../assets/tools/express.png"
import react from "../assets/tools/React-icon.png"
import Node from "../assets/tools/node.png"
import CSS from "../assets/tools/CSS.png"
import TailWind from "../assets/tools/Tailwind.png"
import JS from "../assets/tools/JS.png"
import html from "../assets/tools/html.png"
import bootstrap from "../assets/tools/bootstrap.png"

const Projects = () => {
  const projects = [
    {
      name: "Total Projects",
      value:"50+",
    },
    {
      name: "FullStack Website Design",
      value:"10+"
    },
    {
      name: "Frontend Website Design",
      value:"35+"
    }
   
  ];
  const tools = [
    {
      name: "MongoDB",
      icon:MongoDB,
    },
  
    {
      name: "Express JS",
      icon:Express,
    },
  
    {
      name: "React JS",
      icon:react,
    },
    {
      name: "Node JS",
      icon:Node,
    },
    {
      name: "JavaScript",
      icon: JS,
    },
  
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: CSS,
    },
    {
      name: "TailWind CSS",
      icon: TailWind,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
  
  ];


  return (
    

    <div className="md:h-screen">
      <div className="w-full flex flex-wrap justify-center items-center gap-10 lg:gap-20 pt-10 text-white " id="projects">
        {
          projects?.map((project, index) => (
            <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-md bg-[#0000FF20]">
              <p className="text-2xl font-bold">{project.value}</p>
              <p className="text-sm ">{project.name}</p>
            </div>
          ))
        }
      </div>
      
      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10">
        {
          tools?.map((tool, index) => (
            <div className="flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1">
              <img className="w-10 h-10" src={tool.icon} alt="" />
              <p className="text-black text-md">{tool.name}</p>
            
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Projects;
