// import React from 'react';
// import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

// const Certifications = () => {
//   const certifications = [
//     // {
//     //   title: ' MERN Stack web development ',
//     //   issuer: 'PrepInsta',
//     //   date: 'March 2024',
//     //   description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
//     //   credentialUrl: 'https://drive.google.com/file/d/1o7ZJbU4IuYXt00_u7EK1-5_89i04ipa-/view?usp=sharing',
//     //   logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
//     // },
   
//     // {
//     //   title: 'AWS Certified Solution Architect Associate',
//     //   issuer: ' Infosys Springboard',
//     //   date: 'December 2023',
//     //   description: 'Comprehensive course covering supervised and unsupervised learning algorithms.',
//     //   credentialUrl: '#',
//     //   logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
//     // },
//     // {
//     //   title: 'Programming using java',
//     //   issuer: 'Infosys Springboard',
//     //   date: 'November 2023',
//     //   description: 'Complete full-stack development curriculum including responsive design and APIs.',
//     //   credentialUrl: '#',
//     //   logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
//     // },
//     {
//   title: 'MERN Stack Web Development',
//   issuer: 'PrepInsta',
//   date: 'March 2024',
//   description: 'Learned to build full-stack applications using MongoDB, Express.js, React, and Node.js, including REST API integration and responsive UI design.',
//   credentialUrl: 'https://drive.google.com/file/d/1o7ZJbU4IuYXt00_u7EK1-5_89i04ipa-/view?usp=sharing',
//   logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png',
// },

// {
//   title: 'AWS Certified Solutions Architect – Associate',
//   issuer: 'Infosys Springboard',
//   date: 'December 2023',
//   description: 'Gained in-depth knowledge of AWS architecture principles, cloud services, deployment strategies, and best practices for scalable solutions.',
//   credentialUrl: '#',
//   logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
// },

// {
//   title: 'Programming Using Java',
//   issuer: 'Infosys Springboard',
//   date: 'November 2023',
//   description: 'Covered Java fundamentals, object-oriented programming, exception handling, collections, and building console-based and GUI applications.',
//   credentialUrl: '#',
//   logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
// }

//   ];

//   return (
//     <section id="certifications" className="py-40 bg-gray-50">
//       <div className="container-max section-padding">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             <span className="gradient-text">Certifications</span> & Achievements
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Professional certifications and courses that validate my expertise in various technologies
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="card p-6 animate-slide-up"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="flex items-start gap-4 mb-4">
//                 <img
//                   src={cert.logo}
//                   alt={cert.issuer}
//                   className="w-20 h-20 rounded-lg object-cover"
//                 />
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
//                   <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
//                     <Building size={14} />
//                     {cert.issuer}
//                   </div>
//                   <div className="flex items-center gap-1 text-sm text-gray-500">
//                     <Calendar size={14} />
//                     {cert.date}
//                   </div>
//                 </div>
//               </div>
              
//               <p className="text-gray-600 text-sm mb-4 leading-relaxed">
//                 {cert.description}
//               </p>
              
//               <a
//                 href={cert.credentialUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
//               >
//                 <Award size={16} />
//                 View Credential
//                 <ExternalLink size={14} />
//               </a>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 text-primary-700 rounded-lg">
//             <Award size={20} />
//             <span className="font-medium">3+ Professional Certifications Earned</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'MERN Stack Web Development',
      issuer: 'PrepInsta',
      date: 'May 2025',
      description:
        'Learned to build full-stack applications using MongoDB, Express.js, React, and Node.js, including REST API integration and responsive UI design.',
      credentialUrl:
        'https://drive.google.com/file/d/1o7ZJbU4IuYXt00_u7EK1-5_89i04ipa-/view?usp=sharing',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png',
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Infosys Springboard',
      date: 'March 2025',
      description:
        'Gained in-depth knowledge of AWS architecture principles, cloud services, deployment strategies, and best practices for scalable solutions.',
      credentialUrl: 'https://drive.google.com/file/d/1XhnDIKhLkFk8xoJoFBaiwpdBNhGtLU3w/view',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      title: 'Programming Using Java',
      issuer: 'Infosys Springboard',
      date: 'October 2024',
      description:
        'Covered Java fundamentals, object-oriented programming, exception handling, collections, and building console-based and GUI applications.',
      credentialUrl: 'https://drive.google.com/file/d/1hE_umFXmYm0lsnBl0TNFRWLlEycn4Mkp/view',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise in various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-white border border-gray-200 p-2">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                    <Building size={14} />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                <Award size={16} />
                View Credential
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 text-primary-700 rounded-lg">
            <Award size={20} />
            <span className="font-medium">3+ Professional Certifications Earned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
