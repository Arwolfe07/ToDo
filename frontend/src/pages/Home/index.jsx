import React from "react";
import HomeTop from "../../components/HomeTop";
import About from "../../components/About";
const Home = () => {
  return (
    <div className="bg-bgwhite h-screen pt-24 lg:px-24 px-8">
      <HomeTop />
      <About/>
    </div>
  );
};

export default Home;
