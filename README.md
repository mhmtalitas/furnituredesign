# Mobilya Tasarımcısı Portfolyo Web Sitesi

Bu proje, özel mobilya tasarımı ve üretimi yapan bir tasarımcı için geliştirilmiş modern ve estetik bir web sitesidir. Site, tasarımcının işlerini sergilemek, hizmetlerini tanıtmak ve potansiyel müşterileriyle iletişim kurmasını sağlamak için tasarlanmıştır.

## Özellikler

- **Modern ve Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Etkileyici Ana Sayfa**: Hero bölümü, öne çıkan çalışmalar, hizmetler ve müşteri yorumları
- **Detaylı Portfolyo**: Kategorilere ayrılmış projeler ve detaylı proje sayfaları
- **Hizmet Sayfaları**: Sunulan hizmetlerin kapsamlı açıklamaları
- **İletişim Formu**: Potansiyel müşterilerle kolay iletişim
- **SEO Dostu Yapı**: Arama motorlarında iyi sıralanma için optimize edilmiş

## Teknolojiler

- **Next.js 14**: React tabanlı modern web framework
- **TypeScript**: Tip güvenli JavaScript süper kümesi
- **TailwindCSS**: Utility-first CSS framework
- **Responsive Design**: Tüm ekran boyutlarına uyarlanabilir tasarım

## Görsel Kaynakları

Web sitesinde kullanılan tüm görseller [Unsplash](https://unsplash.com)'ten alınmıştır. Bu görseller ücretsiz olarak kullanılabilir ve ticari amaçlar için de serbesttir. Proje içerisinde next.config.ts dosyasında Unsplash resimlerine izin verilmektedir.

## Kurulum

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/your-username/furniture-designer-portfolio.git
   ```

2. Proje dizinine gidin:
   ```bash
   cd furniture-designer-portfolio
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

5. Tarayıcınızda görüntüleyin:
   ```
   http://localhost:3000
   ```

## Site Yapısı

- **Ana Sayfa**: Etkileyici bir giriş, tasarımcının vizyonu ve öne çıkan projeler
- **Portfolyo**: Kategorilere ayrılmış çalışmalar galerisi
- **Hizmetler**: Sunulan özel tasarım hizmetlerinin detaylı açıklamaları
- **Hakkında**: Tasarımcının hikayesi ve felsefesi
- **İletişim**: İletişim formu ve iletişim bilgileri

## Görselleri Özelleştirme

Projede varsayılan olarak Unsplash'ten alınan görseller bulunmaktadır. Eğer kendi görsellerinizi kullanmak isterseniz:

1. İlgili bileşenlerdeki görsel URL'lerini (Hero.tsx, FeaturedWorks.tsx, Testimonials.tsx) kendi görsellerinizin URL'leri ile değiştirin
2. Veya yerel görseller eklemek için `/public` klasörüne resimlerinizi yerleştirip, görsel URL'lerini güncellemeniz yeterlidir

## Notlar

Bu proje, Next.js 14 kullanılarak oluşturulmuştur ve sürekli olarak geliştirilmektedir. Önerileriniz veya katkılarınız için bir issue açabilir veya pull request gönderebilirsiniz.
