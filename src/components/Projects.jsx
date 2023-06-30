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
import p1 from "../assets/projectImage/language/language.jpg"
import p2 from "../assets/projectImage/disney/disney.jpg"
import p3 from "../assets/projectImage/chef/chef.jpg"

const Projects = () => {
  const projects = [
    {
      name: "Total Completed Projects",
      value: "40+",
    },
    {
      name: "FullStack Website Design",
      value: "6+"
    },
    {
      name: "Frontend Website Design",
      value: "35+"
    }

  ];
  const tools = [
    {
      name: "MongoDB",
      icon: MongoDB,
    },

    {
      name: "Express JS",
      icon: Express,
    },

    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Node JS",
      icon: Node,
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


    <div id="projects">
      <h1 className="text-3xl text-primary font-bold my-10 text-center md:pt-20">Projects and Tools</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-10 lg:gap-20 pt-10 text-white " >
        {
          projects?.map((project, index) => (
            <div className="flex flex-col gap-2 items-center px-4 py-3 rounded-md bg-[#0000FF20]" key={index}>
              <p className="text-2xl font-bold">{project.value}</p>
              <p className="text-sm ">{project.name}</p>
            </div>
          ))
        }
      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 my-10">
        <div className="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img className="full" src={p1} /></figure>
          <div className="card-body">
            <h2 className="card-title">Global Language Academy</h2>
            <p>It is a foreign language learning website.Students can enroll their desire classes. </p>
            <div className=" flex gap-2 justify-between">
              <a className="text-primary" href="">Client</a>
              <a className="text-primary" href="">Server</a>
              <a className="text-primary" href="">Live</a>
              <a> <button onClick={() => window.my_modal_1.showModal()} className="bg-primary hover:bg-blue-900 rounded px-2 py-1 text-white text-xs md:text-lg">Details</button></a>
            </div>
          </div>
        </div>

        <div className="card w-full h-96 bg-base-100 shadow-xl">
          <figure><img src={p2} /></figure>
          <div className="card-body">
            <h2 className="card-title">Disney Dolls Paradise</h2>
            <p>Disney dolls Paradise are a collectible Disney Dolls which is online toy marketplace.</p>
            <div className=" flex gap-2 justify-between">
              <a className="text-primary" href="">Client</a>
              <a className="text-primary" href="">Server</a>
              <a className="text-primary" href="">Live</a>
              <a> <button onClick={() => window.my_modal_2.showModal()} className="bg-primary hover:bg-blue-900 rounded px-2 py-1 text-white text-xs md:text-lg">Details</button></a>
            </div>
          </div>
        </div>


        <div>
          <div className="card w-full h-96 bg-base-100 shadow-xl">
            <figure><img className="h-full w-full" src={p3} /></figure>
            <div className="card-body">
              <h2 className="card-title">Chef Corner</h2>
              <p className="w-full">ChefCorner is a online chefs collections where customers can hire their desire chefs.</p>
              <div className=" flex gap-2 justify-between">
                <a className="text-primary" href="">Client</a>
                <a className="text-primary" href="">Server</a>
                <a className="text-primary" href="">Live</a>
                <a> <button onClick={() => window.my_modal_3.showModal()} className="bg-primary hover:bg-blue-900 rounded px-2 py-1 text-white text-xs md:text-lg">Details</button></a>
              </div>
              {/* modal-1 */}
              <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle px-4">
                <form method="dialog" className="modal-box">
                  <h3 className="font-semibold text-lg">Features</h3>
                  <p className="py-2">
                    <li>Login and Registration system with firebase authentication.</li>
                    <li>Dashboard implementation for students, instructors and Admin and Payment Method implementation using
                      stripe.</li>
                    <li>Using Axios and JWT more secure for user’s access. And using animation make more attractive</li>
                  </p>
                  <h3 className="font-semibold text-lg">Technology</h3>
                  <p>React.js | Node.js | Express.js | MongoDB | Firebase | Tailwind | Daisyui |JWT | Axios |Stripe
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
              {/* modal-2 */}
              <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle px-4">
                <form method="dialog" className="modal-box">
                  <h3 className="font-semibold text-lg">Features</h3>
                  <p className="py-2">
                    <li>Login and Registration system with firebase authentication.</li>
                    <li>Shop by category section people can filter and choose their suitable Disney dolls and view the details information.</li>
                    <li>My Toys page people can see only he/she added those Disney dolls.</li>
                  </p>
                  <h3 className="font-semibold text-lg">Technology</h3>
                  <p>React.js | Node.js | Express.js | MongoDB | Firebase | Tailwind | Daisyui
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
              {/* modal-3 */}
              <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle px-4">
                <form method="dialog" className="modal-box">
                  <h3 className="font-semibold text-lg">Features</h3>
                  <p className="py-2">
                    <li>Login and Registration system with firebase authentication.</li>
                    <li>View details button under private routes, without login user cannot see the recipe details.</li>
                    <li>After clicking View Recipes button if the user doesn't exist login. Then the user has to login first. Then see the details about the Recipes.</li>
                  </p>
                  <h3 className="font-semibold text-lg">Technology</h3>
                  <p>React.js | Node.js | Express.js | Firebase | React-Tailwinds | Daisyui
                  </p>
                  <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10">
        {
          tools?.map((tool, index) => (
            <div className="flex gap-2 items-center bg-white rounded-md shadow-lg px-5 py-1" key={index}>
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
