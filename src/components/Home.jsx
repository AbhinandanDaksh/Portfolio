import React from "react";

import pic from '../assest/abhinandan_Pic.jpg';

import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-xl container mx-auto px-4 md:px-20 my-28 mt-14 text-white"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="bg-gradient-to-b from-[#842a79] via-[#bc3db1] to-[#e88ae1] text-transparent bg-clip-text font-bold font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            Hello, I’m Abhinandan, a dedicated and innovative MERN stack developer with a passion for creating seamless web experiences. With a meticulous eye for detail and a commitment to writing clean, efficient code, I bring ideas to life through dynamic, user-friendly applications.
            <br/>
            <br/>
            Explore my portfolio to discover how I combine creativity with the latest technologies to deliver exceptional solutions that not only meet but exceed expectations. Let’s collaborate to build something extraordinary together!
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.instagram.com/_abhinandan_daksh_/" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/abhinandan-daksh-788a9a243/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/qr/WOFAEPYKTSNLI1" target="_blank">
                      <FaWhatsapp className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            <br/>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://drive.google.com/file/d/1GoI-uLXdykw0Xwnp4g2AykxQNm89orni/view?usp=sharing"
                download="Abhinandan_Resume.pdf"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-[1px_0px_22px_1px_#dd6b20]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;