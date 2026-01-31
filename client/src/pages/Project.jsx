import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle2,
  Zap,
  ChevronRight,
  ArrowUpRight,
  Code,
  Users,
  Briefcase
} from 'lucide-react';
import api from '../services/api';
import AnimatedHero from '../components/register/AnimatedHero.jsx';
import "../styles/register.css";

const FALLBACK_PROJECTS = [
  {
    _id: 1,
    projectTitle: "Learning Management System",
    status: "ongoing",
    description: "A scalable LMS platform designed for student training, assessments, and corporate internships. Features include real-time progress tracking.",
    techStack: "React, Node.js, MongoDB",
    teamMembers: [],
    createdAt: new Date('2025-01-01').toISOString(),
    role: "Full-stack & UI/UX",
  },
  {
    _id: 2,
    projectTitle: "AI Resume Analyzer",
    status: "ongoing",
    description: "Leveraging LLMs to analyze resumes against job descriptions, providing candidates with actionable feedback and scoring.",
    techStack: "Python, OpenAI, FastAPI",
    teamMembers: [],
    createdAt: new Date('2024-12-01').toISOString(),
    role: "AI Integration",
  },
  {
    _id: 3,
    projectTitle: "Internship Management Portal",
    status: "completed",
    description: "A centralized ecosystem for managing high-volume internship applications and automated certificate generation.",
    techStack: "React, Firebase, Cloud Functions",
    teamMembers: [],
    createdAt: new Date('2024-10-01').toISOString(),
    role: "System Design",
  },
  {
    _id: 4,
    projectTitle: "BerryAnalytics Dashboard",
    status: "completed",
    description: "A custom data visualization tool built for internal management to monitor project velocity and resource allocation.",
    techStack: "Next.js, D3.js, PostgreSQL",
    teamMembers: [],
    createdAt: new Date('2024-08-01').toISOString(),
    role: "Full-stack",
  }
];

export default function Pro() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get('/projects/public/status');
      
      if (response.data?.data && Array.isArray(response.data.data)) {
        setProjects(response.data.data);
      } else {
        setProjects(FALLBACK_PROJECTS);
      }
      setError(null);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
      setProjects(FALLBACK_PROJECTS);
      setError('Using fallback projects');
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    const filterStatus = filter.toLowerCase() === 'completed' ? 'completed' : 'ongoing';
    return projects.filter(p => p.status?.toLowerCase() === filterStatus);
  }, [filter, projects]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `Started ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getStatusLabel = (status) => {
    return status?.toLowerCase() === 'completed' ? 'Completed' : 'Ongoing';
  };

  const getStatusColor = (status) => {
    const s = status?.toLowerCase();
    if (s === 'completed') {
      return 'text-green-600 bg-green-50 border-green-100';
    }
    return 'text-orange-500 bg-orange-50 border-orange-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4efff] to-white pt-20 sm:pt-24 md:pt-28 px-3 sm:px-4 md:px-6 pb-8 sm:pb-12 hide-scrollbar">
      {/* Animated Hero Section */}
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
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6 animate-fade-in-down">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-purple-700">🚀 MakeTechBerry LLP</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 animate-fade-in-up opacity-0">
            <span className="text-gray-900">Our </span>
            <span className="gradient-text relative inline-block">
              Projects
              <div className="absolute inset-0 shimmer-effect"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 animate-fade-in-up opacity-0 delay-200">
            A showcase of digital products we've built, currently building, and scaled for our partners.
          </p>

          {/* FILTER CONTROLS */}
          <div className="inline-flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm mt-4 animate-scale-in opacity-0 delay-300">
            {['All', 'Ongoing', 'Completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === tab
                  ? 'bg-slate-950 text-white shadow-lg'
                  : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 animate-fade-in-up opacity-0 delay-300">
            {['Innovation', 'Quality', 'Scalability', 'Expertise'].map((feature, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                ✨ {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

        {/* PROJECTS GRID */}
        <main className="px-6 max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="inline-block w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
                <p className="text-slate-500 font-medium">Loading projects...</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div
                    key={project._id}
                    className="group relative flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  >
                    {/* Status & Meta (Top) */}
                    <div className="p-8 pb-0 flex justify-between items-start">
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                        {formatDate(project.createdAt)}
                      </span>
                    </div>

                    {/* Featured Image */}
                    {project.featuredImage && (
                      <div className="px-8 pt-4">
                        <img
                          src={project.featuredImage}
                          alt={project.projectTitle}
                          className="w-full h-40 object-cover rounded-xl"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8 flex-1">
                      <h3 className="text-2xl font-bold text-slate-950 group-hover:text-indigo-600 transition-colors mb-3 flex items-center gap-2">
                        {project.projectTitle}
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all text-indigo-400" />
                      </h3>
                      <p className="text-slate-500 leading-relaxed mb-6">
                        {project.projectDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack?.split(',').map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 uppercase">
                            {tech.trim()}
                          </span>
                        ))}
                      </div>

                      {/* Team Members */}
                      {project.teamMembers && project.teamMembers.length > 0 && (
                        <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100/50 mb-4">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <Users size={12} /> Team Members
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.teamMembers.map((member, i) => (
                              <span key={i} className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-100">
                                {member}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Link */}
                    <div className="px-8 py-6 bg-slate-50/30 border-t border-slate-50">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Briefcase size={12} /> Project
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center border-2 border-dashed border-slate-100 rounded-[2rem]">
                  <p className="text-slate-400 font-medium italic">No projects found in this category.</p>
                </div>
              )}
            </div>
          )}
        </main>
    </div>
  );
}
