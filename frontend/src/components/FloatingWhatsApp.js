import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5516992045472?text=Olá!%20Gostaria%20de%20agendar%20uma%20tatuagem%20na%20Black%20City%20Tattoo%20Classic", 
      "_blank"
    );
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Menu */}
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 min-w-[280px] animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900">
                Black City Tattoo Classic
              </h3>
              <button
                onClick={toggleExpanded}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              Olá! 👋 Como podemos ajudá-lo?
            </p>
            
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Conversar no WhatsApp
              </button>
              
              <div className="text-xs text-gray-500 text-center">
                Resposta rápida garantida!
              </div>
            </div>

            {/* Bubble tail */}
            <div className="absolute bottom-[-8px] right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white"></div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={toggleExpanded}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-600/25 group relative"
          aria-label="Abrir WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            !
          </div>
        </button>

        {/* Quick Click for Desktop */}
        <button
          onClick={handleWhatsAppClick}
          className="hidden md:block absolute inset-0 bg-transparent rounded-full"
          aria-label="Abrir WhatsApp diretamente"
        />
      </div>

      {/* Mobile: Direct click overlay when not expanded */}
      {!isExpanded && (
        <div 
          className="fixed bottom-6 right-6 z-40 w-16 h-16 md:hidden"
          onClick={handleWhatsAppClick}
        />
      )}
    </>
  );
};

export default FloatingWhatsApp;