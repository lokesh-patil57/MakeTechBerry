import { useEffect, useState, useRef } from 'react';

/**
 * Animated Hero component for Register page
 */
export default function AnimatedHero({ onGetStarted }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      {/* Floating decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 bg-purple-300 rounded-full opacity-20 animate-float blur-xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-300 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      <div className="hidden md:block absolute top-1/2 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-pink-300 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '0.5s'}}></div>

      <div className="text-center max-w-4xl mx-auto relative z-10 w-full px-2 sm:px-4">
        {/* Badge */}
        <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-purple-700">🚀 A Startup Connecting Interns & Companies</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}>
          <span className="text-gray-900">Join </span>
          <span className="gradient-text relative inline-block">
            MakeTechBerry
            <div className="absolute inset-0 shimmer-effect"></div>
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-200' : 'opacity-0'}`}>
          A startup platform where <span className="text-purple-600 font-semibold">interns register for internships</span> and <span className="text-blue-600 font-semibold">companies submit their projects</span> to get them built by our talented team.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full px-2 ${isVisible ? 'animate-scale-in opacity-0 delay-300' : 'opacity-0'}`}>
          <button 
            onClick={onGetStarted}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={onGetStarted}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-purple-200 hover:border-purple-400"
          >
            Learn More
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Feature Pills */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-300' : 'opacity-0'}`}>
          {['AI-Powered', 'Smart Collaboration', 'Real Projects', 'Expert Mentorship'].map((feature, index) => (
            <span 
              key={index}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default"
              style={{animationDelay: `${0.4 + index * 0.1}s`}}
            >
              ✨ {feature}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-300' : 'opacity-0'}`}>
          {[
            { number: '500+', label: 'Interns Placed' },
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Partner Companies' }
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
