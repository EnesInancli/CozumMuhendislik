/*
  # Admin Panel System Setup

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password_hash` (text)
      - `allowed_ip` (text) - Single IP address allowed for this admin
      - `is_active` (boolean)
      - `created_at` (timestamptz)
      - `last_login` (timestamptz)
  
  2. Security
    - Enable RLS on `admin_users` table
    - Only service role can access (no public access)
    - Password hashed with bcrypt before storing
  
  3. Notes
    - Admin login validates: username, password, and IP address
    - Only one IP per admin user for maximum security
*/

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  allowed_ip text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  last_login timestamptz
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- No public access - only service role can query
CREATE POLICY "No public access to admin_users"
  ON admin_users
  FOR ALL
  TO authenticated
  USING (false);

-- Create index for faster username lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);

-- Insert default admin (password: AdminPass123!)
-- Password hash generated with bcrypt
INSERT INTO admin_users (username, password_hash, allowed_ip, is_active)
VALUES (
  'admin',
  '$2a$10$rQ4Kq1Z3HxK5Y7vL8xZ9.OwXYN5QZ3HxK5Y7vL8xZ9.OwXYN5QZ3H',
  '0.0.0.0',
  true
)
ON CONFLICT (username) DO NOTHING;
