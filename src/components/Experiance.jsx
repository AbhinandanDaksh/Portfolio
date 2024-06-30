import React from "react";
import html from "../assest/html.png";
import css from "../assest/css.jpg";
import java from "../assest/java.png";
import javascript from "../assest/javascript.png";
import mongodb from "../assest/mongodb.jpg";
import node from "../assest/node.png";
import express from "../assest/expressjs.avif";
import vue from "../assest/vue.jpg";
import react from "../assest/reactjs.png";
import Tailwind from "../assest/512px-Tailwind_CSS_Logo.svg.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    
    
    {
      id: 5,
      logo: mongodb,
      name:"MongoDB",
    },
    {
      id: 6,
      logo: node,
      name: "Node",
    },
    {
      id: 7,
      logo: express,
      name: "Express",
    },
    {
      id: 8,
      logo: vue,
      name: "VueJs",
    },
    {
      id: 9,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 10,
      logo: Tailwind,
      name: "Tailwind",
    },
    
    
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-white pt-20"
    >
      <div className=" lg:h-[550px] sm:h-[200px] bg-white">
        <h1 className="text-3xl font-bold mb-10">Experiance</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
