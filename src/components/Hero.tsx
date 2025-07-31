import React from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-16">
      <div className="container-max section-padding">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/183/525/original/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg"
              alt="Sai Ganesh Katepalli"
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white animate-float"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-slide-up">
            Hi, I'm <span className="gradient-text">Sai Ganesh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Computer Science Student & Full Stack Developer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Passionate about creating innovative solutions and building impactful applications. 
            Currently pursuing B.Tech in Computer Science with expertise in web development and machine learning.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View My Work
            </a>
            
            <a
              href="#contact"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://www.linkedin.com/in/sai-ganesh-katepalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-primary-600 hover:text-primary-700"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="https://github.com/Katepalli-Sai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-gray-700 hover:text-gray-900"
            >
              <Github size={24} />
            </a>
            
            <a
              href="mailto:katepallisaiganesh2@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 text-green-600 hover:text-green-700"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;