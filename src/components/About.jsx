import React from "react";
import { FaAws } from "react-icons/fa";
import { LiaSalesforce } from "react-icons/lia";
import { PiCertificate } from "react-icons/pi";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  "
    >
      <div className="">
        <h1 className="text-3xl font-bold mb-5 text-orange-400">About</h1>
        <p className=" text-gray-200">
        Hello, I'm Abhinandan, a passionate full-stack developer with a keen focus on the MERN Stack. Drawing from my IT background, I aim to craft impactful, visually stunning software solutions that leave a lasting impression. My approach blends technical expertise with creative insight, allowing me to deliver user-centric applications that meet and exceed client expectations. I thrive on tackling complex challenges and transforming ideas into robust, scalable products that drive innovation.
        </p>
        <br />
        <h1 className="text-orange-400 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="list-disc ml-5">
          <li className=" text-gray-200">
            I have completed my High School from Dr K N Modi Sci & Com College (Up board)in
            the year 2017 and scored 7.5 CGPA.
          </li>
          <li className=" text-gray-200">
            I have completed my Intermediate from Dr K N Modi Sci & Com College (Up board)
            with Science Stream in the year 2019 and scored 68%.
          </li>
          <li className=" text-gray-200">
            I have completed my Bachelor's of Technology(Computer Science) from
            Dr. APJ Abdul Kalam Technical University in the year 2024 and scored
            7.4 CGPA.
          </li>
        </ul>
        <br />
        <h1 className="text-orange-400 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className=" text-gray-200">
          Languages: Java, JavaScript.
          <br />
          Technologies: React.js, NodeJS, Express.js, MongoDB, ReactJS, HTML5, CSS3,
          tailwind
          <br />
          Developer Tools: VS Code, Cursor sh, Eclipse IDE.
          <br />
          Database: MongoDB.
          <br />
          Soft Skills: Presentation, Planning, Organized, Creative
          Problem-Solving, Teamwork, Active Listening, Adaptability, Analytical
          Thinking, Excellent problem-solving skills, Effective communicator and
          collaborator.
        </span>
        <br />
        <br />

        <h1 className="text-orange-400 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center space-x-2">
              <a
                href="https://www.credly.com/badges/a88660c9-c565-40e3-ba5d-f44e47e0b31f/public_url"
                target="_blank"
                className="flex items-center space-x-2"
              >
                <FaAws className="text-2xl cursor-pointer" />
                <span>
                  AWS Academy Graduate - AWS Academy Cloud Architecting
                </span>
              </a>
              
            </li>
            <li>
              <a
                href="https://www.salesforce.com/trailblazer/adaksh9"
                target="_blank"
                className="flex items-center space-x-2"

              >
                <LiaSalesforce className="text-2xl cursor-pointer" />
                <span>
                  SalesForce (Ranger)
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1pARYyIn7aJe6pgqqct7JT4rihES50FVL/view?usp=sharing"
                target="_blank"
                className="flex items-center space-x-2"

              >
                <PiCertificate  className="text-2xl cursor-pointer" />
                <span>
                Virtual Internship Program - Web Development
                </span>
              </a>
            </li>
            
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-orange-400 font-semibold text-xl ">
          Mission Statement
        </h1>
        <p className=" text-gray-200 mb-10" >
        To deliver innovative solutions that exceed client expectations and positively impact the digital landscape, leveraging my creativity and continuous learning to set industry benchmarks
        </p>
        
      </div>
      
    </div>
    
  );
}

export default About;
