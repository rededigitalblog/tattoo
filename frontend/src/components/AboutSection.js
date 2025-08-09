import React from "react";
import { Shield, Award, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Excelência Artística",
      description: "Compromisso com a mais alta qualidade em cada trabalho realizado."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Segurança Total",
      description: "Equipamentos esterilizados e protocolos rigorosos de higiene."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Equipe Experiente",
      description: "Profissionais qualificados com anos de experiência no ramo."
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-500" />,
      title: "Tintas Premium",
      description: "Utilizamos apenas tintas de qualidade internacional certificada."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sobre a Black City Tattoo Classic
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Na <span className="text-orange-500 font-semibold">Black City Tattoo Classic</span>, 
              transformamos ideias em arte permanente sobre a pele. Nosso estúdio é um espaço dedicado 
              à excelência artística e à segurança, onde cada cliente recebe atenção personalizada 
              e cuidado profissional.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Localizado no coração da Vila Tibério em Ribeirão Preto, nosso estúdio combina 
              tradição e inovação, oferecendo um ambiente acolhedor e profissional para 
              realizar seus sonhos em forma de tatuagem.
            </p>

            <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-6 rounded-lg border border-orange-500/20">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-orange-500 font-semibold">"Venha nos conhecer"</span> - 
                Estamos sempre prontos para recebê-lo em nosso estúdio na 
                R. Padre Feijó, 450, onde você poderá conhecer nosso trabalho, 
                conversar com nossa equipe e planejar sua próxima tatuagem em um 
                ambiente seguro e inspirador.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;