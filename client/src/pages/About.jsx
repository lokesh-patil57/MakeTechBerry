import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Briefcase,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Map,
  CreditCard,
  Plane,
  Target,
  Users,
  Award,
  BookOpen,
} from "lucide-react";

/**
 * AnimatedBackground Component
 */
const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-100 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100 rounded-full blur-[160px]" />
      </div>
      {children}
    </div>
  );
};

/**
 * TestimonialCard Component
 */
const TestimonialCard = ({ quote, name, role, image, highlights, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Stagger logic for dynamic grid flow
  const staggerClass = index % 3 === 1 ? "lg:translate-y-12" : "";
  const tabletStagger =
    index % 2 === 1 ? "md:translate-y-8 lg:translate-y-0" : "";

  return (
    <div
      className={`relative group transition-all duration-700 ${staggerClass} ${tabletStagger}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(144,98,255,0.2)] transition-all duration-500 border border-gray-50 group-hover:-translate-y-2">
        <div className="relative mb-6">
          <div
            className={`absolute -inset-2 rounded-full transition-all duration-500 opacity-20 ${isHovered ? "bg-[#9062FF] scale-110" : "bg-transparent scale-100"}`}
          />
          <svg
            className={`w-10 h-10 relative z-10 transition-colors duration-500 ${isHovered ? "text-[#9062FF]" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <p className="text-gray-600 text-md leading-relaxed mb-8 italic">
          "
          {quote.map((part, idx) => (
            <span key={idx}>
              {highlights && highlights.includes(idx) ? (
                <span className="text-black font-bold not-italic">{part}</span>
              ) : (
                <span>{part}</span>
              )}
            </span>
          ))}
          "
        </p>

        <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-50"
          />
          <div>
            <h4 className="text-[#181E4B] font-bold text-base tracking-tight">
              {name}
            </h4>
            <p className="text-[#9062FF] font-medium text-xs uppercase tracking-wider">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * FoundingMemberCard Component
 */
const FoundingMemberCard = ({ initials, name, role, phone, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const color = {
    bg: "bg-[#E7DEFE]",
    text: "text-[#9062FF]",
    gradient: "from-[#E7DEFE] to-[#ddd0fe]",
    light: "bg-purple-20",
   
  };

  return (
    <div
      className="relative group h-full"
      style={{ animation: `slideUp 0.6s ease-out ${delay}s both` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] ${color.glow} ${isHovered ? "-translate-y-4" : ""}`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${color.gradient}`}
        />
        <div
          className={`p-8 pb-4 flex flex-col items-center text-center relative`}
        >
          <div
            className={`w-20 h-20 mb-6 rounded-3xl bg-gradient-to-br ${color.gradient} flex items-center justify-center shadow-lg transition-all duration-700 z-10 ${isHovered ? "scale-110 rotate-6 shadow-xl" : ""}`}
          >
            <span className={`text-2xl font-black text-[#9062FF]`}>{initials}</span>
          </div>
         <h3 className="text-xl font-semibold text-gray-800 tracking-tight leading-tight">
            {name}
          </h3>
          <p
            className={`font-bold text-[13px] ${color.text} uppercase tracking-wider mt-1`}
          >
            {role}
          </p>
        </div>
        <div className="px-8 pb-8 pt-4 space-y-4 border-t border-gray-100 mt-4">
          <div className="flex items-center gap-4">
            <div className={`${color.light} p-2 rounded-xl`}>
              <Phone className={`w-4 h-4 ${color.text}`} />
            </div>
            <p className="text-sm font-mono text-gray-900 font-bold">{phone}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`${color.light} p-2 rounded-xl`}>
              <MapPin className={`w-4 h-4 ${color.text}`} />
            </div>
            <p className="text-sm text-gray-600 font-bold tracking-tight">
              Pune, India
            </p>
          </div>
          <button className="w-full mt-4 py-4 px-6 bg-[#ddd0fe] text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-2 group/btn hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
          <span className="text-[#9062FF]">View Profile</span>

            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      title: "Our Story",
      icon: <Map className="text-[#9062FF]" size={24} />,
      content:
        "MakeTechBerry LLP was founded in 2025 with a vision to bridge the gap between academic learning and industry requirements.",
    },
    {
      title: "Mission",
      icon: <Target className="text-[#9062FF]" size={24} />,
      content:
        "To empower students and professionals with real-world skills while delivering innovative technology solutions.",
    },
    {
      title: "Vision",
      icon: <Plane className="text-[#9062FF]" size={24} />,
      content:
        "To become a trusted name in technology-driven learning, shaping future-ready professionals.",
    },
  ];

  const valueItems = [
    {
      title: "Innovation",
      icon: <Target size={32} />,
      desc: "Constantly pushing boundaries for cutting-edge training.",
    },
    {
      title: "Mentorship",
      icon: <Users size={32} />,
      desc: "Personalized guidance for every student’s journey.",
    },
    {
      title: "Excellence",
      icon: <Award size={32} />,
      desc: "Committed to delivering high-quality education.",
    },
    {
      title: "Practical",
      icon: <BookOpen size={32} />,
      desc: "Hands-on approach with real-world projects.",
    },
  ];

  const testimonials = [
    {
      quote: [
        "The ",
        "Mentors helped me",
        " with support and doubts cleared, they analysed my skills and ",
        "guided me",
        " to refine them.",
      ],
      highlights: [1, 3],
      name: "Sagrika Keshri",
      role: "Mentor Support",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    },
    {
      quote: [
        "Newton School's ",
        "mentor provided confidence",
        " with their ",
        "placement support",
        ", I thoroughly prepared for interviews.",
      ],
      highlights: [1, 3],
      name: "Animesh Bhatt",
      role: "Placement Support",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      quote: [
        "Mock interviews played a ",
        "vital role",
        " in my placement. It helped me ",
        "gain confidence",
        " for my actual interviews.",
      ],
      highlights: [1, 3],
      name: "Shaini Ghorai",
      role: "Interview Prep",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
  ];

  const members = [
    {
      initials: "MM",
      name: "Malhar Malavade",
      role: "Tech Lead",
      phone: "+91 80871 05728",
      delay: 0.1,
    },
    {
      initials: "PS",
      name: "Pranav Shinde",
      role: "Strategy Lead",
      phone: "+91 91455 98468",
      delay: 0.2,
    },
    {
      initials: "JK",
      name: "Janhvi Katakdhond",
      role: "Operations Lead",
      phone: "+91 76205 95075",
      delay: 0.3,
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % cards.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <AnimatedBackground>
      <div className="font-['Poppins',sans-serif] overflow-x-hidden antialiased">
        <style>{`
          @keyframes slideUp { 
            from { opacity: 0; transform: translateY(40px); } 
            to { opacity: 1; transform: translateY(0); } 
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes shimmer {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }
          .animate-fade-in-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
          .animate-float { animation: float 3s ease-in-out infinite; }
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
          .stagger-1 { animation-delay: 0.1s; } 
          .stagger-2 { animation-delay: 0.2s; } 
          .stagger-3 { animation-delay: 0.3s; }
        `}</style>

        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-60 text-center">
          <div className="absolute top-0 left-0 w-full h-[82%] bg-slate-100/80 -z-10 border-b border-slate-200" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h1
              className={`text-5xl md:text-7xl font-bold text-black mb-6 animate-fade-in-up stagger-1 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              About{" "}
              <span className="gradient-text relative inline-block">
                MakeTechBerry
                <div className="absolute inset-0 shimmer-effect"></div>
              </span>
            </h1>

            <p
              className={`text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up stagger-2 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              A Pune-based startup founded in 2025, dedicated{" "}
              <span className="text-gray-500 font-semibold">
                to revolutionizing tech education through comprehensive training
                and internship programs
              </span>
              , while enabling{" "}
              <span className="text-gray-500 font-semibold">
                companies to submit real-world projects
              </span>{" "}
              that are built by our talented intern teams.
            </p>
          </div>

          <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20 hidden md:block">
            <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-3">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[32px] p-10 shadow-xl border border-gray-50 hover:-translate-y-4 transition-all duration-500 group animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:rotate-6 bg-[#E7DEFE]">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#181E4B]">
                    {card.title}
                  </h3>
                  <p className="text-[#5E6282] leading-relaxed">
                    {card.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Story Slider */}
        <div className="md:hidden px-6 mt-[-80px] relative z-30 pb-20">
          <div className="bg-white rounded-[32px] p-10 shadow-2xl border border-gray-100">
            <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center bg-[#E7DEFE]">
              {cards[currentSlide].icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#181E4B]">
              {cards[currentSlide].title}
            </h3>
            <p className="text-[#5E6282] leading-relaxed">
              {cards[currentSlide].content}
            </p>
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${currentSlide === i ? "w-6 bg-#E7DEFE" : "w-1.5 bg-slate-200"}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg active:scale-90 transition-transform"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-64"></div>

        {/* --- VALUES SECTION --- */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <p className="text-black font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Our Principles
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueItems.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-50 hover:-translate-y-4 hover:shadow-2xl transition-all duration-700 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15 + 0.5}s` }}
              >
                <div className="mx-auto mb-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-[#E7DEFE] text-[#9062FF] group-hover:rotate-[10deg] transition-all shadow-lg">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#181E4B]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="py-24 bg-white/50 backdrop-blur-sm relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <p className="text-black font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Success Stories
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-black">
                What Students Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-24">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} index={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* --- FOUNDING MEMBERS SECTION --- */}
        <section className="relative py-24">
          <div className="absolute top-0 left-0 w-full h-[460px] bg-[#E7DEFE] -z-10 rounded-b-[120px]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Leadership
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Founding Members
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {members.map((member, index) => (
                <FoundingMemberCard
                  key={index}
                  {...member}
                  delay={0.1 * index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedBackground>
  );
};

export default function App() {
  return <AboutPage />;
}