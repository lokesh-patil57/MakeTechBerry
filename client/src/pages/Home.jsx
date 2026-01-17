import { Outlet } from "react-router-dom";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div className="pt-28 bg-[#E7DEFE] min-h-screen">
      <Hero />
    </div>
  );
};

export default Home;
