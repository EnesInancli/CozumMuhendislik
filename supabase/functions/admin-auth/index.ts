import { createClient } from 'npm:@supabase/supabase-js@2.78.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface LoginRequest {
  username: string;
  password: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { username, password }: LoginRequest = await req.json();

    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    console.log('Login attempt from IP:', clientIP, 'Username:', username);

    const { data: adminUser, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .eq('is_active', true)
      .maybeSingle();

    if (error || !adminUser) {
      console.log('User not found or error:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Geçersiz kullanıcı adı veya şifre' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (adminUser.allowed_ip !== '0.0.0.0' && adminUser.allowed_ip !== clientIP) {
      console.log('IP mismatch. Expected:', adminUser.allowed_ip, 'Got:', clientIP);
      return new Response(
        JSON.stringify({ success: false, error: 'Bu IP adresinden giriş yapma yetkiniz yok' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (password !== 'AdminPass123!') {
      console.log('Invalid password');
      return new Response(
        JSON.stringify({ success: false, error: 'Geçersiz kullanıcı adı veya şifre' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    await supabase
      .from('admin_users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', adminUser.id);

    const token = btoa(`${username}:${Date.now()}:${Math.random()}`);

    console.log('Login successful for:', username);

    return new Response(
      JSON.stringify({ 
        success: true, 
        token,
        username: adminUser.username 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Sunucu hatası' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});