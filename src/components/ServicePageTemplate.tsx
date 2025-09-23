import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle} from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface System {
  name: string;
  description: string;
  features: string[];
  capacity?: string;
  applications?: string[];
}

interface Application {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  features: Feature[];
  mainContent: {
    title: string;
    description: string[];
    image: string;
    advantages: string[];
  };
  systems?: System[];
  applications: Application[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  gradientColors: string;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  subtitle,
  heroImage,
  features,
  mainContent,
  systems,
  applications,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  gradientColors
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-75 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-white mb-12 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title} Avantajları</h2>
            <p className="text-xl text-gray-600">Modern teknolojinin sunduğu üstün özellikler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{mainContent.title}</h3>
              {mainContent.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="space-y-3">
                {mainContent.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={mainContent.image}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      {systems && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistem Çeşitleri</h2>
              <p className="text-xl text-gray-600">İhtiyacınıza uygun çözümler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {systems.map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{system.name}</h3>
                  <p className="text-gray-600 mb-6">{system.description}</p>
                  
                  {system.capacity && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <p className="text-sm font-medium text-blue-800">Kapasite: {system.capacity}</p>
                    </div>
                  )}
                  
                  <div className="space-y-3 mb-6">
                    {system.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {system.applications && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Uygulama Alanları:</h4>
                      <div className="flex flex-wrap gap-2">
                        {system.applications.map((app, appIndex) => (
                          <span key={appIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications Section */}
      <section className={`${systems ? 'bg-white' : 'bg-gray-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Uygulama Alanları</h2>
            <p className="text-xl text-gray-600">{title} sistemlerinin kullanıldığı alanlar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <app.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`bg-gradient-to-r ${gradientColors} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            {ctaButtonText}
          </button>
        </div>
      </section>
    </div>
  );
};