import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface PageImage {
  id: string;
  page_key: string;
  image_path: string;
  image_type: string;
  alt_text_tr: string;
  alt_text_en: string;
}

export const usePageImages = (pageKey: string) => {
  const [images, setImages] = useState<PageImage[]>([]);
  const [heroImage, setHeroImage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadImages();
  }, [pageKey]);

  const loadImages = async () => {
    const { data, error } = await supabase
      .from('page_images')
      .select('*')
      .eq('page_key', pageKey)
      .eq('is_active', true);

    if (!error && data) {
      setImages(data);
      const hero = data.find(img => img.image_type === 'hero');
      if (hero) {
        setHeroImage(hero.image_path);
      }
    }
    setLoading(false);
  };

  const getImageByType = (type: string): string => {
    const image = images.find(img => img.image_type === type);
    return image?.image_path || '';
  };

  return { images, heroImage, getImageByType, loading };
};
