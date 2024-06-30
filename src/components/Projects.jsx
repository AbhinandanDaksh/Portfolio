import React from "react";
import weather from "../assest/fog_3691317.png";
import VediCode from "../assest/Logo2.png";
import JasStore from "../assest/ja logo.jpg";
import application from "../assest/warning.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: VediCode,
      name: "VediCode",
      link: "     ",
      description:
        "VediCode is a dynamic web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The project leverages Cloudinary for efficient media management, ensuring seamless image and video uploads and delivery. For secure and hassle-free payment processing, VediCode integrates Razorpay, allowing users to complete transactions smoothly. This combination of technologies ensures a robust, scalable, and user-friendly platform, providing an optimal experience for both developers and end-users."
    },
    {
      id: 2,
      logo: weather,
      name: "Weather App",
      link: "https://weather-app-eight-black-10.vercel.app/",
      description:
        "WeatherApp is a sleek, user-friendly application providing real-time weather updates and forecasts. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers current conditions, 7-day forecasts, and interactive maps. Users can search for any city, receive custom alerts, and enjoy a responsive design on both desktop and mobile devices. Weather data is fetched from a reliable API, ensuring accurate and up-to-date information. Stay informed and prepared with WeatherApp's intuitive interface and comprehensive weather insights."
    },
    {
      id: 3,
      logo: JasStore,
      name: "JasStore",
      link: "https://abhinandandaksh.github.io/JasStoreProject/",
      description:
        "Your JAS store is an e-commerce web application built with HTML, CSS, React.js, and JavaScript. It features a sleek, modern design with a responsive layout for optimal viewing on any device. Users can browse products, add items to their cart, and complete purchases seamlessly. The application integrates dynamic components and state management for efficient user interaction, ensuring a smooth and engaging shopping experience."
    },
    
    {
      id: 4,
      logo: application,
      name: "Multi-User Chat Application",
      link: "https://github.com/AbhinandanDaksh/JavaProject",
      description:
        "The multi-user chat application developed in Java facilitates real-time communication among multiple users. It supports concurrent connections, enabling users to exchange messages instantly in a secure environment. The application includes features like user authentication, message broadcasting, and room management, ensuring efficient communication and collaboration among participants."
    },
    
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 text-gray-200 mb-20 sm:gap-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        {/* <span className="underline font-semibold">Featured Projects</span> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-7">
          {cardItem.map(({ id, logo, name, link, description }) => (
            <div
              className="md:w-[300px] border-[5px] rounded-lg shadow-lg p-4 flex flex-col justify-between cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <div className="flex flex-col items-center">
                <img
                  src={logo}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mb-4"
                  alt={name}
                />
                <div className="text-center">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">{description}</p>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                {link ? (
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Source code
                  </button>
                ) : (
                  <button
                    className="bg-gray-500 text-white font-bold px-4 py-2 rounded"
                    disabled
                  >
                    Source code
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
