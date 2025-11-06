# 📦 ÜRÜN YÖNETİMİ REHBERİ

## Admin Panelden Ürün Nasıl Eklenir/Düzenlenir/Silinir?

### 🎯 Hızlı Başlangıç

1. **Admin Panele Gir**
   - URL: `https://yourdomain.com/admin-giris-x8k3m`
   - Kullanıcı: `admin`
   - Şifre: `AdminPass123!`

2. **"Ürünler" Tabına Geç**
   - Admin panelde üstte 3 tab var:
     - Galeri Görselleri
     - Sayfa Görselleri
     - **Ürünler** ← Buraya tıkla!

3. **Ürün Tipini Seç**
   - **Klimalar** → ClimatePage ürünleri
   - **Isı Pompaları** → HeatPumpProductsPage ürünleri

---

## ➕ YENİ ÜRÜN EKLEME

### Adım 1: "Yeni Ekle" Butonuna Tıkla

### Adım 2: Formu Doldur

#### Temel Bilgiler:
| Alan | Açıklama | Örnek |
|------|----------|-------|
| **Kategori (TR)** | Ürün kategorisi Türkçe | `Toshiba Split Klimalar` |
| **Category (EN)** | Ürün kategorisi İngilizce | `Toshiba Split Air Conditioners` |
| **Kategori Açıklama (TR)** | Kategori detayı (opsiyonel) | `Japon teknolojisi ile...` |
| **Category Description (EN)** | Kategori detayı (opsiyonel) | `Japanese technology with...` |
| **Ürün Adı** | Ürün modeli | `TOSHIBA SEIYA` |
| **Kapasite** | BTU/kW değeri (opsiyonel) | `18000 BTU` veya `6 kW` |
| **Resim Yolu** | Ürün görseli | `images/seiya.webp` |
| **Sıralama** | Gösterim sırası | `1, 2, 3...` |

#### Özellikler (Features):

**Özellikler (TR)** - Türkçe özellikler:
- Her satır 1 özellik
- "+ Özellik Ekle" ile yeni satır ekle
- "X" butonu ile satır sil

**Features (EN)** - İngilizce özellikler:
- TR ile aynı mantık
- Her özellik için EN karşılığı ekle

### Adım 3: Kaydet

"Kaydet" butonuna bas - Ürün hemen canlıda görünür!

---

## 📝 ÜRÜN ÖRNEĞİ - ADIM ADIM

### Örnek: Yeni Klima Ürünü Ekle

```
1. "Ürünler" tab → "Klimalar" filtresi seç
2. "Yeni Ekle" butonuna tıkla
3. Formu doldur:

Kategori (TR): Toshiba Split Klimalar
Category (EN): Toshiba Split Air Conditioners
Kategori Açıklama (TR): Japon teknolojisi ile üstün performans
Category Description (EN): Superior performance with Japanese technology

Ürün Adı: TOSHIBA DAISEIKAI 9
Kapasite: 12000 BTU
Resim Yolu: images/daiseikai9.jpg
Sıralama: 5

Özellikler (TR):
✓ A+++ Enerji Sınıfı
✓ Wifi Kontrol
✓ Sessiz Çalışma
✓ Hızlı Soğutma Modu

Features (EN):
✓ A+++ Energy Class
✓ WiFi Control
✓ Silent Operation
✓ Fast Cooling Mode

4. "Kaydet" butonuna bas
5. ✅ Tamam! Artık ürün sayfada görünüyor
```

---

## ✏️ ÜRÜN DÜZENLEME

### Mevcut Ürünü Düzenle:

1. Ürün kartını bul
2. **"Düzenle"** butonuna tıkla
3. İstediğin alanları değiştir:
   - Ürün adı
   - Görseli
   - Özellikleri (ekle/çıkar/değiştir)
   - Kapasiteyi
   - Sıralamayı
4. **"Güncelle"** butonuna bas
5. ✅ Değişiklik anında yayına girer!

---

## 🗑️ ÜRÜN SİLME

### Ürünü Kalıcı Olarak Sil:

1. Ürün kartında **çöp kutusu** ikonuna tıkla
2. Onay mesajını onayla
3. ⚠️ **DİKKAT:** Bu işlem geri alınamaz!

### Ürünü Geçici Gizleme (Silmeden):

1. Ürün kartında **göz** ikonuna tıkla
2. Ürün gizlenir (silinmez!)
3. Tekrar göz ikonuna basarak gösterebilirsin

---

## 🔄 ÜRÜN SIRALAMA

Ürünlerin hangi sırada gösterileceğini kontrol et:

- **Sıralama: 1** → İlk gösterilir
- **Sıralama: 2** → İkinci gösterilir
- **Sıralama: 3** → Üçüncü gösterilir
- vs...

Aynı kategorideki ürünler bu sıraya göre listelenir.

---

## 📂 KATEGORİ YÖNETİMİ

### Kategoriler Nedir?

Her ürün bir **kategori**ye aittir. Örnek:
- `Toshiba Split Klimalar`
- `Toshiba Multi Klimalar`
- `Toshiba Estia Split Isı Pompası`

### Yeni Kategori Ekleme:

Yeni ürün eklerken farklı kategori adı yaz:

```
Mevcut kategori: "Toshiba Split Klimalar"
Yeni kategori:   "Alarko Split Klimalar"  ← Yeni kategori otomatik oluşur!
```

Sayfada kategoriler grup halinde gösterilir.

