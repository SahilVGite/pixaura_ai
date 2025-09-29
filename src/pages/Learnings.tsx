import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Video, Users, Clock, Star } from 'lucide-react';

export const Learnings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'tutorials', name: 'Tutorials', icon: <Video className="w-4 h-4" /> },
    { id: 'guides', name: 'Guides', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'webinars', name: 'Webinars', icon: <Users className="w-4 h-4" /> },
  ];

  const resources = [
    {
      id: 1,
      title: "Getting Started with AI Video Generation",
      description: "Learn the fundamentals of creating your first AI video in under 10 minutes.",
      category: "tutorials",
      type: "Video Tutorial",
      duration: "8 min",
      difficulty: "Beginner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      views: "12.5K"
    },
    {
      id: 2,
      title: "Advanced Avatar Customization",
      description: "Deep dive into creating custom AI avatars that perfectly match your brand.",
      category: "tutorials",
      type: "Video Tutorial",
      duration: "15 min",
      difficulty: "Advanced",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "8.2K"
    },
    {
      id: 3,
      title: "Complete Guide to Video Templates",
      description: "Everything you need to know about using and customizing our video templates.",
      category: "guides",
      type: "Written Guide",
      duration: "10 min read",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      views: "15.1K"
    },
    {
      id: 4,
      title: "AI Video Marketing Masterclass",
      description: "Join our monthly webinar on leveraging AI videos for marketing success.",
      category: "webinars",
      type: "Live Webinar",
      duration: "60 min",
      difficulty: "All Levels",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.9,
      views: "3.8K"
    },
    {
      id: 5,
      title: "Scripting for AI Videos",
      description: "Master the art of writing compelling scripts that work perfectly with AI narration.",
      category: "guides",
      type: "Written Guide",
      duration: "12 min read",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      views: "9.7K"
    },
    {
      id: 6,
      title: "Building Your First Video Campaign",
      description: "Step-by-step tutorial on creating a complete video marketing campaign.",
      category: "tutorials",
      type: "Video Tutorial",
      duration: "22 min",
      difficulty: "Intermediate",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.8,
      views: "6.4K"
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-blue-400 bg-blue-400/10';
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Learn & Master
              <br />
              AI Video Creation
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive tutorials, guides, and resources to help you create stunning AI videos 
              and grow your business with our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 glass-container mx-6 rounded-3xl my-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                    : 'glass-button text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-600/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-500 dark:text-yellow-400 font-semibold">Featured Resource</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  AI Video Creation Masterclass
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                  A comprehensive 90-minute masterclass covering everything from basic concepts 
                  to advanced techniques. Perfect for beginners and professionals alike.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm glass-button">
                    Live Session
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm glass-button">
                    All Levels
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full text-sm glass-button">
                    90 min
                  </span>
                </div>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-white glass-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now - Free
                </motion.button>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Masterclass"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 glass-button rounded-full flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass-button text-gray-900 dark:text-white text-sm rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  {resource.type.includes('Video') && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-12 h-12 glass-button rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </motion.div>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                    <Clock className="w-4 h-4 text-gray-200" />
                    {resource.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      {resource.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{resource.views} views</span>
                    <motion.button
                      className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      Start Learning →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glass-container mx-6 rounded-3xl my-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Ready to Start Creating?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Put your new knowledge to the test. Start creating professional AI videos today.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-white glass-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};