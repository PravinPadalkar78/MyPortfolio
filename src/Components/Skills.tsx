import React, { useEffect, useState } from 'react';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    color: string;
  }[];
}

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  const animateSkills = React.useCallback(() => {
    const allSkills = skillCategories.flatMap(category => category.skills);
    allSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.name]: skill.level
        }));
      }, index * 100);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills after a short delay
          setTimeout(() => {
            animateSkills();
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [animateSkills]);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-indigo-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'Ant Design', level: 80, color: 'bg-orange-500' },
        { name: 'HTML/CSS', level: 95, color: 'bg-pink-500' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75, color: 'bg-green-500' },
        { name: 'Express.js', level: 70, color: 'bg-emerald-500' },
        { name: 'Spring Boot', level: 65, color: 'bg-teal-500' },
        { name: 'Microservices', level: 60, color: 'bg-lime-500' },
      ]
    },
    {
      title: 'Databases & Tools',
      skills: [
        { name: 'MongoDB', level: 80, color: 'bg-yellow-500' },
        { name: 'MySQL', level: 75, color: 'bg-amber-500' },
        { name: 'PostgreSQL', level: 70, color: 'bg-orange-500' },
        { name: 'Git/GitHub', level: 85, color: 'bg-red-500' },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-400' },
        { name: 'Java', level: 75, color: 'bg-red-600' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'SQL', level: 80, color: 'bg-purple-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-primary-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mr-3 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm font-semibold">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${animatedSkills[skill.name] || 0}%`,
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className={`mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-4 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'RESTful APIs', 'JWT Authentication', 'Firebase Auth', 'Responsive Design',
                'API Integration', 'Version Control', 'Debugging', 'Problem Solving',
                'System Design', 'Nx Monorepo', 'AWS Basics', 'Docker Basics'
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="text-gray-700 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