---

## 🎨 ÜRÜN GÖRSELLERİ

### Görsel Nasıl Eklenir?

1. **Görseli Yükle**
   - Görseli `public/images/` klasörüne koy
   - Örnek: `public/images/urun-yeni.jpg`

2. **Ürün Formunda Yolu Yaz**
   - Resim Yolu: `images/urun-yeni.jpg`

3. **Kaydet**
   - Görsel otomatik görünür!

### Görsel İpuçları:

- ✅ Format: JPG, PNG, WEBP
- ✅ Boyut: En fazla 2MB (küçük = hızlı yükleme)
- ✅ Çözünürlük: 800x600 veya daha büyük
- ✅ İsimlendirme: `urun-adi.jpg` (boşluksuz!)

---

## 📊 MEVCUT ÜRÜNLER

### Klimalar (ClimatePage):

**Toshiba Split Klimalar:**
1. TOSHIBA SEIYA
2. TOSHIBA SHORAI EDGE
3. TOSHIBA HAORI
4. TOSHIBA DAISEIKAI 10

**Toshiba Multi Klimalar:**
5. TOSHIBA Multi Split 2+1
6. TOSHIBA Multi Split 3+1

### Isı Pompaları (HeatPumpProductsPage):

**Toshiba Estia:**
1. TOSHIBA Estia 6 kW
2. TOSHIBA Estia 8 kW

---

## ⚙️ ÖZEL DURUMLAR

### Özellik Ekleme/Çıkarma:

**Özellik Ekle:**
- "+ Özellik Ekle" butonuna bas
- Yeni boş satır açılır
- Özelliği yaz

**Özellik Sil:**
- Özelliğin yanındaki **X** butonuna bas
- Satır silinir

**Özellik Düzenle:**
- Direkt text kutusuna tıkla
- İstediğini yaz
- Otomatik kaydedilir (Güncelle basınca)

### Kapasite Alanı (Opsiyonel):

Bazı ürünlerde kapasite gösterilir:
- Klimalar: `18000 BTU`, `24000 BTU`
- Isı Pompaları: `6 kW`, `8 kW`

Boş bırakılabilir - zorunlu değil!

---

## 🚨 SORUN GİDERME

### Ürün Sayfada Görünmüyor?

- [ ] `is_active` değeri açık mı? (Göz ikonu)
- [ ] Doğru ürün tipini seçtin mi? (Klima/Isı Pompası)
- [ ] Tarayıcı cache'ini temizle (Ctrl+Shift+R)

### Görsel Yüklenmiyor?

- [ ] Dosya `public/images/` klasöründe mi?
- [ ] Dosya adı doğru yazılmış mı? (büyük/küçük harf)
- [ ] Dosya formatı destekleniyor mu? (JPG, PNG, WEBP)

### Özellikler Gösterilmiyor?

- [ ] Hem TR hem EN özellikler doldurulmuş mu?
- [ ] Boş satırlar var mı? (Sil onları!)

---

## 🎯 HIZLI İŞLEMLER

### 5 Saniyede Ürün Ekle:

```
1. "Ürünler" → Filtre seç (Klima/Isı Pompası)
2. "Yeni Ekle"
3. Hızlıca doldur:
   - Kategori
   - Ürün adı
   - Resim yolu
   - 1-2 özellik ekle
4. "Kaydet"
5. ✅ Bitti!
```

### Toplu Düzenleme:

Aynı kategorideki birden fazla ürünü düzenlemek için:
1. Sıralama değerlerini ayarla (1, 2, 3...)
2. Aynı kategori adını kullan
3. Görsel yollarını kontrol et

---

## 💡 İPUÇLARI

### ✅ Önerilen:

1. **Tutarlı kategori adları kullan**
   - ❌ "Toshiba Split", "TOSHIBA SPLIT", "toshiba split"
   - ✅ "Toshiba Split Klimalar" (her yerde aynı!)

2. **Özellik sayısını dengele**
   - Çok özellik = Uzun liste
   - Az özellik = Yetersiz bilgi
   - İdeal: 3-5 özellik

3. **Görselleri optimize et**
   - Büyük resimler → Yavaş yükleme
   - Küçük resimler → Hızlı site

### ❌ Yapma:

1. Boş özellik satırı bırakma
2. Aynı ürünü 2 kez ekleme
3. Kategori adlarını karıştırma (TR/EN farklı olmalı ama tutarlı!)

---

## 🗂️ VERİTABANI

Ürünler `products` tablosunda saklanır:

```sql
-- Tüm klimaları göster
SELECT * FROM products WHERE product_type = 'climate';

-- Tüm ısı pompalarını göster
SELECT * FROM products WHERE product_type = 'heat_pump';

-- Aktif ürünleri göster
SELECT * FROM products WHERE is_active = true;
```

Ama admin paneli kullanmak çok daha kolay! 😉

---

## 📞 ÖZET

### Ürün Ekleme:
1. Admin panel → Ürünler tab
2. Klima veya Isı Pompası seç
3. Yeni Ekle → Form doldur → Kaydet

### Ürün Düzenleme:
1. Ürünü bul → Düzenle
2. Değiştir → Güncelle

### Ürün Silme/Gizleme:
1. Çöp kutusu = Kalıcı sil
2. Göz ikonu = Geçici gizle

---

**🎉 Artık admin panelden tüm ürünleri yönetebilirsin! Hiç kod yazmana gerek yok!** 🚀
