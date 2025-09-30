import React, { useState, useEffect } from "react";
import { Menu, X, Play, Sparkles } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Learn", href: "#learn" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? ""
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-lg px-4 py-2 shadow-md' : ''}`}>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Pixaura AI
              </span>
            </div>
          </a>


          {/* CTA Buttons */}
          <div className={`hidden lg:flex items-center space-x-4 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-full px-4 py-2 shadow-md' : ''}`}>
            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center space-x-8 mr-6 ${isScrolled ? 'ml-2' : ''}`}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium ${isScrolled ? '' : 'text-white'}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg border border-gray-200/50 rounded-full px-4 py-2 shadow-md' : ''}`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-200 font-medium">
                  Get Started Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
