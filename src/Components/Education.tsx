import React, { useEffect, useState } from 'react';

const Education: React.FC = () => {
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

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const education = {
    degree: 'Bachelor of Engineering In Computer Science',
    institution: 'Vidyalankar Institute Of Technology',
    period: '2020 - 2024',
    location: 'Mumbai',
    cgpa: '9.29',
    description: 'Comprehensive computer science education covering programming fundamentals, data structures, algorithms, database management, and software engineering principles.'
  };

  const freelancingProject = {
    title: 'Doctor4U - Healthcare Session Management UI',
    type: 'Freelancing Project',
    description: 'Developed a role-based interface for doctors and nurses with secure access control and calendar-based scheduling system.',
    technologies: ['React.js', 'Tailwind CSS', 'Ant Design', 'Context API'],
    features: [
      'Role-based interface for doctors and nurses',
      'Calendar-based scheduling system',
      'Timezone support for global appointments',
      'Secure access control',
      'Responsive UI design'
    ]
  };

  return (
    <section id="education" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-20 w-80 h-80 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My academic journey and notable freelance projects that showcase my practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                  <p className="text-gray-600">Academic Background</p>
                </div>
              </div>

              {/* Education Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{education.degree}</h4>
                  <h5 className="text-lg font-medium text-primary-600 mb-2">{education.institution}</h5>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{education.location}</span>
                  </div>
                </div>

                {/* CGPA */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-green-800 font-medium">CGPA</span>
                    <span className="text-2xl font-bold text-green-600">{education.cgpa}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">{education.description}</p>

                {/* Key Subjects */}
                <div className="pt-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Subjects</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures & Algorithms', 'Database Management', 'Computer Networks', 'Software Engineering', 'Object-Oriented Programming'].map((subject, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Freelancing Project */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Freelancing Project</h3>
                  <p className="text-gray-600">Healthcare Management System</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{freelancingProject.title}</h4>
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                      {freelancingProject.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{freelancingProject.description}</p>

                {/* Features */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h5>
                  <div className="space-y-2">
                    {freelancingProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-secondary-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="pt-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {freelancingProject.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Link */}
                <a className="pt-4" target='_blank' href='https://galen-assigment-aqsq.vercel.app/'>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 text-black font-semibold rounded-lg hover:from-secondary-600 hover:to-primary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Live Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className={`mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Playing Guitar', icon: '🎸', description: 'Passionate about music and learning new songs' },
                { name: 'Watching Anime', icon: '🎌', description: 'Love exploring Japanese animation and culture' },
                { name: 'Ground Activities', icon: '🏃‍♂️', description: 'Enjoy outdoor sports and physical activities' }
              ].map((hobby, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-3">{hobby.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{hobby.name}</h4>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
