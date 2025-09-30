import React from 'react';
import { Play, ArrowRight, Check, Star } from 'lucide-react';

const FreeTrialSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">Free Trial Available</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span className="block">Try our free</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI video generator
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Create up to 5 professional videos for free. No credit card required, 
            no hidden fees. Experience the future of video creation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Text to Video',
              description: 'Transform scripts into professional videos with AI avatars',
              features: ['5 video generations', 'All AI avatars', '720p quality'],
            },
            {
              title: 'Image Animation',
              description: 'Bring your photos to life with cinematic motion',
              features: ['5 image animations', 'All animation styles', 'HD export'],
            },
            {
              title: 'Video Translation',
              description: 'Translate videos to 10+ popular languages',
              features: ['2 video translations', 'Voice cloning', 'Lip-sync accuracy'],
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
              <ul className="space-y-3">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Trusted by creators worldwide</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
            {['Google', 'Microsoft', 'Adobe', 'Netflix', 'Disney'].map((company) => (
              <div key={company} className="text-lg font-semibold text-gray-400 mb-4">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;