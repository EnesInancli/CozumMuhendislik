# 📸 SAYFA GÖRSELLERİ YÖNETİMİ REHBERİ

## Admin Panelden Sayfa Görsellerini Nasıl Değiştirebilirsin?

### 🎯 Hızlı Başlangıç

1. **Admin Panele Giriş Yap**
   - URL: `https://yourdomain.com/admin-giris-x8k3m`
   - Kullanıcı: `admin`
   - Şifre: `AdminPass123!`

2. **"Sayfa Görselleri" Tabına Geç**
   - Admin panelde üstte 2 tab var:
     - **Galeri Görselleri** → Galeri sayfası için
     - **Sayfa Görselleri** → Her sayfanın hero/banner görselleri için
   - "Sayfa Görselleri" tabına tıkla

3. **Şu Anki Sayfalar**
   Sistemde şu sayfaların görselleri var:
   - VRF Sistemleri (`vrf_systems`)
   - Klima Teknolojileri (`climate_systems`)
   - Isı Pompası (`heat_pump`)
   - Havuz Sistemleri (`pool`)
   - Su Basınçlandırma (`water_pressure`)
   - Havalandırma (`ventilation`)
   - Su Arıtma (`water_treatment`)
   - Güneş Enerjisi (`solar_energy`)
   - Mekanik Tesisat (`mechanical_installation`)
   - Referanslar (`references`)

---

## ✏️ SAYFA GÖRSELİNİ DEĞİŞTİRME

### Mevcut Görseli Düzenle:

1. "Sayfa Görselleri" tabında görseli bul
2. **"Düzenle"** butonuna tıkla
3. Sadece **"Resim Yolu"** alanını değiştir
   - Örnek: `images/vrf-yeni.jpg`
4. **"Güncelle"** butonuna bas
5. ✅ Değişiklik anında yayına girer!

### Örnek:

```
VRF Sistemleri sayfasının görselini değiştirmek için:

1. "VRF Sistemleri" kartını bul
2. "Düzenle" butonuna tıkla
3. "Resim Yolu" kısmına yaz: images/vrf-yeni.jpg
4. "Güncelle" butonuna bas
```

---

## ➕ YENİ SAYFA GÖRSELİ EKLEME

Eğer yeni bir sayfa eklerseniz:

1. **"Yeni Sayfa Görseli Ekle"** butonuna tıkla
2. Formu doldur:

### Form Alanları:

| Alan | Açıklama | Örnek |
|------|----------|-------|
| **Sayfa Anahtarı** | Benzersiz ID (değiştirilemez!) | `water_pressure` |
| **Görsel Tipi** | Hero, Banner veya Background | `hero` |
| **Sayfa Adı (TR)** | Türkçe sayfa ismi | `Su Basınçlandırma` |
| **Page Name (EN)** | İngilizce sayfa ismi | `Water Pressurization` |
| **Alt Metin (TR)** | SEO için açıklama (TR) | `Su basınçlandırma sistemleri` |
| **Alt Text (EN)** | SEO için açıklama (EN) | `Water pressurization systems` |
| **Resim Yolu** | Görselin yolu | `images/su-basinc.jpg` |

3. **"Kaydet"** butonuna bas

---

## 🔄 SAYFALARDA KULLANIMAK İÇİN (Geliştiriciler için)

Herhangi bir sayfada dinamik görsel kullanmak için:

```typescript
import { usePageImages } from '../hooks/usePageImages';

const MyPage = () => {
  const { heroImage, loading } = usePageImages('vrf_systems');

  return (
    <div>
      {!loading && (
        <img src={heroImage} alt="VRF Systems" />
      )}
    </div>
  );
};
```

