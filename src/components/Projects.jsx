import React from "react";
import toDoList from "../assets/ToDoList.png";
import githubUsers from "../assets/GithubUsers.png";
import pingup from "../assets/Pingup.png";
import taskManager from "../assets/TaskManager.png";
import vidNotesAI from "../assets/VidNotesAI.png";
const projects = [
  {
    title: "Pingup",
    description:
      "Built a full-stack social media platform with real-time messaging, posts, and stories using MERN stack, Clerk authentication, Redux state management, and ImageKit for media handling.",
    image: pingup,
    tech: ["MERN","REST APIs"],
    live: "https://pingup-full-stack-amze.vercel.app/",
    github: "https://github.com/chetana-sen369/Pingup-full-stack",
  },
  {
    title: "Task Manager",
    description:
      "Built a full-stack AI-powered task manager using React, FastAPI, and SQLite with CRUD APIs and Gemini API integration for smart task suggestions and generation.",
    image: taskManager,
    tech: ["React.js","FastAPI","SQLite","Gemini API"],
    live: "https://task-manager-ot2x.vercel.app/",
    github: "https://github.com/chetana-sen369/task-manager",
  },
  {
    title: "VidNotes AI",
    description:
      "Built an AI-powered platform that converts YouTube videos into structured notes using React, Node.js, MongoDB, and Google Gemini API with chunk-based transcript summarization.",
    image: vidNotesAI,
    tech: ["MERN","Gemini API"],
    live: "https://vid-notes-ai.vercel.app/",
    github: "https://github.com/chetana-sen369/VidNotesAI",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-10 bg-[#020617] text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 text-sm mt-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;