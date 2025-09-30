import React from "react";
import Cube3D from "./Cude3D";
import heroVid from '../assets/videos/18069804-uhd_3840_2160_24fps.mp4';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-100 to-pink-100 animate-gradient-move">
      {/* Futuristic floating particles */}
      <div className="heroBg absolute inset-0 pointer-events-none z-0">
        <video src={heroVid} autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover" />
      </div>
      <div className="container flex flex-col lg:flex-row items-center lg:items-center lg:space-x-16 px-0 py-20 lg:py-32 w-full z-10">
        <div className="max-w-7xl mx-6 lg:w-[60%] rounded-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-pink-600 to-purple-600 bg-clip-text text-transparent drop-shadow-neon">
              AI avatar generator
            </span>
            <br />
            <span className="text-white">that casts your story</span>
          </h1>
          <p className="text-xl text-white max-w-3xl leading-relaxed drop-shadow-md">
            Create your own AI avatar in minutes with HeyGen’s easy-to-use
            platform. Whether you need a business presenter, influencer-style
            talking avatar, or a custom character, our free AI avatar generator
            gives you the power to design, edit, and animate avatars with studio
            quality. No design skills required. Just type, upload, and generate.
            It’s that easy.
          </p>
          <ul className="w-full flex flex-wrap justify-start gap-x-16 gap-y-6 text-blue-400 text-lg font-medium mt-8">
            <li className="flex items-center gap-4 mb-4 shrink-0 whitespace-nowrap text-xl text-white max-w-3xl leading-relaxed">
              <svg
                className="h-8 w-8 text-[#00c3ff]"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1665 6L9.1665 17L4.1665 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>1,000+ avatars</span>
            </li>
            <li className="flex items-center gap-4 mb-4 shrink-0 whitespace-nowrap text-xl text-white max-w-3xl leading-relaxed">
              <svg
                className="h-8 w-8 text-[#00c3ff]"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1665 6L9.1665 17L4.1665 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>1,000+ avatars</span>
            </li>
            <li className="flex items-center gap-4 mb-4 shrink-0 whitespace-nowrap text-xl text-white max-w-3xl leading-relaxed">
              <svg
                className="h-8 w-8 text-[#00c3ff]"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1665 6L9.1665 17L4.1665 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>1,000+ avatars</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 rounded-xl text-lg font-semibold text-white shadow-neon hover:scale-105 transition-all duration-300 border border-gray-300 backdrop-blur-lg">
              Start Creating Free
            </button>
            <button className="px-8 py-4 rounded-xl text-lg font-semibold text-white border-2 border-white hover:border-pink-300 transition-all duration-300 backdrop-blur-lg shadow-neon">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="max-w-7xl lg:w-[30%] mt-28 lg:mt-0 flex items-center justify-center">
          <div className="scale-110 drop-shadow-neon">
            <Cube3D />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
