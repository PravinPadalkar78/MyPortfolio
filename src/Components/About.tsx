import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useEffect, useState } from 'react';
import WorkingAnimation from '../Animations/WorkingAnimation.json'
const About: React.FC = () => {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '3+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - About text */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="text-primary-600">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm a passionate and detail-oriented Full Stack Developer with a deep focus on crafting
                meaningful digital experiences that blend performance, simplicity, and user delight.
              </p>
              <p>
                Driven by curiosity and continuous learning, I take pride in translating complex ideas
                into elegant, scalable solutions that make a real difference. I value clean design,
                thoughtful architecture, and teamwork that thrives on shared growth and accountability.
              </p>
              <p>
                Currently working as a Full Stack Developer at D.K Tech Solutions And Enterprises,
                where I develop CRM systems and streamline business operations through innovative
                technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-100 hover:shadow-lg transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-slide-up' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image and skills preview */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className=" bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    {/* Placeholder for about image */}
                    {/* <svg className="" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg> */}
                    <DotLottieReact
                      data={WorkingAnimation}
                      loop
                      autoplay
                      className='aspect-auto'

                    />
                  </div>

                  {/* Quick skills preview */}
                  <div className="mt-6 space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Javascript', 'ReactJs', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'Hero UI', 'Node.js', 'MongoDB', 'ExpressJs', 'Redis', 'AWS', 'Docker'].map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
