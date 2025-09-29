import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Twitter, Facebook, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="glass-container border-t border-gray-300/20 dark:border-gray-800/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                AIVideoGen
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Create stunning AI-generated videos with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/learnings" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Learnings</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300/20 dark:border-gray-800/20 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>&copy; 2025 AIVideoGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};