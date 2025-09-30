import React from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out AI video generation',
      popular: false,
      features: [
        { name: '5 video generations per month', included: true },
        { name: 'Basic AI avatars (10 options)', included: true },
        { name: '720p video quality', included: true },
        { name: 'Watermarked exports', included: true },
        { name: 'Community support', included: true },
        { name: 'Custom avatars', included: false },
        { name: 'Premium voices', included: false },
        { name: '4K video quality', included: false },
        { name: 'API access', included: false }
      ],
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Ideal for creators and small businesses',
      popular: true,
      features: [
        { name: '100 video generations per month', included: true },
        { name: 'All AI avatars (100+ options)', included: true },
        { name: '1080p HD video quality', included: true },
        { name: 'No watermark', included: true },
        { name: 'Priority support', included: true },
        { name: 'Custom avatar creation (1)', included: true },
        { name: 'Premium voice library', included: true },
        { name: 'Video translation (10 languages)', included: true },
        { name: 'API access', included: false }
      ],
      cta: 'Start Pro Trial',
      highlight: true
    },
    {
      name: 'Business',
      price: '$99',
      period: 'per month',
      description: 'For teams and growing companies',
      popular: false,
      features: [
        { name: 'Unlimited video generations', included: true },
        { name: 'All AI avatars + custom avatars (5)', included: true },
        { name: '4K video quality', included: true },
        { name: 'No watermark', included: true },
        { name: 'Priority support + phone', included: true },
        { name: 'Brand kit integration', included: true },
        { name: 'Team collaboration tools', included: true },
        { name: 'Video translation (50+ languages)', included: true },
        { name: 'Basic API access', included: true }
      ],
      cta: 'Start Business Trial',
      highlight: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with custom needs',
      popular: false,
      features: [
        { name: 'Unlimited everything', included: true },
        { name: 'Unlimited custom avatars', included: true },
        { name: 'White-label solution', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: '24/7 premium support', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Full API access', included: true },
        { name: 'SLA guarantees', included: true }
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">Simple,</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transparent pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your video creation needs. 
            No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
              plan.highlight 
                ? 'border-blue-500 shadow-xl' 
                : 'border-gray-200 shadow-lg'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600 ml-1">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${
                      feature.included ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Questions about our plans?
          </p>
          <button className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
            <span>View detailed comparison</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;