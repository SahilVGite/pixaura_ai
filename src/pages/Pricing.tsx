import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 19 : 29,
      originalPrice: isAnnual ? 29 : null,
      description: "Perfect for individuals and small projects",
      features: [
        "10 videos per month",
        "720p HD quality",
        "5 AI avatars",
        "Basic templates",
        "Email support",
        "Commercial license"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: isAnnual ? 49 : 79,
      originalPrice: isAnnual ? 79 : null,
      description: "Ideal for businesses and content creators",
      features: [
        "50 videos per month",
        "1080p Full HD quality",
        "20 AI avatars",
        "Premium templates",
        "Priority support",
        "Custom branding",
        "API access",
        "Team collaboration"
      ],
      popular: true,
      color: "from-purple-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: isAnnual ? 199 : 299,
      originalPrice: isAnnual ? 299 : null,
      description: "For large teams and organizations",
      features: [
        "Unlimited videos",
        "4K Ultra HD quality",
        "Unlimited AI avatars",
        "Custom templates",
        "Dedicated support",
        "White-label solution",
        "Advanced API",
        "SSO integration",
        "Custom integrations"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. All plans include our core AI video generation features.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>Monthly</span>
            <motion.button
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 glass-button ${
                isAnnual ? 'bg-gradient-to-r from-purple-500 to-cyan-500' : 'bg-gray-400 dark:bg-gray-600'
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300"
                animate={{ x: isAnnual ? 36 : 4 }}
              />
            </motion.button>
            <span className={`ml-3 ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
              Annual
              <span className="ml-1 px-2 py-1 bg-green-500 text-green-900 text-xs rounded-full">
                Save 30%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 rounded-2xl glass-card border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105' 
                  : 'border-gray-400/30 dark:border-gray-700/30 hover:border-gray-500/50 dark:hover:border-gray-600/50'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                
                <div className="flex items-center justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">/month</span>
                </div>
                
                {plan.originalPrice && (
                  <div className="text-sm text-gray-600 dark:text-gray-500">
                    <span className="line-through">${plan.originalPrice}</span>
                    <span className="ml-2 text-green-400">Save ${plan.originalPrice - plan.price}</span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 glass-button'
                    : 'glass-button text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-gray-700/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all plans. No questions asked."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, we offer a 7-day free trial for all plans. No credit card required."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 glass-card rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};