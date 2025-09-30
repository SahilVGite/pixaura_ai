import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does AI video generation work?',
      answer: 'Our AI analyzes your text input and creates professional videos using advanced machine learning models. The system selects appropriate AI avatars, generates natural speech, and synchronizes lip movements to create realistic video content in minutes.'
    },
    {
      question: 'What video quality can I expect?',
      answer: 'All videos are generated in high definition (1080p) with professional-grade quality. Enterprise plans include 4K resolution options. Our AI ensures consistent lighting, clear audio, and smooth animations throughout the video.'
    },
    {
      question: 'How many languages are supported?',
      answer: 'We support over 150 languages with native pronunciation and cultural nuances. Our AI can translate existing videos while preserving your original voice characteristics and maintaining perfect lip-sync accuracy.'
    },
    {
      question: 'Can I customize the AI avatars?',
      answer: 'Yes! Choose from 100+ diverse AI presenters or create custom avatars. You can adjust appearance, clothing, background settings, and speaking style to match your brand identity and content requirements.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely! Our free trial includes 5 video generations, access to all AI avatars, and basic features. No credit card required. You can upgrade to a paid plan anytime to unlock additional features and higher limits.'
    },
    {
      question: 'How long does it take to generate a video?',
      answer: 'Most videos are generated within 2-5 minutes, depending on length and complexity. Longer videos or those with special effects may take up to 10 minutes. You\'ll receive real-time updates on processing status.'
    },
    {
      question: 'Can I use the videos commercially?',
      answer: 'Yes, all generated videos come with full commercial usage rights. You can use them for marketing, advertising, education, or any business purpose. There are no additional licensing fees or restrictions.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'Videos are exported in MP4 format (H.264 encoding) for maximum compatibility. We also support other formats like MOV, AVI, and WebM upon request. Audio is exported as high-quality AAC.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-40 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Got</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our AI video generation platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-2xl transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-blue-600 to-purple-600 mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;