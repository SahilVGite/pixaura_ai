import React from 'react';
import { Globe, Languages, Users, Volume2 } from 'lucide-react';
import transVid from '../assets/videos/vca_1_optimized.mp4';

const TranslatorSection: React.FC = () => {
  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'ZH', name: 'Chinese', flag: '🇨🇳' },
    { code: 'JA', name: 'Japanese', flag: '🇯🇵' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">AI Video Translator</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Speak to the world in</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              150+ languages
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Break language barriers instantly. Our AI translator preserves your voice, 
            lip-sync, and emotions while speaking in any language.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Translation Interface */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-200/50">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Video Translation</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ready</span>
              </div>
            </div>

            {/* Language Selection */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  From
                </label>
                <div className="p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇺🇸</span>
                    <div>
                      <div className="font-semibold text-gray-900">English</div>
                      <div className="text-sm text-gray-600">Original</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  To
                </label>
                <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🇪🇸</span>
                    <div>
                      <div className="font-semibold text-gray-900">Spanish</div>
                      <div className="text-sm text-gray-600">Target</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Languages */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Popular Languages
              </label>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 text-center group"
                  >
                    <div className="text-lg mb-1 group-hover:scale-110 transition-transform duration-200">
                      {lang.flag}
                    </div>
                    <div className="text-xs font-medium text-gray-700">{lang.code}</div>
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Languages className="w-5 h-5" />
              <span>Translate Video</span>
            </button>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-8">
              {[
                {
                  icon: <Volume2 className="w-6 h-6" />,
                  title: 'Voice Cloning',
                  description: 'Your unique voice preserved in every language with perfect intonation and emotion.',
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: 'Perfect Lip-Sync',
                  description: 'Advanced AI ensures mouth movements match the translated speech naturally.',
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: 'Native Pronunciation',
                  description: 'Each language sounds authentic with proper accent and cultural nuances.',
                },
                {
                  icon: <Languages className="w-6 h-6" />,
                  title: 'Instant Translation',
                  description: 'Process videos in minutes, not hours. Scale your content globally.',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mb-20 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50'>
          <video src={transVid} autoPlay muted loop playsInline preload='auto' className='w-full h-full object-cover'></video>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Languages Supported' },
            { number: '99.2%', label: 'Accuracy Rate' },
            { number: '5M+', label: 'Videos Translated' },
            { number: '3 min', label: 'Average Process Time' },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslatorSection;