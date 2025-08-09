import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Localização
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    R. Padre Feijó, 450<br />
                    Vila Tibério - Ribeirão Preto/SP<br />
                    CEP: 14050-360
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Contato
                  </h3>
                  <p className="text-gray-300">
                    WhatsApp: (16) 99204-5472
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between items-center">
                      <span>Segunda a Sexta:</span>
                      <span className="text-orange-500 font-medium">09:00 às 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sábado:</span>
                      <span className="text-orange-500 font-medium">09:00 às 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Domingo:</span>
                      <span className="text-red-400 font-medium">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="h-96 lg:h-full min-h-[400px]">
            <div className="h-full bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.109826842524!2d-47.79854768505184!3d-21.17189308589243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bea8c6e4c6f1%3A0x1234567890abcdef!2sR.%20Padre%20Feij%C3%B3%2C%20450%20-%20Vila%20Tib%C3%A9rio%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014050-360!5e0!3m2!1spt-BR!2sbr!4v1641234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Black City Tattoo Classic"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;