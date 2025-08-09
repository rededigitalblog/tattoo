import React from "react";
import { Button } from "./ui/button";
import { MessageCircle, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5516992045472?text=Olá!%20Gostaria%20de%20agendar%20uma%20tatuagem%20na%20Black%20City%20Tattoo%20Classic", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+5516992045472");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/alvesroberto", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Agende sua Tatuagem
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Entre em contato conosco e transforme suas ideias em arte. 
            Estamos prontos para criar sua próxima obra-prima!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white py-6 px-8 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-green-600/25"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            WhatsApp
          </Button>

          <Button
            onClick={handlePhoneClick}
            className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-8 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-600/25"
          >
            <Phone className="w-6 h-6 mr-3" />
            Ligar
          </Button>

          <Button
            onClick={handleInstagramClick}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 px-8 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-600/25"
          >
            <Instagram className="w-6 h-6 mr-3" />
            Instagram
          </Button>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 to-transparent rounded-lg border border-orange-500/20">
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="text-orange-500 font-semibold">Dica:</span> 
            Para um atendimento mais rápido, entre em contato via WhatsApp. 
            Teremos prazer em esclarecer suas dúvidas e agendar sua consulta!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;