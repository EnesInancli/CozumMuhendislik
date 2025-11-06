import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Thermometer, Leaf, Zap, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    features: string[];
    image: string;
  }[];
}

export const HeatPumpProductsPage: React.FC = () => {
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
      .eq('product_type', 'heat_pump')
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
        features: language === 'tr' ? product.features_tr : product.features_en,
        image: product.image_path
      });
    });

    return Array.from(categoryMap.values());
  };

  const content = {
    tr: {
      title: 'Isı Pompaları',
      subtitle: 'Toshiba ve Alarko markaları ile yüksek verimli, çevre dostu ısı pompası çözümleri. Konut ve ticari projeler için uygun sistemler.',
      features: [
        { icon: Thermometer, title: 'Verimli Isıtma', description: 'Düşük sıcaklıklarda bile yüksek performans' },
        { icon: Leaf, title: 'Çevre Dostu', description: 'Düşük karbon emisyonu ile çevre koruma' },
        { icon: Zap, title: 'Enerji Tasarrufu', description: '%75\'e varan enerji tasarrufu' },
        { icon: Shield, title: 'Güvenilir Marka', description: 'Toshiba ve Alarko güvencesi' }
      ],
      ctaTitle: 'Çevre Dostu Isı Pompası ile Tasarruf Edin',
      ctaDescription: 'Uzman ekibimiz ile ücretsiz keşif hizmeti alın ve size en uygun ısı pompasını seçin.',
      ctaButton: 'Ücretsiz Keşif Talep Et'
    },
    en: {
      title: 'Heat Pumps',
      subtitle: 'High efficiency, eco-friendly heat pump solutions with Toshiba and Alarko brands. Suitable systems for residential and commercial projects.',
      features: [
        { icon: Thermometer, title: 'Efficient Heating', description: 'High performance even at low temperatures' },
        { icon: Leaf, title: 'Eco-Friendly', description: 'Environmental protection with low carbon emissions' },
        { icon: Zap, title: 'Energy Saving', description: 'Up to 75% energy savings' },
        { icon: Shield, title: 'Reliable Brand', description: 'Toshiba and Alarko guarantee' }
      ],
      ctaTitle: 'Save with Eco-Friendly Heat Pump',
      ctaDescription: 'Get a free site survey with our expert team and choose the most suitable heat pump for you.',
      ctaButton: 'Request Free Survey'
    }
  };

  const data = content[language];
  const categories = groupByCategory();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-24">
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
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
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
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
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

      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{data.ctaTitle}</h2>
            <p className="text-xl mb-8 text-green-100">{data.ctaDescription}</p>
            <Link
              to="/iletisim"
              className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {data.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
