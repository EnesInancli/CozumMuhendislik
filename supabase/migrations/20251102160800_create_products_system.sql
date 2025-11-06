/*
  # Products Management System

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `product_type` (text) - 'climate' or 'heat_pump'
      - `category_tr` (text) - Category name in Turkish
      - `category_en` (text) - Category name in English
      - `category_description_tr` (text) - Category description in Turkish
      - `category_description_en` (text) - Category description in English
      - `name` (text) - Product name (same for both languages)
      - `capacity` (text) - Product capacity (optional)
      - `features_tr` (text[]) - Array of features in Turkish
      - `features_en` (text[]) - Array of features in English
      - `image_path` (text) - Path to product image
      - `display_order` (int) - Order for display
      - `is_active` (boolean) - Whether product is active
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `products` table
    - Public read access for active products
    - Admin-only write access
  
  3. Initial Data
    - Insert existing climate products
    - Insert existing heat pump products
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_type text NOT NULL CHECK (product_type IN ('climate', 'heat_pump')),
  category_tr text NOT NULL,
  category_en text NOT NULL,
  category_description_tr text,
  category_description_en text,
  name text NOT NULL,
  capacity text,
  features_tr text[] NOT NULL DEFAULT '{}',
  features_en text[] NOT NULL DEFAULT '{}',
  image_path text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public can read active products
CREATE POLICY "Public can view active products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_products_type ON products(product_type);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_products_order ON products(display_order);

-- Insert climate products (Toshiba Split Klimalar)
INSERT INTO products (product_type, category_tr, category_en, category_description_tr, category_description_en, name, features_tr, features_en, image_path, display_order) VALUES
(
  'climate',
  'Toshiba Split Klimalar',
  'Toshiba Split Air Conditioners',
  'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
  'Split air conditioning systems offering superior performance and energy efficiency with Japanese technology.',
  'TOSHIBA SEIYA',
  ARRAY['SEIYA''nın konfor ve performans optimizasyonu onu rakiplerine göre eşsiz bir ürün haline getirmektedir. Tüm ürün gamı A++ soğutma ve A+ ısıtma enerji sınıfındadır ve bu çok düşük enerji tüketimiyle optimum konfor anlamına gelmektedir.'],
  ARRAY['SEIYA''s comfort and performance optimization makes it a unique product compared to its competitors. The entire product range is A++ cooling and A+ heating energy class, meaning optimum comfort with very low energy consumption.'],
  'images/seiya.webp',
  1
),
(
  'climate',
  'Toshiba Split Klimalar',
  'Toshiba Split Air Conditioners',
  'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
  'Split air conditioning systems offering superior performance and energy efficiency with Japanese technology.',
  'TOSHİBA SHORAI EDGE',
  ARRAY['Ultra Saf hava filtresi ve tasarım uzaktan kumandasıyla en yüksek enerji verimliliği. 3D ve Careflow hava dağıtımı, hava akışını odada cereyansız hale getirir. 1:1 tek dış üniteyle veya 2 ila 5 odalı çoklu dış ünitede diğer iç ünitelerle birlikte kullanılabilir.'],
  ARRAY['Maximum energy efficiency with Ultra Pure air filter and designer remote control. 3D and Careflow air distribution makes the air flow in the room draft-free. Can be used with 1:1 single outdoor unit or with other indoor units in 2 to 5 room multi outdoor unit.'],
  'images/shorai.webp',
  2
),
(
  'climate',
  'Toshiba Split Klimalar',
  'Toshiba Split Air Conditioners',
  'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
  'Split air conditioning systems offering superior performance and energy efficiency with Japanese technology.',
  'TOSHİBA HAORI',
  ARRAY['A+++ enerji sınıfı ile yüksek enerji tasarrufu, dahili enerji tüketimi modülü ile sürekli izleme, standart wi-fi kiti ile istediğiniz her yerden kontrol imkanı, şık ve göz alıcı kumaş kaplama özelliği ile tüm ihtiyaçlarınızı karşılayan klimanız HAORI...'],
  ARRAY['High energy savings with A+++ energy class, continuous monitoring with built-in energy consumption module, control from anywhere with standard wi-fi kit, HAORI is your air conditioner that meets all your needs with its stylish and eye-catching fabric cover feature...'],
  'images/haori.jpg',
  3
),
(
  'climate',
  'Toshiba Split Klimalar',
  'Toshiba Split Air Conditioners',
  'Japon teknolojisi ile üstün performans ve enerji verimliliği sunan split klima sistemleri.',
  'Split air conditioning systems offering superior performance and energy efficiency with Japanese technology.',
  'TOSHİBA DAISEIKAI 10',
  ARRAY['DAISAIKAI 10, yenilikçi tasarım, yüksek verimlilik ve maksimum konforun simgesidir. Sadece soğutma veya ısıtma için bile fazlasıyla iyidir. Oda havası en üst düzeyde taşınır ve temizlenir. 1:1 tek dış üniteyle veya 2 ila 5 odalı çoklu dış ünitede diğer iç ünitelerle birlikte kullanılabilir.'],
  ARRAY['DAISAIKAI 10 is a symbol of innovative design, high efficiency and maximum comfort. It is more than sufficient even for cooling or heating alone. Room air is transported and cleaned at the highest level. Can be used with 1:1 single outdoor unit or with other indoor units in 2 to 5 room multi outdoor unit.'],
  'images/daiseikai.webp',
  4
);

-- Insert climate products (Multi Klimalar)
INSERT INTO products (product_type, category_tr, category_en, category_description_tr, category_description_en, name, capacity, features_tr, features_en, image_path, display_order) VALUES
(
  'climate',
  'Toshiba Multi Klimalar',
  'Toshiba Multi Air Conditioners',
  'Tek dış ünite ile çoklu iç ünite kontrolü sağlayan, enerji verimli multi split sistemler.',
  'Energy efficient multi split systems providing multiple indoor unit control with single outdoor unit.',
  'TOSHIBA Multi Split 2+1',
  '18000 BTU',
  ARRAY['Tek dış ünite', 'Çoklu iç ünite', 'Bireysel kontrol', 'Enerji tasarrufu'],
  ARRAY['Single outdoor unit', 'Multiple indoor units', 'Individual control', 'Energy saving'],
  'images/Klimalar.jpg',
  5
),
(
  'climate',
  'Toshiba Multi Klimalar',
  'Toshiba Multi Air Conditioners',
  'Tek dış ünite ile çoklu iç ünite kontrolü sağlayan, enerji verimli multi split sistemler.',
  'Energy efficient multi split systems providing multiple indoor unit control with single outdoor unit.',
  'TOSHIBA Multi Split 3+1',
  '24000 BTU',
  ARRAY['3 iç ünite', 'Akıllı kontrol', 'Sessiz çalışma', 'Kompakt tasarım'],
  ARRAY['3 indoor units', 'Smart control', 'Silent operation', 'Compact design'],
  'images/Klimalar.jpg',
  6
);

-- Insert heat pump products
INSERT INTO products (product_type, category_tr, category_en, category_description_tr, category_description_en, name, features_tr, features_en, image_path, display_order) VALUES
(
  'heat_pump',
  'Toshiba Estia Split Isı Pompası',
  'Toshiba Estia Split Heat Pump',
  'Japon teknolojisi ile üstün performans sunan, çevre dostu R32 gazlı split tip ısı pompası sistemleri.',
  'Split type heat pump systems with eco-friendly R32 gas offering superior performance with Japanese technology.',
  'TOSHIBA Estia 6 kW',
  ARRAY['R32 Çevre Dostu Gaz', 'A+++ Enerji Sınıfı', '-25°C''ye Kadar Çalışma', 'Akıllı Defrost'],
  ARRAY['R32 Eco-Friendly Gas', 'A+++ Energy Class', 'Operation up to -25°C', 'Smart Defrost'],
  'images/IsiPompalari.jpg',
  1
),
(
  'heat_pump',
  'Toshiba Estia Split Isı Pompası',
  'Toshiba Estia Split Heat Pump',
  'Japon teknolojisi ile üstün performans sunan, çevre dostu R32 gazlı split tip ısı pompası sistemleri.',
  'Split type heat pump systems with eco-friendly R32 gas offering superior performance with Japanese technology.',
  'TOSHIBA Estia 8 kW',
  ARRAY['Yüksek COP Değeri', 'Sessiz Çalışma', 'Uzaktan Kontrol', 'Kompakt Tasarım'],
  ARRAY['High COP Value', 'Silent Operation', 'Remote Control', 'Compact Design'],
  'images/IsiPompalari.jpg',
  2
);
