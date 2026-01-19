export default function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: "0.5s" }} />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
