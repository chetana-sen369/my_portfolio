import React from "react";
import myProfile from "../assets/my_profile.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-around gap-16 px-6 md:px-20 bg-[#020617] text-white"
    >
      {/* LEFT SIDE - IMAGE */}
      <div className="flex justify-center">
        <div className="w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
          <img
            src={myProfile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE - CONTENT */}
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I am a Full Stack Developer passionate about building scalable,
          user-friendly, and AI-powered web applications. I enjoy working
          across the stack and solving real-world problems with clean and
          efficient code.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          I have experience working with React, Node.js, FastAPI, while also exploring AI integrations and
          system design concepts.
        </p>

        {/* SKILLS */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-3 text-white">
            Skills
          </h3>

        <div className="mt-8 space-y-6">

  {/* Languages */}
  <div>
    <h3 className="text-blue-400 font-semibold mb-2">Languages</h3>
    <div className="flex flex-wrap gap-2">
      {["Python", "JavaScript", "HTML", "CSS"].map((skill, i) => (
        <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Frameworks */}
  <div>
    <h3 className="text-blue-400 font-semibold mb-2">Frameworks</h3>
    <div className="flex flex-wrap gap-2">
      {["ReactJS", "NodeJS", "FastAPI", "MERN Stack"].map((skill, i) => (
        <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Tools */}
  <div>
    <h3 className="text-blue-400 font-semibold mb-2">Developer Tools & Platforms</h3>
    <div className="flex flex-wrap gap-2">
      {["VS Code", "GitHub", "Docker", "LLMs"].map((skill, i) => (
        <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500">
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Monitoring */}
  <div>
    <h3 className="text-blue-400 font-semibold mb-2">Monitoring</h3>
    <div className="flex flex-wrap gap-2">
      {["Loki", "Prometheus", "Grafana", "Posthog"].map((skill, i) => (
        <span key={i} className="px-3 py-1 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-blue-500">
          {skill}
        </span>
      ))}
    </div>
  </div>

</div>
        </div>
      </div>
    </section>
  );
};

export default About;