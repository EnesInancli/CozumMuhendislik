# Galeri Yönetimi Rehberi

Bu web sitesinde galeri sistemi Supabase veritabanı üzerinden yönetilmektedir. Artık kod değiştirmeden, sadece veritabanına veri ekleyerek galeriyi güncelleyebilirsiniz.

## Galeri Fotoğrafı Nasıl Eklenir?

### 1. Supabase Dashboard'a Giriş

1. [Supabase Dashboard](https://app.supabase.com)'a gidin
2. Projenizi seçin
3. Sol menüden "Table Editor" seçeneğine tıklayın
4. `gallery_images` tablosunu seçin

### 2. Yeni Fotoğraf Ekleme

"Insert" butonuna tıklayın ve aşağıdaki bilgileri doldurun:

#### Zorunlu Alanlar:

- **title** (Türkçe Başlık): Örnek: "Olimpik Havuz"
- **title_en** (İngilizce Başlık): Örnek: "Olympic Pool"
- **description** (Türkçe Açıklama): Örnek: "Bodrum Marmara Koleji Yarı Olimpik Havuz"
- **description_en** (İngilizce Açıklama): Örnek: "Bodrum Marmara College Semi-Olympic Pool"
- **category** (Türkçe Kategori): Örnek: "Havuz"
- **category_en** (İngilizce Kategori): Örnek: "Pool"
- **image_path** (Resim Yolu): Örnek: "images/havuz.jpeg"

#### Opsiyonel Alanlar:

- **display_order** (Sıralama): Gösterim sırası (0, 1, 2, 3...) - Küçük rakam önce gösterilir
- **is_active** (Aktif): true (göster) veya false (gizle)

### 3. Kategoriler

Galeri kategorileri otomatik olarak oluşturulur. Yazdığınız kategoriler filter butonlarında otomatik görünür.

**Örnek Kategoriler:**
- Ofis / Office
- VRF Sistemleri / VRF Systems
- Klima Teknolojileri / Climate Technologies
- Isı Pompası / Heat Pump
- Mekanik Tesisat / Mechanical Installation
- Havuz / Pool
- Su Basınçlandırma / Water Pressurization
- Havalandırma / Ventilation
- Su Arıtma / Water Treatment
- GES / Solar Energy

### 4. Fotoğraf Yükleme

Fotoğrafları `public/images/` klasörüne yükleyin ve `image_path` alanına şöyle yazın:
```
images/dosyaismi.jpeg
```

### Örnek Veri Girişi:

```sql
INSERT INTO gallery_images (
  title,
  title_en,
  description,
  description_en,
  category,
  category_en,
  image_path,
  display_order
) VALUES (
  'VRF Sistem Kurulumu',
  'VRF System Installation',
  'Lüks otel projesi için VRF klima sistemi kurulumu',
  'VRF air conditioning system installation for luxury hotel project',
  'VRF Sistemleri',
  'VRF Systems',
  'images/vrf-kurulum.jpg',
  1
);
```

## Fotoğraf Düzenleme

1. Supabase Dashboard'da `gallery_images` tablosunu açın
2. Düzenlemek istediğiniz satırı bulun
3. Satıra tıklayın ve "Edit" seçeneğini kullanın
4. Değişiklikleri kaydedin

## Fotoğraf Silme / Gizleme

### Geçici Gizleme (Önerilen):
- `is_active` alanını `false` yapın
- Fotoğraf galeride görünmez ama silinmez

### Kalıcı Silme:
- Satırı seçip "Delete" butonuna tıklayın
- **DİKKAT:** Bu işlem geri alınamaz!

## Sıralama

Fotoğraflar `display_order` sütununa göre sıralanır:
- 0 = En önce gösterilir
- 1, 2, 3... = Sırasıyla gösterilir
- Aynı değer = Eklenme tarihine göre sıralanır

## Dil Desteği

Web sitesi TR/EN dil desteğine sahiptir:
- Türkçe alanlar: `title`, `description`, `category`
- İngilizce alanlar: `title_en`, `description_en`, `category_en`

Kullanıcı dil butonuna tıkladığında, ilgili dildeki veriler otomatik gösterilir.

## Güvenlik

Galeri sadece görüntüleme modunda çalışır. Veritabanı değişikliklerini sadece yetkili kullanıcılar yapabilir (Row Level Security aktif).

## Teknik Destek

Sorun yaşarsanız:
1. Fotoğraf yolunun doğru olduğunu kontrol edin
2. Türkçe ve İngilizce alanların ikisinin de dolu olduğunu kontrol edin
3. `is_active` değerinin `true` olduğunu kontrol edin
