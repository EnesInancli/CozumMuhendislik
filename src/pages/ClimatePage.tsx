import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Snowflake, Thermometer, Zap, Shield, Dot } from 'lucide-react';

interface Product {
  id: string;
  category_tr: string;
  category_en: string;
  category_description_tr: string;
  category_description_en: string;
  name: string;
  capacity?: string;
  features_tr: string[];
  features_en: string[];
  image_path: string;
  display_order: number;
}

interface CategoryData {
  category: string;
  description: string;
  products: {
    name: string;
    capacity?: string;
    features: string[];
    image: string;
  }[];
}

export const ClimatePage: React.FC = () => {
  const { language } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('product_type', 'climate')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const groupByCategory = (): CategoryData[] => {
    const categoryMap = new Map<string, CategoryData>();

    products.forEach((product) => {
      const categoryKey = language === 'tr' ? product.category_tr : product.category_en;

      if (!categoryMap.has(categoryKey)) {
        categoryMap.set(categoryKey, {
          category: categoryKey,
          description: language === 'tr' ? product.category_description_tr : product.category_description_en,
          products: []
        });
      }

      categoryMap.get(categoryKey)?.products.push({
        name: product.name,
        capacity: product.capacity,
        features: language === 'tr' ? product.features_tr : product.features_en,
        image: product.image_path
      });
    });

    return Array.from(categoryMap.values());
  };

  const content = {
    tr: {
      title: 'Klimalar',
      subtitle: 'Toshiba ve Alarko markaları ile enerji verimli, teknolojik klima çözümleri. Split ve multi sistemler ile her ihtiyaca uygun seçenekler.',
      features: [
        { icon: Zap, title: 'Enerji Tasarrufu', description: 'İnverter teknolojisi ile %60\'a varan enerji tasarrufu' },
        { icon: Snowflake, title: 'Hızlı Soğutma', description: 'Turbo mod ile 30 saniyede hızlı soğutma' },
        { icon: Shield, title: 'Güvenilir Marka', description: 'Toshiba ve Alarko güvencesi ile kaliteli hizmet' },
        { icon: Thermometer, title: 'Akıllı Kontrol', description: 'WiFi ile uzaktan kontrol ve programlama' }
      ],
      ctaTitle: 'Size Uygun Klima Çözümünü Bulalım',
      ctaDescription: 'Uzman ekibimiz en uygun klimayı seçmenizde yardımcı olur.',
      ctaButton: 'Hemen İletişime Geçin'
    },
    en: {
      title: 'Air Conditioners',
      subtitle: 'Energy efficient, technological air conditioning solutions with Toshiba and Alarko brands. Options suitable for every need with split and multi systems.',
      features: [
        { icon: Zap, title: 'Energy Saving', description: 'Up to 60% energy saving with inverter technology' },
        { icon: Snowflake, title: 'Fast Cooling', description: 'Fast cooling in 30 seconds with turbo mode' },
        { icon: Shield, title: 'Reliable Brand', description: 'Quality service with Toshiba and Alarko guarantee' },
        { icon: Thermometer, title: 'Smart Control', description: 'Remote control and programming via WiFi' }
      ],
      ctaTitle: 'Let\'s Find the Right AC Solution for You',
      ctaDescription: 'Our expert team will help you choose the most suitable air conditioner.',
      ctaButton: 'Contact Us Now'
    }
  };

  const data = content[language];
  const categories = groupByCategory();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              {data.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {categories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.category}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.products.map((product, productIndex) => (
                <motion.div
                  key={productIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: productIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                      {product.capacity && (
                        <p className="text-lg text-blue-300">{product.capacity}</p>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Dot className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{data.ctaTitle}</h2>
            <p className="text-xl mb-8 text-blue-100">{data.ctaDescription}</p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {data.ctaButton}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
