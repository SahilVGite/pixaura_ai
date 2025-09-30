import React from 'react';
import { Image, Camera, Wand2, Upload } from 'lucide-react';
import photToLife from '../assets/videos/photToLife.mp4';

const ImageToVideoSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Demo Interface */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl lg:rounded-3xl p-6 lg:p-8">
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg p-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 mb-6 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Upload className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Drop your image here
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Or click to browse files
                    </p>
                    <p className="text-xs text-gray-500">
                      Supports JPG, PNG, WebP • Max 10MB
                    </p>
                  </div>
                </div>

                {/* Sample Images */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden cursor-pointer group">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden cursor-pointer group">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 group-hover:scale-110 transition-transform duration-300">
                      <Image className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 rounded-lg overflow-hidden cursor-pointer group">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-200 to-teal-200 group-hover:scale-110 transition-transform duration-300">
                      <Wand2 className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                </div>

                {/* Animation Settings */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Animation Style
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Zoom In', 'Pan Left', 'Parallax'].map((style, index) => (
                        <button
                          key={style}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            index === 0 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration: 5 seconds
                    </label>
                    <input 
                      type="range" 
                      min="3" 
                      max="10" 
                      defaultValue="5"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Wand2 className="w-5 h-5" />
                  <span>Animate Image</span>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 mb-6">
              <Image className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Image to Video</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gray-900">Bring your</span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                photos to life
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload any image and watch our AI add cinematic motion, depth, and animation. 
              Perfect for social media, presentations, and storytelling.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Camera className="w-5 h-5" />,
                  title: 'Smart Motion Detection',
                  description: 'AI analyzes your image to create natural movement',
                },
                {
                  icon: <Wand2 className="w-5 h-5" />,
                  title: 'Multiple Styles',
                  description: 'Choose from zoom, pan, parallax, and cinematic effects',
                },
                {
                  icon: <Image className="w-5 h-5" />,
                  title: 'High Quality Output',
                  description: '4K resolution with smooth 60fps animation',
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
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

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Try Image Animation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                View Examples
              </button>
            </div>
          </div>
        </div>
        <div className='w-full mt-10'>
          <video
                preload="auto"
                autoPlay
                loop
                playsInline
                muted
                className="rounded-[48px] object-cover w-full"
                width="813"
                height="588"
                src={photToLife}
              ></video>
        </div>
      </div>
    </section>
  );
};

export default ImageToVideoSection;