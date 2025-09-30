import React from 'react';
import { BookOpen, Video, FileText, Headphones, ArrowRight, Clock, Star } from 'lucide-react';

const Learning: React.FC = () => {
  const resources = [
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Video Tutorials',
      description: 'Step-by-step guides to master AI video creation',
      items: ['Getting Started (5 min)', 'Advanced Techniques (15 min)', 'Pro Tips & Tricks (10 min)'],
      type: 'video',
      duration: '30 min total'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documentation',
      description: 'Complete guides and API references',
      items: ['User Manual', 'API Documentation', 'Integration Guides'],
      type: 'docs',
      duration: 'Self-paced'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: 'Webinars',
      description: 'Live training sessions with our experts',
      items: ['Weekly Masterclasses', 'Q&A Sessions', 'Feature Deep Dives'],
      type: 'live',
      duration: '1 hour weekly'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Blog & Resources',
      description: 'Latest trends, tips, and best practices',
      items: ['Industry Insights', 'Case Studies', 'Template Library'],
      type: 'blog',
      duration: '5 min reads'
    }
  ];

  const courses = [
    {
      title: 'AI Video Creation Fundamentals',
      description: 'Learn the basics of creating professional AI videos from scratch',
      level: 'Beginner',
      duration: '2 hours',
      lessons: 12,
      rating: 4.9,
      students: '5,000+',
      preview: '🎬'
    },
    {
      title: 'Advanced Avatar Customization',
      description: 'Master the art of creating and customizing AI avatars for your brand',
      level: 'Intermediate',
      duration: '3 hours',
      lessons: 18,
      rating: 4.8,
      students: '3,200+',
      preview: '👤'
    },
    {
      title: 'Multi-Language Video Production',
      description: 'Create global content with our translation and localization features',
      level: 'Advanced',
      duration: '2.5 hours',
      lessons: 15,
      rating: 4.9,
      students: '2,100+',
      preview: '🌍'
    }
  ];

  return (
    <section id="learn" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Master</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI video creation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beginner basics to advanced techniques, we have everything you need 
            to become an AI video creation expert.
          </p>
        </div>

        {/* Learning Resources */}
        <div className="grid lg:grid-cols-4 gap-8 mb-20">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200/50 shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                {resource.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              <ul className="space-y-2 mb-6">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {resource.duration}
                </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Courses
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200/50 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                {/* Course Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {course.preview}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm font-medium text-gray-900">
                      Preview Available
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                      course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {course.level}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.lessons} lessons</span>
                    <span>{course.students} students</span>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Start Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl border border-gray-200/50 shadow-xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Join Our Learning Community
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with thousands of creators, share your projects, get feedback, 
            and learn from the best in our vibrant community.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { number: '25K+', label: 'Active Members' },
              { number: '500+', label: 'Daily Discussions' },
              { number: '100+', label: 'Expert Mentors' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Join Community
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
              Browse Forums
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;