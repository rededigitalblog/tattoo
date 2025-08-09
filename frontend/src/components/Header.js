import React from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-500">
              Black City Tattoo
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("location")}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;