// components/ProjectList.js
"use client"
import Link from 'next/link';
import { easeIn, motion } from "framer-motion";
// app/projects/page.jsx

const ProjectList = ({ projects = [] }) => {
  return (
    <div id='project' className="container mx-auto  p-4">
      <h1 className="text-3xl font-bold mb-6 text-slate-200 text-center">My Projects</h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, ease: "easeIn" }}>
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} legacyBehavior>
            <a className="block p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl text-slate-300 font-semibold">{project.name}</h2>
              <p className="mt-2 text-slate-400">{project.description}</p>
            </a>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectList;
