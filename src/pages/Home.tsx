import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Users, Zap, Globe, ArrowRight } from 'lucide-react';
import {heroVid, txtToVid, transVid} from '../assets/videos';

export const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate professional videos in minutes, not hours"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language",
      description: "Support for 40+ languages with natural voice synthesis"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members"
    }
  ];

  const demos = [
    {
      id: 1,
      title: "Marketing Video",
      thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:30"
    },
    {
      id: 2,
      title: "Product Demo",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "1:45"
    },
    {
      id: 3,
      title: "Training Video",
      thumbnail: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3:20"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-cyan-500/20 dark:from-purple-900/50 dark:via-gray-900 dark:to-cyan-900/50"></div> */}
        {/* <div className="absolute inset-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-cyan-500/20 dark:from-purple-500/10 dark:via-transparent dark:to-cyan-500/10 animate-pulse"></div>
          </div> */}
        <div className="absolute inset-0">
          <video src={heroVid} autoPlay muted loop playsInline preload="eager" className='w-full h-full object-cover'></video>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center glass-container rounded-3xl p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Create Stunning
              <br />
              AI Videos
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into professional videos with our cutting-edge AI technology. 
              No cameras, no crew, no problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-white glass-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Creating Free
              </motion.button>
              <motion.button
                className="px-8 py-4 glass-button border-2 border-gray-400/50 dark:border-gray-600/50 rounded-lg text-lg font-semibold hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </section>

      {/* Demo Videos Section */}
      <section className="py-20 glass-container mx-6 rounded-3xl my-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              See AI in Action
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our gallery of AI-generated videos across different industries and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                className="group relative glass-card rounded-2xl overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img
                    src={demo.thumbnail}
                    alt={demo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 glass-button rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{demo.title}</h3>
                    <p className="text-sm opacity-80">{demo.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative'>
        <div className="absolute inset-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl mx-6 z-0 animate-gradient-x"></div>
        <div className='flex flex-col md:flex-row items-center justify-between  items-start gap-[40px] md:gap-[80px] lg:gap-[120px] relative z-10 mx-6 p-12'>
          <div className='w-full md:w-2/3 sm:w-full'>
            <h3 className='font-abc-solar-display text-[32px] md:text-[60px] font-bold my-[20px]'>Take ideas from text to video instantly</h3>
            <p className='mt-[20px] text-[16px] color-heygen-gray-carbon  my-8'>Produce complete videos with just a script and text to video AI. Our AI video generator automates and edits the entire process and saves hours of production time. Generate a high-quality video (1080p or 4K) with a voiceover, visuals, and AI avatar. Use it to create content faster for product explainers, sales pitches, onboarding videos, or YouTube. Match your message and audience with different voice styles, languages, and avatars.</p>
            <motion.button
                className="mt-8 px-8 py-4 glass-button border-2 border-gray-400/50 dark:border-gray-600/50 rounded-lg text-lg font-semibold hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
          </div>
          <div className='w-full md:w-1/2 sm:w-full flex-1'><video src={txtToVid} autoPlay muted loop playsInline preload="eager" className='w-full object-cover rounded-[48px]'></video></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Why Choose AIVideoGen?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to make video creation effortless and professional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 glass-card rounded-2xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='relative w-full '>
        <div className='bg-[#35c838] p-10 md:p-20 mx-6 rounded-3xl'>
          <h3 style={{ color: 'rgb(35, 55, 23)' }} className='font-abc-solar-display text-[32px] md:text-[60px] font-bold my-[20px]'>Speak any language in a click<br/>  with AI video translator</h3>
          <p style={{ color: 'rgb(35, 55, 23)' }} className='mt-[20px] text-[18px] font-semibold my-8'>Speak 175+ languages and dialects with a click. Upload a video and HeyGen’s AI video translator will translate into another language with natural lip-sync and subtitles that maintains the voice, tone, and pacing of the original speaker. No need to re-record, hire voice actors, or manually sync audio. Just speed, accuracy, and content consistency across any market, in any language.</p>
          <div className='w-full'>
            <video src={transVid} autoPlay muted loop playsInline preload="eager" className='w-full object-cover rounded-2xl md:rounded-[48px]'></video>
          </div>
          <h5 style={{ color: 'rgb(35, 55, 23)' }} className='font-abc-solar-display text-[25px] md:text-[35px] font-bold mt-[30px]'>Voice cloning and lip-sync</h5>
          <p style={{ color: 'rgb(35, 55, 23)' }} className='mt-[10px] text-[18px] font-semibold my-8'>Keep your voice consistent across languages with voice cloning and lip-sync.</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 glass-container mx-6 rounded-3xl my-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1M+", label: "Videos Created" },
              { number: "50K+", label: "Happy Customers" },
              { number: "40+", label: "Languages" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join thousands of creators who are already using AIVideoGen to bring their ideas to life
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 inline-flex items-center gap-2 text-white glass-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};