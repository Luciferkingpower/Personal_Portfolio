"use client";
import React from "react";
import { easeIn, motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div id="about" className=" min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 py-16 max-w-screen-lg">
        {/* Hero Section */}
        <motion.section className="text-center mb-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}
        >
          
          <div
            className="absolute inset-0 bg-cover bg-center h-80"
            style={{ backgroundImage: "url(/hero-bg.jpg)" }}
          ></div>
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Hi, I'm <strong>Ayush Temkar</strong>, a second-year IT student
              with a passion for creating immersive user experiences. I’m
              focused on both front-end and back-end development, and I’m eager
              to apply my skills in real-world projects.
            </p>
          </div>
        </motion.section>

        {/* Professional Experience Section */}
        <motion.section className="relative mb-16 hover:drop-shadow-sm  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-transparent h-32" />
          <div className="relative bg-white p-10 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a current student, I am actively involved in academic projects
              and personal development. I am looking forward to gaining hands-on
              experience through internships and real-world projects to further
              develop my skills.
            </p>
          </div>
        </motion.section>

        {/* Skills & Expertise Section */}
        <motion.section className="relative mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}>
          <div className="relative bg-white p-10 shadow-lg rounded-xl"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Skills & Expertise
            </h2>
            <ul className="text-lg text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300">
                <strong>Front-end:</strong> React, Next.js, HTML, CSS,
                JavaScript
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300">
                <strong>Back-end:</strong> Node.js, Express, MongoDB
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300">
                <strong>Tools:</strong> Git, VS Code
              </li>
              <li className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300">
                <strong>Design:</strong> Figma
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section className="relative mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}>
          <div className="relative bg-white p-10 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Education</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing a{" "}
              <strong>Bachelor's Degree in Information Technology</strong> at
              Mumbai University . Expected graduation: 2026.
            </p>
          </div>
        </motion.section>

        {/* Personal Projects Section */}
        <motion.section className="relative mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}>
          <div className="relative bg-white p-10 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Personal Projects
            </h2>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside">
              <li>
                <strong>Buy me a Chai</strong>: A web app that a back end app
                which accept payment form user and allow user to login on
                website store data.
              </li>
              <li>
                <strong>Spotify Clone</strong>: A web app that play music like
                any another music player and it is my first project .
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Hobbies & Interests Section */}
        <motion.section className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{delay:0.2, ease:"easeIn"}}
        >
          <div className="relative bg-white p-10 shadow-lg rounded-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Hobbies & Interests
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              When not coding, I love exploring new technologies, contributing
              to open-source projects, and blogging. My hobbies include hiking,
              watching movies, and playing battel royal game like BGMI,FREE FIRE
              ,CALL OF DUTY.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
