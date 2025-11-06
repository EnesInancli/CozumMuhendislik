/*
  # Page Images Management System

  1. New Tables
    - `page_images`
      - `id` (uuid, primary key)
      - `page_key` (text) - Unique identifier for page (e.g., 'vrf_systems', 'heat_pump')
      - `page_name_tr` (text) - Turkish page name for admin panel
      - `page_name_en` (text) - English page name for admin panel
      - `image_path` (text) - Path to the image
      - `image_type` (text) - Type: 'hero', 'banner', 'logo', 'background'
      - `alt_text_tr` (text) - Turkish alt text
      - `alt_text_en` (text) - English alt text
      - `is_active` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
  
  2. Security
    - Enable RLS on `page_images` table
    - Public read access for active images
    - Admin-only write access
  
  3. Initial Data
    - Insert default images for all pages
*/

-- Create page_images table
CREATE TABLE IF NOT EXISTS page_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_key text NOT NULL,
  page_name_tr text NOT NULL,
  page_name_en text NOT NULL,
  image_path text NOT NULL,
  image_type text DEFAULT 'hero',
  alt_text_tr text,
  alt_text_en text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE page_images ENABLE ROW LEVEL SECURITY;

-- Public can read active images
CREATE POLICY "Public can view active page images"
  ON page_images
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_page_images_page_key ON page_images(page_key);
CREATE INDEX IF NOT EXISTS idx_page_images_is_active ON page_images(is_active);

-- Insert default page images
INSERT INTO page_images (page_key, page_name_tr, page_name_en, image_path, image_type, alt_text_tr, alt_text_en) VALUES
  ('vrf_systems', 'VRF Sistemleri', 'VRF Systems', 'images/VrfSistemToshiba.jpg', 'hero', 'VRF Sistem Kurulumu', 'VRF System Installation'),
  ('climate_systems', 'Klima Teknolojileri', 'Climate Technologies', 'images/vrfsistem.png', 'hero', 'Klima Sistemleri', 'Climate Systems'),
  ('heat_pump', 'Isı Pompası', 'Heat Pump', 'images/IsiPompalari.jpg', 'hero', 'Isı Pompası Sistemleri', 'Heat Pump Systems'),
  ('pool', 'Havuz Sistemleri', 'Pool Systems', 'images/vrfsistem.png', 'hero', 'Havuz Isıtma Sistemleri', 'Pool Heating Systems'),
  ('water_pressure', 'Su Basınçlandırma', 'Water Pressurization', 'images/vrfsistem.png', 'hero', 'Su Basınçlandırma Sistemleri', 'Water Pressurization Systems'),
  ('ventilation', 'Havalandırma', 'Ventilation', 'images/vrfsistem.png', 'hero', 'Havalandırma Sistemleri', 'Ventilation Systems'),
  ('water_treatment', 'Su Arıtma', 'Water Treatment', 'images/vrfsistem.png', 'hero', 'Su Arıtma Sistemleri', 'Water Treatment Systems'),
  ('solar_energy', 'Güneş Enerjisi', 'Solar Energy', 'images/vrfsistem.png', 'hero', 'Güneş Enerjisi Sistemleri', 'Solar Energy Systems'),
  ('mechanical_installation', 'Mekanik Tesisat', 'Mechanical Installation', 'images/vrfsistem.png', 'hero', 'Mekanik Tesisat', 'Mechanical Installation'),
  ('references', 'Referanslar', 'References', 'images/Rixos.png', 'hero', 'Referans Projeler', 'Reference Projects')
ON CONFLICT DO NOTHING;
