import React from 'react';
import { GraduationCap, MapPin, Calendar, Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-primary-600" size={24} />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-600">CMR Institute of Technology</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      2023 - 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      Hyderabad, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  I'm a passionate computer science student with a strong foundation in full-stack development 
                  and machine learning. I enjoy solving complex problems and building applications that make a difference.
                </p>
                <p>
                  My experience spans across web development, Artificial Intelligence and Machine Learning projects. 
                  I'm always eager to learn new technologies and contribute to innovative projects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://drive.google.com/file/d/1Txz_NKU6yXCcu3nStEDvZXf5DS71pONM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="lg:order-first">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About me"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;