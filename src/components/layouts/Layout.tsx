import Hero from "../header/hero";
import { Outlet } from "react-router";
import React from "react";
import BackGroundNebula from "./BackGroundNebula";

const Layout = () => {
  return (
    <div
      className='
        min-h-screen text-white relative overflow-hidden
        bg-linear-to-b from-[#0a0f16] via-[#0d1422] to-[#0f1724]
      '
    >
      {/* ==================== GALAXY BACKGROUND ==================== */}
      <BackGroundNebula />
      {/* ==================== HERO ==================== */}
      <div className='pt-24 pb-12 relative z-10'>
        <Hero />
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <section
        className='
          max-w-5xl w-full mx-auto
          px-6 sm:px-8 py-10 mb-20
          relative z-10
        '
      >
        <Outlet />
      </section>
    </div>
  );
};

export default React.memo(Layout);
