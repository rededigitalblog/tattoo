import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Palette, Brush, Eye, Zap, RefreshCw, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      title: "Tatuagens Artísticas",
      description: "Criações únicas e personalizadas que expressam sua individualidade com técnicas artísticas refinadas."
    },
    {
      icon: <Brush className="w-8 h-8 text-orange-500" />,
      title: "Tatuagens Tradicionais",
      description: "Estilo clássico americano com traços marcantes, cores vibrantes e designs atemporais."
    },
    {
      icon: <Eye className="w-8 h-8 text-orange-500" />,
      title: "Realismo",
      description: "Tatuagens hiper-realistas com detalhes impressionantes que parecem fotografias na pele."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Blackwork",
      description: "Arte em preto sólido com contrastes marcantes, geometria e designs impactantes."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-orange-500" />,
      title: "Cover-up",
      description: "Transformação de tatuagens antigas em novas obras de arte com técnicas especializadas."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: "Consultoria",
      description: "Orientação completa sobre design, posicionamento e cuidados para sua futura tatuagem."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 transform hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;