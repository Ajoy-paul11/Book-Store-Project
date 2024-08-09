import React from "react";
import { BookSection, HeroSection } from "../components";

function Home() {
  return (
    <>
      <div className=" bg-slate-200 text-black dark:bg-slate-900 dark:text-slate-300">
        <HeroSection />
        <BookSection />
      </div>
    </>
  );
}

export default Home;
