import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10M+', label: 'Videos Created' },
    { number: '100K+', label: 'Happy Creators' },
    { number: '150+', label: 'Languages Supported' },
    { number: '99.9%', label: 'Uptime' }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to make video creation accessible to everyone.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User-Centric',
      description: 'Every feature is designed with our users in mind, ensuring the best possible experience.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Quality Focus',
      description: 'We never compromise on quality, delivering professional-grade results every time.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product design to customer support.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Kim',
      role: 'CEO & Co-founder',
      bio: 'Former AI researcher at MIT, 10+ years in machine learning',
      avatar: '👩‍💼'
    },
    {
      name: 'Marcus Chen',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google engineer, expert in computer vision and NLP',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Product',
      bio: 'Product leader with 8+ years at Adobe and Microsoft',
      avatar: '👩‍💻'
    },
    {
      name: 'Alex Johnson',
      role: 'Head of Design',
      bio: 'Award-winning designer, former creative director at Apple',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Pixaura AI Pro
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're democratizing video creation through cutting-edge AI technology. 
            Our mission is to empower everyone—from individual creators to global enterprises—
            to tell their stories through professional, engaging video content.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-gray-200/50">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded in 2021 by a team of AI researchers and video production experts, 
                Pixaura AI Pro was born from a simple observation: creating professional video 
                content shouldn't require a Hollywood budget or years of technical expertise.
              </p>
              <p>
                We started with a vision to make video creation as easy as writing text. 
                Through groundbreaking research in generative AI, computer vision, and 
                natural language processing, we've built the world's most advanced 
                AI video generation platform.
              </p>
              <p>
                Today, we're proud to serve over 100,000 creators, marketers, educators, 
                and businesses worldwide, helping them bring their ideas to life through 
                the power of AI-generated video content.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🚀
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Innovation Timeline
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>2021</span>
                      <span>Company Founded</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2022</span>
                      <span>First AI Avatar Released</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2023</span>
                      <span>Multi-language Support</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2024</span>
                      <span>10M+ Videos Created</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-3 text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to join our story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the AI video revolution. Start creating professional videos today.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Start Creating
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;