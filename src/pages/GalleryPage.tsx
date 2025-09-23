import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    src: 'images/havuz.jpeg',
    title: 'Olimpik Havuz',
    category: 'Havuz',
    description: 'Bodrum Marmara Koleji Yarı Olimpik Havuz'
  },
  {
    src: 'images/kazandairesi.jpeg',
    title: 'Havuz Kazan Dairesi',
    category: 'Mekanik Tesisat',
    description: 'Maltepe Üniversitesi Havuz Makine Dairesi'
  },
  {
    src: 'images/bina.webp',
    title: 'Binamız',
    category: 'Ofis',
    description: 'Maltepe Üniversitesi Havuz Makine Dairesi'
  }
];

const categories = ['Tümü', 'Ofis', 'VRF sistemleri', 'Klima Teknolojileri', 'Isı Pompası', 'Mekanik Tesisat', 'Havuz', 'Su Basınçlandırma ', 'Havalandırma', 'Su arıtma','GES'];

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('Tümü');

  const filteredImages = filter === 'Tümü' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6"
            >
              Galeri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Gerçekleştirdiğimiz projeler, çalışma süreçlerimiz ve profesyonel ekibimizden kareler.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-bold text-xl mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-2">{image.description}</p>
                    <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-6xl max-h-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X className="w-10 h-10" />
                </button>
                
                <img
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 text-white rounded-b-lg">
                  <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
                  <p className="text-gray-300 mb-2">{filteredImages[selectedImage].description}</p>
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-3"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Projenizi Gerçekleştirelim
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sizin de projeniz bu galeride yer alsın. Profesyonel çözümlerimiz için iletişime geçin.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            Projenizi Planlayın
          </button>
        </div>
      </section>
    </div>
  );
};