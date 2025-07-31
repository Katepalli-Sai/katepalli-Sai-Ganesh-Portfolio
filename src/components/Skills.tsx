import React from 'react';
import { Code, Database, Globe, Smartphone, Brain, PenTool as Tools } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: ['Python','Java',],
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Express.js','Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      icon: <Database size={24} />,
      title: 'Databases & Cloud',
      skills: ['MongoDB', 'MySQL', 'AWS'],
    },
    {
      icon: <Brain size={24} />,
      title: 'Machine Learning',
      skills: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    },
    
    {
      icon: <Tools size={24} />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman',]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;