import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'katepallisaiganesh2@gmail.com',
      href: 'mailto:katepallisaiganesh2@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 9502952757',
      href: 'tel:+919502952757',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sai-ganesh-katepalli/',
      icon: <Linkedin size={24} />,
      color: 'text-blue-600 hover:text-blue-700',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Katepalli-Sai',
      icon: <Github size={24} />,
      color: 'text-gray-700 hover:text-gray-900',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/cmr_23r05a0508/',
      icon: <ExternalLink size={24} />,
      color: 'text-orange-600 hover:text-orange-700',
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/cmr_23r05a0508',
      icon: <ExternalLink size={24} />,
      color: 'text-brown-600 hover:text-brown-700',
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/23r05a0508/',
      icon: <ExternalLink size={24} />,
      color: 'text-green-600 hover:text-green-700',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for a developer for your next project, want to collaborate on something exciting, 
                or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg group-hover:bg-primary-200 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-medium text-gray-900">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg transition-all duration-200 transform hover:scale-110 hover:shadow-lg ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;