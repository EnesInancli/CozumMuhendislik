/*
  # Create Gallery Table and Fix All Permissions

  1. New Tables
    - `gallery_images` - Gallery management table
  
  2. Permissions Fix
    - Allow authenticated users to INSERT, UPDATE, DELETE
    - Keep public read-only access for active items
    - This fixes admin panel write access issues

  3. Security
    - RLS enabled on all tables
    - Anonymous users: read-only active items
    - Authenticated users: full CRUD access
*/

-- Create gallery_images table if not exists
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  title_en text NOT NULL,
  description text NOT NULL,
  description_en text NOT NULL,
  category text NOT NULL,
  category_en text NOT NULL,
  image_path text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_gallery_images_order ON gallery_images(display_order);
CREATE INDEX IF NOT EXISTS idx_gallery_images_active ON gallery_images(is_active);

-- Gallery images policies
DROP POLICY IF EXISTS "Anyone can view active gallery images" ON gallery_images;
DROP POLICY IF EXISTS "Authenticated users can insert gallery images" ON gallery_images;
DROP POLICY IF EXISTS "Authenticated users can update gallery images" ON gallery_images;
DROP POLICY IF EXISTS "Authenticated users can delete gallery images" ON gallery_images;

CREATE POLICY "Anyone can view active gallery images"
  ON gallery_images
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert gallery images"
  ON gallery_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery images"
  ON gallery_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery images"
  ON gallery_images
  FOR DELETE
  TO authenticated
  USING (true);

-- Page images policies
DROP POLICY IF EXISTS "Public can view active page images" ON page_images;
DROP POLICY IF EXISTS "Anyone can view active page images" ON page_images;
DROP POLICY IF EXISTS "Authenticated users can insert page images" ON page_images;
DROP POLICY IF EXISTS "Authenticated users can update page images" ON page_images;
DROP POLICY IF EXISTS "Authenticated users can delete page images" ON page_images;

CREATE POLICY "Anyone can view active page images"
  ON page_images
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert page images"
  ON page_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update page images"
  ON page_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete page images"
  ON page_images
  FOR DELETE
  TO authenticated
  USING (true);

-- Products policies
DROP POLICY IF EXISTS "Public can view active products" ON products;
DROP POLICY IF EXISTS "Anyone can view active products" ON products;
DROP POLICY IF EXISTS "Authenticated users can insert products" ON products;
DROP POLICY IF EXISTS "Authenticated users can update products" ON products;
DROP POLICY IF EXISTS "Authenticated users can delete products" ON products;

CREATE POLICY "Anyone can view active products"
  ON products
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);
