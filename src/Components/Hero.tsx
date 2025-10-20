import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen py-8 flex items-center justify-center relative overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        {/* Planets */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-float opacity-80"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>

        {/* Nebula clouds */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 mt-20 xl:mt-0 lg:grid-cols-2 gap-4 items-center">
          {/* Text Content */}
          <div className={`text-white space-y-6 lg:space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Pravin
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
              Passionate and detail-oriented developer with a deep focus on crafting meaningful digital experiences
              that blend performance, simplicity, and user delight.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer text-sm sm:text-base"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:text-primary-600 transform hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="mailto:pravinpadalkar78@gmail.com"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/pravinpadalkar78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="tel:+919322535911"
                className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300 cursor-pointer"
                aria-label="Phone"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end mt-8 lg:mt-0 px-4 sm:px-0 animate-float ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative group cursor-pointer">
              {/* Animated rings around profile */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border border-white/10 animate-spin-reverse"></div>

              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-secondary-600 p-2 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 "></div>

                  {/* Profile placeholder with enhanced styling */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative z-10  transition-transform duration-500">
                    <div className="relative">
                      <img src='/profile.png' className="w-full object-contain text-gray-600 group-hover:text-primary-600  transition-colors duration-500" />
                      {/* Glowing effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-white/20 scale-0  transition-transform duration-700"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements with space theme */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce-slow shadow-lg group-hover:shadow-yellow-400/50 transition-shadow duration-300"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-bounce-slow shadow-lg group-hover:shadow-pink-400/50 transition-shadow duration-300" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce-slow shadow-lg group-hover:shadow-blue-400/50 transition-shadow duration-300" style={{ animationDelay: '2s' }}></div>

              {/* Additional space-themed floating elements */}
              <div className="absolute top-1/4 -right-6 sm:-right-12 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-1/3 -right-3 sm:-right-6 w-2 h-2 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full animate-float shadow-lg" style={{ animationDelay: '4s' }}></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-600/20 scale-0 group-hover:scale-110 transition-transform duration-700 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">Scroll Down</span>
          <div className="relative">
            <svg className="w-6 h-6 text-white group-hover:text-primary-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
