import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import TextToVideoSection from './components/TextToVideoSection';
import ImageToVideoSection from './components/ImageToVideoSection';
import TranslatorSection from './components/TranslatorSection';
import FreeTrialSection from './components/FreeTrialSection';
import CustomerStories from './components/CustomerStories';
import FeaturedTeams from './components/FeaturedTeams';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import About from './components/About';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <TextToVideoSection />
        <ImageToVideoSection />
        <TranslatorSection />
        <FreeTrialSection />
        <CustomerStories />
        <FeaturedTeams />
        <Pricing />
        <About />
        <Learning />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;