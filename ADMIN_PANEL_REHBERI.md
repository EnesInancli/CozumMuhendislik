# 🔐 ADMIN PANEL KULLANIM REHBERİ

## GİZLİ ADMIN PANELİ NASIL KULLANILIR?

### 📍 GİZLİ ADRESLER (Kimseyle Paylaşmayın!)

**Giriş Sayfası:**
```
https://yourdomain.com/admin-giris-x8k3m
```

**Yönetim Paneli:**
```
https://yourdomain.com/yonetim-panel-x9k2p
```

⚠️ **ÖNEMLİ:** Bu URL'leri kimseyle paylaşmayın! Menülerde ve Google'da görünmezler.

---

## 🔑 GİRİŞ BİLGİLERİ

### Varsayılan Kullanıcı
- **Kullanıcı Adı:** `admin`
- **Şifre:** `AdminPass123!`
- **İzin Verilen IP:** `0.0.0.0` (tüm IP'ler - ÖNEMLİ: Değiştirin!)

---

## 🛡️ IP GÜVENLİĞİ NASIL AYARLANIR?

### 1. Kendi IP Adresinizi Öğrenin
- https://whatismyipaddress.com adresine gidin
- IP adresinizi kopyalayın (örn: `123.45.67.89`)

### 2. Supabase'de IP'yi Güncelleyin

1. [Supabase Dashboard](https://app.supabase.com)'a girin
2. Projenizi seçin
3. Sol menüden **Table Editor** > **admin_users** tablosuna gidin
4. `admin` kullanıcısının satırını bulun
5. **Edit** butonuna tıklayın
6. `allowed_ip` alanını `0.0.0.0` yerine kendi IP'nizi yazın (örn: `123.45.67.89`)
7. **Save** butonuna basın

✅ Artık sadece senin IP'nden giriş yapılabilir!

---

## 📸 GALERİYE FOTOĞRAF NASIL EKLENİR?

### Adım 1: Fotoğrafı Yükleyin
1. Fotoğrafı `public/images/` klasörüne koyun
2. Örnek: `public/images/yeni-proje.jpg`

### Adım 2: Admin Panelden Ekleyin
1. `https://yourdomain.com/admin-giris-x8k3m` adresine gidin
2. Giriş yapın (admin / AdminPass123!)
3. **"Yeni Görsel Ekle"** butonuna tıklayın
4. Formu doldurun:

#### Türkçe Bilgiler:
- **Başlık (TR):** Proje adı
- **Açıklama (TR):** Proje detayı
- **Kategori (TR):** Örnek: `Havuz`, `VRF Sistemleri`, `Klima`

#### İngilizce Bilgiler:
- **Title (EN):** Project name
- **Description (EN):** Project detail
- **Category (EN):** Example: `Pool`, `VRF Systems`, `Climate`

#### Diğer:
- **Resim Yolu:** `images/yeni-proje.jpg` (dosya adı)
- **Sıralama:** 0, 1, 2... (küçük sayı önce gösterilir)

5. **Kaydet** butonuna basın!

---

## ✏️ FOTOĞRAF DÜZENLEME

1. Admin panelde görseli bulun
2. **"Düzenle"** butonuna tıklayın
3. İstediğiniz alanları değiştirin
4. **"Güncelle"** butonuna basın

---

## 👁️ FOTOĞRAF GİZLEME (Silmeden)

1. Görselin üzerindeki **göz ikonuna** tıklayın
2. Görsel galeride gizlenir (silinmez!)
3. Tekrar göz ikonuna basarak gösterebilirsiniz

---

## 🗑️ FOTOĞRAF SİLME

1. Görselin üzerindeki **çöp kutusu** ikonuna tıklayın
2. Onaylayın
3. ⚠️ **DİKKAT:** Bu işlem geri alınamaz!

---

## 🔒 GÜVENLİK ÖNERİLERİ

### ✅ YAPMANIZ GEREKENLER:
1. **IP adresinizi mutlaka ayarlayın** (`0.0.0.0` yerine)
2. **Şifreyi değiştirin** (Supabase'de `password_hash` güncelleyin)
3. **Admin URL'lerini kimseyle paylaşmayın**
4. **Her kullanımdan sonra çıkış yapın**

### ❌ YAPMAMANIZ GEREKENLER:
1. ❌ Admin URL'lerini sosyal medyada paylaşmayın
2. ❌ Şifreyi basit tutmayın
3. ❌ IP'yi `0.0.0.0` olarak bırakmayın (herkes girer!)
4. ❌ Herkese açık WiFi'den admin panele girmeyin

---

## 🚨 SORUN GİDERME

### "Bu IP adresinden giriş yapma yetkiniz yok" Hatası
- IP adresiniz değişmiş olabilir
- Supabase'de `allowed_ip`'yi güncelleyin
- Veya geçici olarak `0.0.0.0` yapın (GÜVENLİ DEĞİL!)

### "Geçersiz kullanıcı adı veya şifre" Hatası
- Kullanıcı adı: `admin`
- Şifre: `AdminPass123!`
- Büyük/küçük harf önemlidir!

### Fotoğraflar Görünmüyor
- Fotoğraf yolunu kontrol edin: `images/dosya.jpg`
- Fotoğrafın `public/images/` klasöründe olduğundan emin olun
- `is_active` değerinin `true` olduğunu kontrol edin

---

## 📞 TEKNİK DESTEK

Sorun yaşarsanız:
1. Browser console'u açın (F12)
2. Hata mesajlarını kontrol edin
3. Supabase Table Editor'de veriyi kontrol edin

---

## 🎯 HIZLI ERİŞİM

**Giriş:** https://yourdomain.com/admin-giris-x8k3m
**Panel:** https://yourdomain.com/yonetim-panel-x9k2p
**Supabase:** https://app.supabase.com

---

**🔐 GÜVENLİK NOTU:** Bu dosyayı GitHub'a yüklemeyin! Yerel bilgisayarınızda saklayın.
