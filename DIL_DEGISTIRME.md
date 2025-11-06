# Dil Değiştirme Sistemi Kullanım Rehberi

Web siteniz artık Türkçe ve İngilizce dillerini desteklemektedir. Kullanıcılar header'daki dil butonuna tıklayarak dili değiştirebilirler.

## Dil Butonunun Konumu

- **Desktop**: Header'ın sağ üst köşesinde, navigasyon menüsünün yanında
- **Mobile**: Mobil menü açıldığında ilk sırada

## Dil Değişimi Nasıl Çalışır?

1. Kullanıcı TR/EN butonuna tıklar
2. Tüm sayfa içeriği seçilen dile çevrilir
3. Seçim tarayıcıda kaydedilir (LocalStorage)
4. Kullanıcı siteye tekrar girdiğinde son seçtiği dil aktif olur

## Çeviriler Nerede Saklanır?

Tüm çeviriler `src/contexts/LanguageContext.tsx` dosyasında tutulur.

### Yeni Çeviri Ekleme

Örnek: "Hizmetler" sayfasına yeni bir metin eklemek için:

```typescript
const translations = {
  tr: {
    services: {
      newText: 'Türkçe Metin'
    }
  },
  en: {
    services: {
      newText: 'English Text'
    }
  }
};
```

### Komponentte Kullanım

```typescript
import { useLanguage } from '../contexts/LanguageContext';

export const MyComponent = () => {
  const { t } = useLanguage();

  return (
    <h1>{t('services.newText')}</h1>
  );
};
```

## Mevcut Çeviriler

Sistem şu bölümlerde çeviri desteği sunuyor:

### Navigation (nav)
- services, products, references, gallery, about, contact
- climates, heatPumps

### Services (services)
- vrf, climate, heatPump, mechanical, pool
- waterPressure, ventilation, waterTreatment, solar

### Hero Section (hero)
- title, subtitle1, subtitle2, authorized
- discoverServices, aboutUs

### About (about)
- title, description1, description2
- happyCustomers, yearsExperience, completedProjects, expertTeam
- vision, visionText, mission, missionText

### Products (products)
- title, description, climates, climatesDesc
- heatPumps, heatPumpsDesc, viewDetails

### References (references)
- title, brands

### Contact (contact)
- title, description, info, phone, email, address
- workingHours, workingHoursText, writeUs
- nameSurname, subject, message, sendMessage
- addressLine1, addressLine2, addressLine3

### Footer (footer)
- description, quickLinks, contact, rights
- privacy, terms, cookies

### Common (common)
- readMore, learnMore, contactUs, getQuote

## Yeni Sayfa Eklerken

Yeni bir sayfa oluşturduğunuzda:

1. İlgili çevirileri `LanguageContext.tsx`'e ekleyin
2. Sayfada `useLanguage` hook'unu kullanın
3. Metinleri `t('key')` fonksiyonu ile gösterin

### Örnek Yeni Sayfa:

```typescript
import { useLanguage } from '../contexts/LanguageContext';

export const NewPage = () => {
  const { language, t } = useLanguage();

  return (
    <div>
      <h1>{t('newPage.title')}</h1>
      <p>{t('newPage.description')}</p>

      {/* Koşullu render gerekirse: */}
      {language === 'tr' ? (
        <p>Türkçe özel içerik</p>
      ) : (
        <p>English specific content</p>
      )}
    </div>
  );
};
```

## Dikkat Edilmesi Gerekenler

1. **Her metin için iki çeviri**: TR ve EN
2. **Key yapısı tutarlı olmalı**: `section.subsection.key`
3. **Eksik çeviri**: Eğer çeviri bulunamazsa, key'in kendisi gösterilir
4. **LocalStorage temizlenirse**: Varsayılan dil TR olur

## Hangi Sayfalar Çevrildi?

✅ Header (Navigasyon menüsü)
✅ Footer
✅ Gallery Page (Galeri)
✅ Hero Section (Ana sayfa hero)

🔄 Diğer sayfalar (About, Contact, Services vs.) manuel olarak çeviri entegrasyonu gerektirir.

## Dil Butonunu Özelleştirme

Dil butonunun görünümünü değiştirmek için `Header.tsx` dosyasındaki ilgili kısmı düzenleyin:

```typescript
<button
  onClick={toggleLanguage}
  className="... stilleriniz ..."
>
  <Globe className="w-4 h-4" />
  <span>{language.toUpperCase()}</span>
</button>
```

## Test Etme

1. Siteyi açın
2. TR/EN butonuna tıklayın
3. Tüm metinlerin değiştiğini kontrol edin
4. Sayfayı yenileyin, dil seçiminin korunduğunu doğrulayın
