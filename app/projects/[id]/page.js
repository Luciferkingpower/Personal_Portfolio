// app/projects/[id]/page.jsx
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';

const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'This is a short description of Project One.',
    image: '/Assets/Images/x.jpg',  // Corrected path
    sourceCode: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'This is a short description of Project Two.',
    image: '/Assets/Images/Screenshot_8.png',  // Corrected path
    sourceCode: 'https://github.com/yourusername/project2'
  },
  {
    id: 3,
    name: 'Project Two',
    description: 'This is a short description of Project Two.',
    image: '/Assets/Images/Screenshot_8.png',  // Corrected path
    sourceCode: 'https://github.com/yourusername/project2'
  },
  // Add more projects as needed
];

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
