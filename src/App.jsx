import './App.css'
import Header from './Components/Header.jsx';  
import HomeSection from './sections/Home.section.jsx';
import AboutMeSection from './sections/AboutMe.section.jsx';
import SkillSection from './sections/Skill.section.jsx';
import ProjectSection from './sections/Project.section.jsx';
import ConnectSection from './sections/Connect.section.jsx';
import FooterSection from './sections/Footer.section.jsx';

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

      {/* Projects section */}
      <ProjectSection />

      {/* Connect section */}
      <ConnectSection />

      {/* Footer section */}
      <FooterSection />
    </>
  );
}

export default App;


