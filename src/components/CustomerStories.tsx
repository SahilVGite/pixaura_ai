import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const CustomerStories: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director',
      company: 'TechFlow Inc.',
      avatar: '👩‍💼',
      rating: 5,
      quote: 'Pixaura AI Pro transformed our content strategy. We went from 2 videos per month to 20, with better engagement rates than ever before.',
      metrics: { videos: '500+', engagement: '+180%', time_saved: '40hrs/week' }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'E-learning Creator',
      company: 'EduMaster',
      avatar: '👨‍🏫',
      rating: 5,
      quote: 'The multilingual capabilities are incredible. I can now reach students globally without the need for expensive translation services.',
      metrics: { languages: '12', students: '50K+', revenue: '+300%' }
    },
    {
      name: 'Emma Thompson',
      role: 'Social Media Manager',
      company: 'BrandBoost',
      avatar: '👩‍💻',
      rating: 5,
      quote: 'Image to video feature is a game-changer. Our social media engagement increased by 250% using animated posts.',
      metrics: { posts: '1000+', engagement: '+250%', followers: '+45K' }
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Customer</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how creators, marketers, and businesses are transforming their content 
            strategy with AI-powered video generation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Avatar & Info */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-blue-600">{value}</div>
                    <div className="text-xs text-gray-500 capitalize">
                      {key.replace('_', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex space-x-2">
            {[0, 1, 2].map((dot) => (
              <div key={dot} className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            ))}
          </div>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to create your success story?
          </h3>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;