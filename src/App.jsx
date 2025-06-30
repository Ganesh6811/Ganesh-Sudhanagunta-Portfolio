import { lazy, Suspense } from 'react';

import './App.css'
import Header from './Components/Header.jsx';
import HomeSection from './sections/Home.section.jsx';
import AboutMeSection from './sections/AboutMe.section.jsx';
import SkillSection from './sections/Skill.section.jsx';

const ProjectSection = lazy(() => import('./sections/Project.section.jsx'));
const ConnectSection = lazy(() => import('./sections/Connect.section.jsx'));
const FooterSection = lazy(() => import('./sections/Footer.section.jsx'));


function App() {

  return (
    <>
      <nav>
        <Header />
      </nav>

      {/* Home section */}
      <HomeSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Skill section */}
      <SkillSection />

      <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-[250px] w-full bg-[#111827] text-white">
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute w-full h-full border-4 border-cyan-400 rounded-full animate-spin border-b-transparent animate-delay-200"></div>
        </div>
        <p className="mt-4 text-sm text-gray-400">Loading next section...</p>
      </div>}>
        {/* Projects section */}
        <ProjectSection />

        {/* Connect section */}
        <ConnectSection />

        {/* Footer section */}
        <FooterSection />
      </Suspense>
    </>
  );
}

export default App;


