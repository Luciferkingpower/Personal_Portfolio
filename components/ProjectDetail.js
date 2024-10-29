// components/ProjectDetail.js
import Link from 'next/link';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <p className="text-center">Project not found</p>;
  }

  return (
    <div className="container mx-auto p-4 h-[77vh]">
      <Link href="/projects"legacyBehavior>
        <a className="text-blue-500 underline mb-4 block">&larr; Back to Projects</a>
      </Link>
      <div className="max-w-4xl mx-auto border p-6 rounded-lg shadow-lg">
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl text-slate-300 font-bold mb-4">{project.name}</h1>
        <p className="text-lg text-slate-400 mb-4">{project.description}</p>
        <a
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
