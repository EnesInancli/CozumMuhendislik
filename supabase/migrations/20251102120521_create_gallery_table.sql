/*
  # Galeri Tablosu Oluşturma

  ## Açıklama
  Web sitesindeki tüm galeri fotoğraflarını ve açıklamalarını saklamak için tablo.

  ## Yeni Tablolar
  - `gallery_images`
    - `id` (uuid, primary key, otomatik)
    - `title` (text, başlık)
    - `title_en` (text, İngilizce başlık)
    - `description` (text, açıklama)
    - `description_en` (text, İngilizce açıklama)
    - `category` (text, kategori)
    - `category_en` (text, İngilizce kategori)
    - `image_path` (text, resim yolu)
    - `display_order` (integer, sıralama)
    - `is_active` (boolean, aktif/pasif)
    - `created_at` (timestamp)
    - `updated_at` (timestamp)

  ## Güvenlik
  - RLS aktif
  - Herkes okuyabilir (public read)
  - Sadece admin güncelleyebilir (gelecekte eklenebilir)
*/

CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_en text NOT NULL,
  description text,
  description_en text,
  category text NOT NULL,
  category_en text NOT NULL,
  image_path text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLS aktif
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir (public read)
CREATE POLICY "Anyone can view active gallery images"
  ON gallery_images
  FOR SELECT
  TO public
  USING (is_active = true);

-- Index ekleyelim (performans için)
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_images(category);
CREATE INDEX IF NOT EXISTS idx_gallery_order ON gallery_images(display_order);
CREATE INDEX IF NOT EXISTS idx_gallery_active ON gallery_images(is_active);

-- Örnek veriler ekleyelim
INSERT INTO gallery_images (title, title_en, description, description_en, category, category_en, image_path, display_order) VALUES
('Olimpik Havuz', 'Olympic Pool', 'Bodrum Marmara Koleji Yarı Olimpik Havuz', 'Bodrum Marmara College Semi-Olympic Pool', 'Havuz', 'Pool', 'images/havuz.jpeg', 1),
('Havuz Kazan Dairesi', 'Pool Boiler Room', 'Maltepe Üniversitesi Havuz Makine Dairesi', 'Maltepe University Pool Machine Room', 'Mekanik Tesisat', 'Mechanical Installation', 'images/kazandairesi.jpeg', 2),
('Binamız', 'Our Building', 'Bodrum Çözüm Mühendislik Ofis Binası', 'Bodrum Solution Engineering Office Building', 'Ofis', 'Office', 'images/bina.webp', 3);
