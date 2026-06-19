import React from "react";
import Typewriter from "typewriter-effect";
import Navbar from "./Navbar";
//icons 
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
const Hero = () => {
  return (
    <>
    <Navbar />
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 bg-[#020617] text-white overflow-hidden">
      {/*  Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* LEFT SIDE */}
      <div className="max-w-2xl z-10">
        <h3 className="text-gray-300 text-xl">Hi, I'm</h3>

        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Chetana Sen
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-400 mt-3 h-10">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "AI Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-gray-300 mt-6 leading-relaxed">
          Building modern web applications with clean architecture,
          seamless user experiences, and intelligent AI integrations.
        </p>

        {/* download resume */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/Chetana_Sen.pdf"
            download="Chetana_Sen_Resume.pdf"
            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-5 py-2 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>

        {/* social contact  */}
        <div className="flex flex-wrap gap-6 mt-6 text-gray-400">
          <a href="https://github.com/chetana-sen369"
          target="_blank"
          rel="noopener noreferrer"><FaGithub size={30}/></a>
          <a href="https://www.linkedin.com/in/chetana-sen-2666a325b"
          target="_blank"
          rel="noopener noreferrer"
          ><CiLinkedin size={30}/></a>
          <a href="mailto:chetanasen369@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          ><MdOutlineEmail size={30} /></a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;