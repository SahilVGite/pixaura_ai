import React from 'react';
import { Type, ArrowRight, Sparkles, Clock } from 'lucide-react';
import txtToVid from '../assets/videos/textToVid.mp4';

const TextToVideoSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className=''>
            <video
                preload="auto"
                autoPlay
                loop
                playsInline
                muted
                className="rounded-[48px] object-cover w-full"
                width="813"
                height="588"
                src={txtToVid}
              ></video>
          </div>
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
              <Type className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Text to Video</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Turn your</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                words into videos
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simply type your script and watch as our AI transforms it into a 
              professional video with realistic avatars, perfect lip-sync, and natural gestures.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Sparkles className="w-5 h-5" />,
                  title: 'Instant Generation',
                  description: 'Create videos from text in under 2 minutes',
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: '24/7 Availability',
                  description: 'Generate videos anytime, anywhere, instantly',
                },
                {
                  icon: <Type className="w-5 h-5" />,
                  title: 'Natural Speech',
                  description: 'AI voices that sound completely human',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              <span>Try Text to Video</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          {/* Demo Interface */}
          <div className="relative mt-10">
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-200/50">
              {/* Text Input Area */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Enter your script
                </label>
                <div className="relative">
                  <textarea 
                    className="w-full h-32 p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    placeholder="Welcome to our AI video platform! Today I'll show you how easy it is to create professional videos..."
                    defaultValue="Welcome to our AI video platform! Today I'll show you how easy it is to create professional videos using just text. Our advanced AI technology can generate realistic avatars that speak your words with perfect lip-sync and natural gestures."
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                    156 / 500 words
                  </div>
                </div>
              </div>

              {/* Settings */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Avatar
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200">
                    <option>Emma - Professional</option>
                    <option>Alex - Casual</option>
                    <option>Sarah - Corporate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <select className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>

              {/* Generate Button */}
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Generate Video</span>
              </button>

              {/* Preview Area */}
              <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-blue-200">
                <div className="text-center text-gray-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                    <Type className="w-6 h-6" />
                  </div>
                  <p className="text-sm">Your video will appear here</p>
                  <p className="text-xs text-gray-500 mt-1">Processing time: ~90 seconds</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextToVideoSection;