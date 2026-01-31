import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import { sendContactMessage } from "../services/contact.service.js";
import { useToast } from "../hooks/useToast.js";
import Toast from "../components/forms/Toast.jsx";
import "../styles/register.css";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    institute: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fullName, email, institute, phone, subject, message } = formData;

    if (!fullName || !email || !institute || !phone || !subject || !message) {
      showToast("Please fill out all fields before sending.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      await sendContactMessage({
        fullName,
        email,
        institute,
        phone,
        subject,
        message,
      });

      showToast("Message sent! We'll get back to you soon.", "success");

      setFormData({
        fullName: "",
        email: "",
        institute: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to send message. Please try again.";
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How soon will I get a reply?",
      a: "We usually respond within 24–48 hours depending on the request.",
    },
    {
      q: "Can I contact for internship guidance?",
      a: "Yes! You can contact us for internship, project guidance, mentorship, and collaboration.",
    },
    {
      q: "Do you support academic and industrial projects?",
      a: "Yes, we support both academic and industrial projects with documentation and clean implementation.",
    },
  ];

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
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-purple-700">📞 Get in Touch with Us</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 ${isVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}>
            <span className="text-gray-900">Let’s Talk with </span>
            <span className="gradient-text relative inline-block">
              MakeTechBerry
              <div className="absolute inset-0 shimmer-effect"></div>
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-sm sm:text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-200' : 'opacity-0'}`}>
            Have a project idea, internship query, or want to collaborate? Send us a message and we’ll connect with you.
          </p>

          {/* Feature Pills */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-12 px-2 ${isVisible ? 'animate-fade-in-up opacity-0 delay-300' : 'opacity-0'}`}>
            {['Quick Response', 'Expert Guidance', 'Project Support', 'Collaboration'].map((feature, index) => (
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

      {/* MAIN CONTENT */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: FORM */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h2>
            <p className="text-gray-600 mt-2">
              Fill the form and our team will contact you.
            </p>

            {/* divider line */}
            <div className="mt-6 h-[1px] w-full bg-gray-100" />

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200"
                  />
                </div>
              </div>

              {/* Institute / Business / Company */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Institute / Business / Company
                </label>
                <input
                  name="institute"
                  type="text"
                  placeholder="Enter your institute or company name"
                  value={formData.institute}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Internship / Project / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white outline-none focus:ring-2 focus:ring-purple-200 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 text-white font-bold shadow-md hover:bg-purple-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={18} />
              </button>

              {/* Small helper text */}
              <p className="text-xs text-gray-500 text-center">
                Please enter valid details so we can reach you quickly.
              </p>
            </form>
          </div>

          {/* RIGHT: CLEAN CONTACT INFO */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-gray-600 mt-2">
              Here are the best ways to reach us.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4FF] border border-purple-100">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Email</p>
                  <p className="text-base font-bold text-gray-900">
                    maketechberry@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4FF] border border-purple-100">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Phone</p>
                  <p className="text-base font-bold text-gray-900">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4FF] border border-purple-100">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Location</p>
                  <p className="text-base font-bold text-gray-900">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4FF] border border-purple-100">
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">
                    Working Hours
                  </p>
                  <p className="text-base font-bold text-gray-900">
                    Mon - Sat (10 AM - 7 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="w-full px-5 py-3 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition shadow-sm">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900">Quick FAQs</h2>
            <p className="text-gray-600 mt-2">
              Common questions students and interns ask us.
            </p>

            <div className="mt-6 space-y-3">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      type="button"
                    >
                      <span className="font-semibold text-gray-900">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={18}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
};


export default Contact;
