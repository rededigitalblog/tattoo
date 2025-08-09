import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/alvesroberto", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/blackcitytattoo", "_blank");
  };

  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">
              Black City Tattoo Classic
            </h3>
            <p className="text-gray-400 text-sm">
              Arte e excelência em cada trabalho
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleInstagramClick}
              className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white" />
            </button>
            <button
              onClick={handleFacebookClick}
              className="bg-gray-800 hover:bg-orange-500 p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Black City Tattoo Classic
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Todos os direitos reservados
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            R. Padre Feijó, 450 - Vila Tibério - Ribeirão Preto/SP - CEP: 14050-360
          </p>
          <p className="text-gray-500 text-sm mt-1">
            WhatsApp: (16) 99204-5472
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;