import React from 'react';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';

const FeaturedTeams: React.FC = () => {
  const teams = [
    {
      logo: '🚀',
      name: 'TechFlow',
      category: 'SaaS Startup',
      description: 'Scaled their product demos from 2 to 50+ videos per month',
      results: ['500% increase in demo requests', '40% higher conversion rates', '$2M+ in new revenue'],
      size: '50-100 employees'
    },
    {
      logo: '🎓',
      name: 'EduMaster',
      category: 'Education',
      description: 'Created multilingual course content reaching global audiences',
      results: ['12 languages supported', '200K+ students reached', '95% satisfaction rate'],
      size: '10-50 employees'
    },
    {
      logo: '🏢',
      name: 'GlobalCorp',
      category: 'Enterprise',
      description: 'Streamlined internal communications and training programs',
      results: ['80% reduction in video costs', '60+ training modules created', '10K+ employees trained'],
      size: '1000+ employees'
    },
    {
      logo: '💡',
      name: 'CreativeStudio',
      category: 'Agency',
      description: 'Expanded service offerings with AI-powered video production',
      results: ['300% client portfolio growth', '50% faster delivery times', '90% profit margin increase'],
      size: '20-50 employees'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Increased Productivity',
      description: 'Teams report 10x faster video production with maintained quality standards.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Better Collaboration',
      description: 'Centralized platform enables seamless teamwork across departments.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Professional Results',
      description: 'Enterprise-grade output that meets the highest quality requirements.',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Featured Teams</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Powering teams at</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              leading companies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to enterprises, see how organizations are scaling their 
            video content with AI-powered solutions.
          </p>
        </div>

        {/* Featured Teams Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {teams.map((team, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{team.logo}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{team.name}</h3>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                    {team.category}
                  </div>
                  <p className="text-gray-600 text-sm flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {team.size}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {team.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Results:</h4>
                {team.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl border border-gray-200/50 p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Why teams choose Pixaura AI Pro
          </h3>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Get Enterprise Demo
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Custom pricing available for teams of 10+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeams;