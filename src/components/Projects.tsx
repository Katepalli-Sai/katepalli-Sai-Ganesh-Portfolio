import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Finquity - Financial Management Platform',
      description: 'A comprehensive financial management platform built with React and Node.js. Features include expense tracking, budget planning, investment portfolio management, and financial analytics.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Typescript','Chart.js','tailwind CSS'],
      liveLink: 'https://finequity.netlify.app/',
      githubLink: 'https://github.com/Katepalli-Sai/Finequity',

    },
    {
      title: 'Multiple Disease Prediction System',
      description: 'Machine learning-based healthcare application that predicts multiple diseases using patient symptoms and medical data. Implements various ML algorithms for accurate diagnosis.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Scikit-learn', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib'],
      liveLink: '#',
      githubLink: 'https://github.com/Katepalli-Sai/Multiple-Disease-Prediction',
  
    },
    {
      title: 'Neighbourly - Community Platform',
      description: 'A social platform connecting neighbors and local communities. Features include local event management, neighborhood discussions, and community resource sharing.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Express.js','Mongodb', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/Katepalli-Sai/Neighbourly',
    },

  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                      title="View Code"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={14} />
          
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Katepalli-Sai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;