### Sayfa Anahtarları:
- `vrf_systems` - VRF Sistemleri
- `climate_systems` - Klima Teknolojileri
- `heat_pump` - Isı Pompası
- `pool` - Havuz Sistemleri
- `water_pressure` - Su Basınçlandırma
- `ventilation` - Havalandırma
- `water_treatment` - Su Arıtma
- `solar_energy` - Güneş Enerjisi
- `mechanical_installation` - Mekanik Tesisat
- `references` - Referanslar

---

## 👁️ GÖRSELİ GİZLEME / GÖSTERİŞ

Her görselin yanında **göz ikonu** var:

- **👁️ Açık Göz** → Görsel aktif, sayfada görünür
- **🚫 Kapalı Göz** → Görsel gizli, sayfada görünmez

Tıklayarak görseli anında gizleyip gösterebilirsin!

---

## 🗑️ GÖRSELİ SİLME

⚠️ **DİKKAT:** Sayfa görsellerini silme! Sadece görsel yolunu değiştir.

Eğer yanlışlıkla silersen, tekrar ekle:
1. "Yeni Sayfa Görseli Ekle" butonuna tıkla
2. Aynı **Sayfa Anahtarı**'nı kullan
3. Bilgileri doldur ve kaydet

---

## 📝 İPUÇLARI

### ✅ Yapılması Gerekenler:
1. Görselleri `public/images/` klasörüne yükle
2. Yol olarak sadece `images/dosya.jpg` yaz
3. Her sayfa için en az 1 hero görsel olmalı
4. Görselleri değiştirmeden önce yedekle

### ❌ Yapılmaması Gerekenler:
1. Sayfa anahtarını değiştirme (kod bozulur!)
2. Tüm görselleri silme (sayfalar boş kalır!)
3. Çok büyük dosyalar kullanma (max 2MB önerilen)

---

## 🔍 ÖRNEKÇekler

### Örnek 1: VRF Sistemler Sayfası Görseli
```
Sayfa Anahtarı:  vrf_systems
Görsel Tipi:     hero
Sayfa Adı (TR):  VRF Sistemleri
Page Name (EN):  VRF Systems
Resim Yolu:      images/VrfSistemToshiba.jpg
Alt Metin (TR):  VRF Sistem Kurulumu
Alt Text (EN):   VRF System Installation
```

### Örnek 2: Havuz Sayfası Görseli
```
Sayfa Anahtarı:  pool
Görsel Tipi:     hero
Sayfa Adı (TR):  Havuz Sistemleri
Page Name (EN):  Pool Systems
Resim Yolu:      images/havuz-isi.jpg
Alt Metin (TR):  Havuz Isıtma Sistemleri
Alt Text (EN):   Pool Heating Systems
```

---

## 🚀 HIZLI DEĞİŞİM ADIMLARı

**5 Saniyede Görsel Değiştir:**

1. Admin panel → "Sayfa Görselleri" tab
2. Değiştirmek istediğin sayfayı bul
3. "Düzenle" → "Resim Yolu" değiştir
4. "Güncelle" bas
5. ✅ Tamam! Canlıda görünür

---

## 📊 VERİTABANI YAPISI

Admin paneli arkasında `page_images` tablosu var. Supabase'den direkt de düzenleyebilirsin:

```sql
SELECT * FROM page_images WHERE page_key = 'vrf_systems';
```

Ama admin panel çok daha kolay! 😄

---

## 🆘 SORUN GİDERME

### Görsel Görünmüyor?
- [ ] `is_active` değeri `true` mi?
- [ ] Dosya `public/images/` klasöründe mi?
- [ ] Dosya adı doğru yazılmış mı?
- [ ] Tarayıcı cache'ini temizle (Ctrl+Shift+R)

### Yanlış Sayfa Görülüyor?
- [ ] `page_key` doğru mu?
- [ ] Sayfa kodunda doğru key kullanılmış mı?

---

**🎉 Artık her sayfanın görselini admin panelden kolayca değiştirebilirsin!**

Hiç kod yazmana gerek yok - sadece admin panele gir, görseli değiştir, kaydet! 🚀
