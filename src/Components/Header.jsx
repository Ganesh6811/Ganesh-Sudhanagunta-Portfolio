import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Main Header */}
      <div className="fixed flex justify-between items-center mx-[5vw] rounded-3xl my-10 py-4 px-10 bg-white/10 backdrop-blur-[20px] w-[90vw] z-[100]">
        {/* Logo */}
        <div>
          <h1 className="text-[28px] font-bold text-[#cf59e6]">
            <span className="block md:hidden">GS</span>
            <span className="hidden md:block">Ganesh Sudhanagunta</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-20">
          <a className="hover:text-[#cf59e6] text-xl font-bold" href="#Home">Home</a>
          <a className="hover:text-[#cf59e6] text-xl font-bold" href="#AboutMe">About Me</a>
          <a className="hover:text-[#cf59e6] text-xl font-bold" href="#Skills">Skills</a>
          <a className="hover:text-[#cf59e6] text-xl font-bold" href="#Projects">Projects</a>
          <a className="hover:text-[#cf59e6] text-xl font-bold" href="#Contact">Contact</a>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="#cf59e6" /> : <Menu size={28} color="#cf59e6" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[90px] left-[5vw] w-[90vw] rounded-3xl bg-white/10 backdrop-blur-[20px] py-6 px-10 flex flex-col gap-6 z-[99] md:hidden">
          <a className="hover:text-[#cf59e6] text-lg font-bold border-none outline-none" href="#Home" onClick={toggleMenu}>Home</a>
          <a className="hover:text-[#cf59e6] text-lg font-bold border-none outline-none" href="#AboutMe" onClick={toggleMenu}>About Me</a>
          <a className="hover:text-[#cf59e6] text-lg font-bold border-none outline-none" href="#Skills" onClick={toggleMenu}>Skills</a>
          <a className="hover:text-[#cf59e6] text-lg font-bold border-none outline-none" href="#Projects" onClick={toggleMenu}>Projects</a>
          <a className="hover:text-[#cf59e6] text-lg font-bold border-none outline-none" href="#Contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Header;
