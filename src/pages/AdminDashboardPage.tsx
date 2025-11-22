import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/AdminContext';
import { supabase } from '../lib/supabase';
import { LogOut, Image as ImageIcon, Layout, Package, Trash2, Edit, Eye, EyeOff, Plus, Save, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  category: string;
  category_en: string;
  image_path: string;
  display_order: number;
  is_active: boolean;
}

interface PageImage {
  id: string;
  page_key: string;
  page_name_tr: string;
  page_name_en: string;
  image_path: string;
  image_type: string;
  alt_text_tr: string;
  alt_text_en: string;
  is_active: boolean;
}

interface Product {
  id: string;
  product_type: 'climate' | 'heat_pump';
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
  is_active: boolean;
}

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, username, logout, checkAuth } = useAdmin();
  const [activeTab, setActiveTab] = useState<'gallery' | 'pages' | 'products'>('gallery');
  const [productFilter, setProductFilter] = useState<'climate' | 'heat_pump'>('climate');

  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const [galleryFormData, setGalleryFormData] = useState({
    title: '', title_en: '', description: '', description_en: '',
    category: '', category_en: '', image_path: '', display_order: 0, is_active: true
  });

  const [pageFormData, setPageFormData] = useState({
    page_key: '', page_name_tr: '', page_name_en: '', image_path: '',
    image_type: 'hero', alt_text_tr: '', alt_text_en: '', is_active: true
  });

  const [productFormData, setProductFormData] = useState({
    product_type: 'climate' as 'climate' | 'heat_pump',
    category_tr: '', category_en: '', category_description_tr: '', category_description_en: '',
    name: '', capacity: '', features_tr: [''], features_en: [''],
    image_path: '', display_order: 0, is_active: true
  });

  useEffect(() => {
    if (!checkAuth()) {
      navigate('/admin-giris-x8k3m');
      return;
    }
    loadData();
  }, [activeTab, productFilter]);

  const loadData = () => {
    if (activeTab === 'gallery') loadGalleryImages();
    else if (activeTab === 'pages') loadPageImages();
    else if (activeTab === 'products') loadProducts();
  };

  const loadGalleryImages = async () => {
    setLoading(true);
    const { data } = await supabase.from('gallery_images').select('*').order('display_order');
    if (data) setGalleryImages(data);
    setLoading(false);
  };

  const loadPageImages = async () => {
    setLoading(true);
    const { data } = await supabase.from('page_images').select('*').order('page_name_tr');
    if (data) setPageImages(data);
    setLoading(false);
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data } = await supabase.from('products').select('*').eq('product_type', productFilter).order('display_order');
    if (data) setProducts(data);
    setLoading(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, formType: 'gallery' | 'page' | 'product') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Lütfen geçerli bir resim dosyası seçin!');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Dosya boyutu 5MB\'dan küçük olmalıdır!');
      return;
    }

    setUploadingImage(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `images/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64 = event.target?.result as string;
          const imagePath = `data:${file.type};base64,${base64.split(',')[1]}`;

          if (formType === 'gallery') {
            setGalleryFormData({ ...galleryFormData, image_path: imagePath });
          } else if (formType === 'page') {
            setPageFormData({ ...pageFormData, image_path: imagePath });
          } else if (formType === 'product') {
            setProductFormData({ ...productFormData, image_path: imagePath });
          }

          alert('Resim başarıyla yüklendi! (Base64 formatında)');
        };
        reader.readAsDataURL(file);
      } else {
        const { data: publicData } = supabase.storage.from('images').getPublicUrl(filePath);
        const imageUrl = publicData.publicUrl;

        if (formType === 'gallery') {
          setGalleryFormData({ ...galleryFormData, image_path: imageUrl });
        } else if (formType === 'page') {
          setPageFormData({ ...pageFormData, image_path: imageUrl });
        } else if (formType === 'product') {
          setProductFormData({ ...productFormData, image_path: imageUrl });
        }

        alert('Resim başarıyla yüklendi!');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Resim yüklenirken hata oluştu!');
    } finally {
      setUploadingImage(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/admin-giris-x8k3m');
  };

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from('gallery_images').update(galleryFormData).eq('id', editingId);
    } else {
      await supabase.from('gallery_images').insert([galleryFormData]);
    }
    alert('İşlem başarılı!');
    resetForm();
    loadGalleryImages();
  };

  const handlePageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await supabase.from('page_images').update(pageFormData).eq('id', editingId);
    } else {
      await supabase.from('page_images').insert([pageFormData]);
    }
    alert('İşlem başarılı!');
    resetForm();
    loadPageImages();
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanFeaturesTr = productFormData.features_tr.filter(f => f.trim() !== '');
    const cleanFeaturesEn = productFormData.features_en.filter(f => f.trim() !== '');

    const data = {
      ...productFormData,
      features_tr: cleanFeaturesTr,
      features_en: cleanFeaturesEn
    };

    if (editingId) {
      await supabase.from('products').update(data).eq('id', editingId);
    } else {
      await supabase.from('products').insert([data]);
    }
    alert('Ürün kaydedildi!');
    resetForm();
    loadProducts();
  };

  const handleEditGallery = (image: GalleryImage) => {
    setGalleryFormData({ ...image });
    setEditingId(image.id);
    setShowAddForm(true);
  };

  const handleEditPage = (image: PageImage) => {
    setPageFormData({ ...image });
    setEditingId(image.id);
    setShowAddForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setProductFormData({ ...product });
    setEditingId(product.id);
    setShowAddForm(true);
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;
    await supabase.from('gallery_images').delete().eq('id', id);
    loadGalleryImages();
  };

  const handleDeletePage = async (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;
    await supabase.from('page_images').delete().eq('id', id);
    loadPageImages();
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Bu ürünü silmek istediğinize emin misiniz?')) return;
    await supabase.from('products').delete().eq('id', id);
    loadProducts();
  };

  const toggleGalleryActive = async (id: string, current: boolean) => {
    await supabase.from('gallery_images').update({ is_active: !current }).eq('id', id);
    loadGalleryImages();
  };

  const togglePageActive = async (id: string, current: boolean) => {
    await supabase.from('page_images').update({ is_active: !current }).eq('id', id);
    loadPageImages();
  };

  const toggleProductActive = async (id: string, current: boolean) => {
    await supabase.from('products').update({ is_active: !current }).eq('id', id);
    loadProducts();
  };

  const resetForm = () => {
    setGalleryFormData({ title: '', title_en: '', description: '', description_en: '', category: '', category_en: '', image_path: '', display_order: 0, is_active: true });
    setPageFormData({ page_key: '', page_name_tr: '', page_name_en: '', image_path: '', image_type: 'hero', alt_text_tr: '', alt_text_en: '', is_active: true });
    setProductFormData({ product_type: productFilter, category_tr: '', category_en: '', category_description_tr: '', category_description_en: '', name: '', capacity: '', features_tr: [''], features_en: [''], image_path: '', display_order: 0, is_active: true });
    setEditingId(null);
    setShowAddForm(false);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-bold text-white">Yönetim Paneli</h1>
              <p className="text-sm text-gray-400">Hoş geldiniz, {username}</p>
            </div>
            <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
              <LogOut className="w-4 h-4" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8 flex-wrap">
          <button onClick={() => { setActiveTab('gallery'); setShowAddForm(false); resetForm(); }} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'gallery' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <ImageIcon className="w-5 h-5" />
            Galeri
          </button>
          <button onClick={() => { setActiveTab('pages'); setShowAddForm(false); resetForm(); }} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'pages' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Layout className="w-5 h-5" />
            Sayfa Görselleri
          </button>
          <button onClick={() => { setActiveTab('products'); setShowAddForm(false); resetForm(); }} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
            <Package className="w-5 h-5" />
            Ürünler
          </button>
        </div>

        {activeTab === 'products' && (
          <div className="flex gap-4 mb-6">
            <button onClick={() => { setProductFilter('climate'); loadProducts(); }} className={`px-4 py-2 rounded-lg font-medium transition-colors ${productFilter === 'climate' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
              Klimalar
            </button>
            <button onClick={() => { setProductFilter('heat_pump'); loadProducts(); }} className={`px-4 py-2 rounded-lg font-medium transition-colors ${productFilter === 'heat_pump' ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
              Isı Pompaları
            </button>
          </div>
        )}

        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {activeTab === 'gallery' && 'Galeri Yönetimi'}
              {activeTab === 'pages' && 'Sayfa Görselleri'}
              {activeTab === 'products' && `Ürünler - ${productFilter === 'climate' ? 'Klimalar' : 'Isı Pompaları'}`}
            </h2>
            <button onClick={() => setShowAddForm(!showAddForm)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {showAddForm ? 'İptal' : 'Yeni Ekle'}
            </button>
          </div>

          {showAddForm && activeTab === 'products' && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700 max-h-[600px] overflow-y-auto">
              <h3 className="text-lg font-semibold text-white mb-4">{editingId ? 'Ürün Düzenle' : 'Yeni Ürün Ekle'}</h3>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Kategori (TR)</label><input type="text" value={productFormData.category_tr} onChange={(e) => setProductFormData({ ...productFormData, category_tr: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Category (EN)</label><input type="text" value={productFormData.category_en} onChange={(e) => setProductFormData({ ...productFormData, category_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-300 mb-2">Kategori Açıklama (TR)</label><input type="text" value={productFormData.category_description_tr} onChange={(e) => setProductFormData({ ...productFormData, category_description_tr: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-300 mb-2">Category Description (EN)</label><input type="text" value={productFormData.category_description_en} onChange={(e) => setProductFormData({ ...productFormData, category_description_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Ürün Adı</label><input type="text" value={productFormData.name} onChange={(e) => setProductFormData({ ...productFormData, name: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Kapasite (opsiyonel)</label><input type="text" value={productFormData.capacity} onChange={(e) => setProductFormData({ ...productFormData, capacity: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="18000 BTU" /></div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Resim Yolu</label>
                    <div className="flex gap-2">
                      <input type="text" value={productFormData.image_path} onChange={(e) => setProductFormData({ ...productFormData, image_path: e.target.value })} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="images/urun.jpg" required />
                      <label className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-2 whitespace-nowrap">
                        <ImageIcon className="w-4 h-4" />
                        {uploadingImage ? 'Yükleniyor...' : 'Masaüstünden Seç'}
                        <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'product')} className="hidden" disabled={uploadingImage} />
                      </label>
                    </div>
                  </div>
                  <div><label className="block text-sm font-medium text-gray-300 mb-2">Sıralama</label><input type="number" value={productFormData.display_order} onChange={(e) => setProductFormData({ ...productFormData, display_order: parseInt(e.target.value) })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                </div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Özellikler (TR)</label>{productFormData.features_tr.map((feature, idx) => (<div key={idx} className="flex gap-2 mb-2"><input type="text" value={feature} onChange={(e) => { const newFeatures = [...productFormData.features_tr]; newFeatures[idx] = e.target.value; setProductFormData({ ...productFormData, features_tr: newFeatures }); }} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /><button type="button" onClick={() => { const newFeatures = productFormData.features_tr.filter((_, i) => i !== idx); setProductFormData({ ...productFormData, features_tr: newFeatures }); }} className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"><X className="w-4 h-4" /></button></div>))}<button type="button" onClick={() => setProductFormData({ ...productFormData, features_tr: [...productFormData.features_tr, ''] })} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">+ Özellik Ekle</button></div>

                <div><label className="block text-sm font-medium text-gray-300 mb-2">Features (EN)</label>{productFormData.features_en.map((feature, idx) => (<div key={idx} className="flex gap-2 mb-2"><input type="text" value={feature} onChange={(e) => { const newFeatures = [...productFormData.features_en]; newFeatures[idx] = e.target.value; setProductFormData({ ...productFormData, features_en: newFeatures }); }} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /><button type="button" onClick={() => { const newFeatures = productFormData.features_en.filter((_, i) => i !== idx); setProductFormData({ ...productFormData, features_en: newFeatures }); }} className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"><X className="w-4 h-4" /></button></div>))}<button type="button" onClick={() => setProductFormData({ ...productFormData, features_en: [...productFormData.features_en, ''] })} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">+ Add Feature</button></div>

                <div className="flex gap-4 pt-4">
                  <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"><Save className="w-4 h-4" />{editingId ? 'Güncelle' : 'Kaydet'}</button>
                  <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">İptal</button>
                </div>
              </form>
            </div>
          )}

          {showAddForm && activeTab === 'gallery' && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">{editingId ? 'Görsel Düzenle' : 'Yeni Görsel Ekle'}</h3>
              <form onSubmit={handleGallerySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Başlık (TR)</label><input type="text" value={galleryFormData.title} onChange={(e) => setGalleryFormData({ ...galleryFormData, title: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Title (EN)</label><input type="text" value={galleryFormData.title_en} onChange={(e) => setGalleryFormData({ ...galleryFormData, title_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Açıklama (TR)</label><input type="text" value={galleryFormData.description} onChange={(e) => setGalleryFormData({ ...galleryFormData, description: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Description (EN)</label><input type="text" value={galleryFormData.description_en} onChange={(e) => setGalleryFormData({ ...galleryFormData, description_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Kategori (TR)</label><input type="text" value={galleryFormData.category} onChange={(e) => setGalleryFormData({ ...galleryFormData, category: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Category (EN)</label><input type="text" value={galleryFormData.category_en} onChange={(e) => setGalleryFormData({ ...galleryFormData, category_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Resim Yolu</label>
                  <div className="flex gap-2">
                    <input type="text" value={galleryFormData.image_path} onChange={(e) => setGalleryFormData({ ...galleryFormData, image_path: e.target.value })} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="images/ornek.jpg" required />
                    <label className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      {uploadingImage ? 'Yükleniyor...' : 'Masaüstünden Seç'}
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'gallery')} className="hidden" disabled={uploadingImage} />
                    </label>
                  </div>
                </div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Sıralama</label><input type="number" value={galleryFormData.display_order} onChange={(e) => setGalleryFormData({ ...galleryFormData, display_order: parseInt(e.target.value) })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"><Save className="w-4 h-4" />{editingId ? 'Güncelle' : 'Kaydet'}</button>
                  <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">İptal</button>
                </div>
              </form>
            </div>
          )}

          {showAddForm && activeTab === 'pages' && (
            <div className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">{editingId ? 'Sayfa Görseli Düzenle' : 'Yeni Sayfa Görseli Ekle'}</h3>
              <form onSubmit={handlePageSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Sayfa Anahtarı</label><input type="text" value={pageFormData.page_key} onChange={(e) => setPageFormData({ ...pageFormData, page_key: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="vrf_systems" required disabled={!!editingId} /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Görsel Tipi</label><select value={pageFormData.image_type} onChange={(e) => setPageFormData({ ...pageFormData, image_type: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"><option value="hero">Hero</option><option value="banner">Banner</option><option value="background">Background</option></select></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Sayfa Adı (TR)</label><input type="text" value={pageFormData.page_name_tr} onChange={(e) => setPageFormData({ ...pageFormData, page_name_tr: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Page Name (EN)</label><input type="text" value={pageFormData.page_name_en} onChange={(e) => setPageFormData({ ...pageFormData, page_name_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" required /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Alt Metin (TR)</label><input type="text" value={pageFormData.alt_text_tr} onChange={(e) => setPageFormData({ ...pageFormData, alt_text_tr: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                <div><label className="block text-sm font-medium text-gray-300 mb-2">Alt Text (EN)</label><input type="text" value={pageFormData.alt_text_en} onChange={(e) => setPageFormData({ ...pageFormData, alt_text_en: e.target.value })} className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" /></div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Resim Yolu</label>
                  <div className="flex gap-2">
                    <input type="text" value={pageFormData.image_path} onChange={(e) => setPageFormData({ ...pageFormData, image_path: e.target.value })} className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white" placeholder="images/ornek.jpg" required />
                    <label className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer transition-colors flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      {uploadingImage ? 'Yükleniyor...' : 'Masaüstünden Seç'}
                      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'page')} className="hidden" disabled={uploadingImage} />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"><Save className="w-4 h-4" />{editingId ? 'Güncelle' : 'Kaydet'}</button>
                  <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">İptal</button>
                </div>
              </form>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center text-white py-12">Yükleniyor...</div>
        ) : (
          <div>
            {activeTab === 'gallery' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image) => (
                  <div key={image.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <img src={image.image_path} alt={image.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{image.category}</p>
                      <p className="text-sm text-gray-500 mb-4">Sıra: {image.display_order}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditGallery(image)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"><Edit className="w-4 h-4" />Düzenle</button>
                        <button onClick={() => toggleGalleryActive(image.id, image.is_active)} className={`flex items-center justify-center gap-1 px-3 py-2 text-white text-sm rounded transition-colors ${image.is_active ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'}`}>{image.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                        <button onClick={() => handleDeleteGallery(image.id)} className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageImages.map((image) => (
                  <div key={image.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <img src={image.image_path} alt={image.page_name_tr} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{image.page_name_tr}</h3>
                      <p className="text-sm text-gray-400 mb-1">{image.page_key}</p>
                      <p className="text-xs text-gray-500 mb-4">Tip: {image.image_type}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditPage(image)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"><Edit className="w-4 h-4" />Düzenle</button>
                        <button onClick={() => togglePageActive(image.id, image.is_active)} className={`flex items-center justify-center gap-1 px-3 py-2 text-white text-sm rounded transition-colors ${image.is_active ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'}`}>{image.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                        <button onClick={() => handleDeletePage(image.id)} className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'products' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <img src={product.image_path} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                      {product.capacity && <p className="text-sm text-blue-400 mb-1">{product.capacity}</p>}
                      <p className="text-sm text-gray-400 mb-2">{product.category_tr}</p>
                      <p className="text-xs text-gray-500 mb-3">Özellikler: {product.features_tr.length}</p>
                      <div className="flex gap-2">
                        <button onClick={() => handleEditProduct(product)} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"><Edit className="w-4 h-4" />Düzenle</button>
                        <button onClick={() => toggleProductActive(product.id, product.is_active)} className={`flex items-center justify-center gap-1 px-3 py-2 text-white text-sm rounded transition-colors ${product.is_active ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-green-600 hover:bg-green-700'}`}>{product.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                        <button onClick={() => handleDeleteProduct(product.id)} className="flex items-center justify-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
