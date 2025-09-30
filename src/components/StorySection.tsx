import React from "react";
import { Wand2, Video, Users, Globe } from "lucide-react";

const StorySection: React.FC = () => {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Professional Quality",
      description:
        "Create broadcast-quality videos with studio-grade AI technology",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI Avatars",
      description:
        "Choose from 100+ diverse AI presenters or create custom avatars",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language",
      description:
        "Generate videos in 150+ languages with native pronunciation",
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "One-Click Magic",
      description: "Transform scripts into videos instantly with our AI engine",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Tell any story with the</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              all-in-one AI video maker
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From marketing campaigns to educational content, create professional
            videos that engage and convert your audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg hover:border-blue-200/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Video Preview */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl lg:rounded-3xl p-4">
                <div className="aspect-video bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
                  <div className="relative h-full bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>

                    {/* Mock Video Interface */}
                    <video
                      preload="auto"
                      autoPlay
                      loop
                      playsInline
                      muted
                      className="rounded-[48px] object-cover w-full"
                      src="https://dynamic.heygen.ai/www/Home%20-%20Page%20-%20Rebrand/avatar_iv.mp4?updatedAt=1757984236000"
                    ></video>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto">
                          <Video className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Wand2 className="w-4 h-4" />
                            <span>AI Processing...</span>
                          </div>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
