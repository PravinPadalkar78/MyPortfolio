import React, { useEffect, useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  type: 'current' | 'past';
}

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack Developer',
      company: 'D.K Tech Solutions And Enterprises',
      period: '09/2024 - Present',
      location: 'Navi Mumbai',
      type: 'current',
      description: [
        'Developed a CRM system to streamline delivery tracking and manage client interactions for an import-export business',
        'Designed an intuitive interface for managing shipment data, tracking delivery status, and maintaining customer records',
        'Automated status updates and notifications to enhance operational transparency and reduce manual tracking efforts'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Techathalon Software Solutions',
      period: '04/2024 - 09/2024',
      location: 'Mumbai',
      type: 'past',
      description: [
        'Built and maintained responsive web interfaces using React.js, TypeScript, Tailwind CSS and Ant Design',
        'Managed state and complex forms with React Context API and React Hook Form',
        'Implemented JWT-based authentication, protected routes, and session handling',
        'Contributed to a modular codebase using Nx Monorepo and component-based architecture',
        'Ensured performance, accessibility, and cross-browser compatibility in production-grade UIs',
        'Collaborated closely with designers and backend teams to deliver seamless user experiences'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-primary-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My journey in software development has been marked by continuous learning and impactful contributions to various projects.
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full timeline-line rounded-full hidden lg:block z-0"></div>

          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-0 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full hidden lg:block animate-timeline-fill z-10"></div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 w-2 h-full timeline-line rounded-full lg:hidden"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${isVisible ? 'animate-timeline-slide' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Desktop Timeline Dot with Animation */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-30 hidden lg:block">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full border-4 border-white shadow-xl animate-pulse-glow"></div>
                    {/* Inner dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                    {/* Connecting line to content */}
                    <div className={`absolute top-1/2 w-12 h-1 bg-gradient-to-r ${index % 2 === 0
                      ? 'from-primary-400 to-transparent right-0'
                      : 'from-transparent to-primary-400 left-0'
                      } transform -translate-y-1/2`}></div>
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="absolute left-5 transform -translate-x-1/2 z-30 lg:hidden">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full border-3 border-white shadow-lg animate-pulse-glow"></div>
                    {/* Inner dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 ml-16 lg:ml-0' : 'lg:pl-12 ml-16 lg:ml-0'
                  }`}>
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-primary-200 relative overflow-hidden cursor-pointer">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Status badge with animation */}
                      <div className="flex items-center gap-4 flex-wrap justify-between mb-6">
                        <span className={`px-2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${exp.type === 'current'
                          ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 shadow-lg group-hover:shadow-green-200'
                          : 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 shadow-lg group-hover:shadow-gray-200'
                          }`}>
                          <span className="flex items-center ">
                            <div className={`w-2 h-2  rounded-full mr-2 animate-pulse ${exp.type === 'current' ? 'bg-green-500' : 'bg-gray-500'
                              }`}></div>
                            {exp.type === 'current' ? 'Current Position' : 'Previous Position'}
                          </span>
                        </span>
                        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                      </div>

                      {/* Title and Company */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-primary-600 mb-3 group-hover:text-primary-700 transition-colors duration-300">{exp.company}</h4>
                        <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-medium">{exp.location}</span>
                        </div>
                      </div>

                      {/* Description with enhanced styling */}
                      <div className="space-y-4 mb-6">
                        {exp.description.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start group/item">
                            <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full mt-2 mr-4 group-hover/item:scale-125 transition-transform duration-300"></div>
                            <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Enhanced Tech stack indicators */}
                      <div className="pt-6 border-t border-gray-200 group-hover:border-primary-200 transition-colors duration-300">
                        <div className="flex flex-wrap gap-2">
                          {exp.title.includes('Full Stack') ? (
                            <>
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">React.js</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">Node.js</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">MongoDB</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">CRM Systems</span>
                            </>
                          ) : (
                            <>
                              <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">React.js</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">TypeScript</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">Tailwind CSS</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">Ant Design</span>
                              <span className="px-3 py-1 bg-gradient-to-r from-red-100 to-red-200 text-red-800 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-pointer">JWT Auth</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to action */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-8 text-lg font-medium">Interested in working together?</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group relative overflow-hidden"
          >
            <span className="relative z-10">Let's Connect</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
