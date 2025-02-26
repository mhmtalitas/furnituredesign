"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Metadata'yı bir client component içinde kullanamayız, bunu layout.tsx'e taşımalıyız
// veya bir server component olarak ayrı bir dosyada tanımlamalıyız.
// Şimdilik kaldırıyoruz.

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Özel Tasarım Mobilya",
    description: "İhtiyaçlarınıza ve zevkinize özel olarak tasarlanan mobilyalarla yaşam alanlarınızı dönüştürün.",
    longDescription: "Özel tasarım mobilya hizmetimizle, tamamen size ve mekanınıza özel çözümler sunuyoruz. Her projeye özel yaklaşımımızla, mekanın boyutları, ışık alma durumu, kullanım amacı ve kişisel tercihlerinizi göz önünde bulundurarak, hem estetik hem de fonksiyonel mobilyalar tasarlıyor ve üretiyoruz. Malzeme seçiminden renk paletlerine, ergonomiden depolama çözümlerine kadar her detayı sizinle birlikte kararlaştırıyoruz.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Tasarım Danışmanlığı",
    description: "Mekanınızı daha işlevsel ve estetik hale getirecek profesyonel tasarım önerileri sunuyoruz.",
    longDescription: "Tasarım danışmanlığı hizmetimizle, mevcut mobilyalarınızı ve yaşam alanlarınızı yeniden değerlendiriyor, iyileştirme önerileri sunuyoruz. Renk şemaları, malzeme seçimleri, yerleşim planları ve aksesuar önerileriyle mekanınızın potansiyelini maksimuma çıkarmanıza yardımcı oluyoruz. Bu hizmet, tamamen yeni mobilyalar satın almadan yaşam alanınızı yenilemenin ekonomik bir yolunu arayan müşterilerimiz için idealdir.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mobilya Yenileme",
    description: "Eski mobilyalarınıza yeni bir hayat vererek, hem bütçenizi hem de çevreyi koruyoruz.",
    longDescription: "Mobilya yenileme hizmetimizle, değerli veya sevdiğiniz eski mobilyalarınızı restore ediyor, modernize ediyor veya tamamen yeniliyoruz. Ahşap işleme, döşeme yenileme, yüzey yenileme ve tamir işlemleriyle mobilyalarınızın ömrünü uzatıyor, görünümünü tamamen değiştiriyor veya orijinal güzelliğine kavuşturuyoruz. Bu hizmet, sürdürülebilirliği desteklemek ve atık miktarını azaltmak isteyen çevre dostu müşterilerimiz için mükemmel bir seçenektir.",
    image: "https://images.unsplash.com/photo-1581007871435-1d93cf81664c?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Profesyonel Montaj",
    description: "Mobilyalarınızın güvenli ve kusursuz bir şekilde monte edilmesini sağlıyoruz.",
    longDescription: "Profesyonel montaj hizmetimizle, yeni mobilyalarınızın veya yenilenmiş parçalarınızın evinize sorunsuz bir şekilde entegre edilmesini sağlıyoruz. Deneyimli montaj ekibimiz, her mobilyanın güvenli, dengeli ve tasarlandığı gibi monte edilmesini sağlamak için özel aletler ve teknikler kullanır. Büyük parçaların taşınması, hassas birleştirme işlemleri ve son ayarlamalar dahil olmak üzere tüm montaj sürecini yönetiyoruz.",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "3D Görselleştirme",
    description: "Sipariş öncesi mobilyalarınızın mekanınızda nasıl duracağını 3D görsellerle görmenizi sağlıyoruz.",
    longDescription: "3D görselleştirme hizmetimizle, tasarlanan mobilyalarınızın gerçek mekanınızda nasıl görüneceğini sipariş öncesinde görmenizi sağlıyoruz. Detaylı 3D modeller ve fotorealistik görseller oluşturarak, mobilyaların boyutlarını, renklerini ve genel uyumunu değerlendirmenize olanak tanıyoruz. Bu hizmet, yatırımınızdan emin olmak isteyen ve son ürünü hayal etmekte zorlanan müşterilerimiz için özellikle değerlidir.",
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2065&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Ölçüm ve Planlama",
    description: "Mekanınızın özelliklerine uygun mobilya planlaması için uzman ekibimiz yanınızda.",
    longDescription: "Ölçüm ve planlama hizmetimizle, mekanınızın her santimetrekareden en iyi şekilde yararlanmanızı sağlayan detaylı bir yerleşim planı oluşturuyoruz. Uzman ekibimiz, mekanınızın tüm boyutlarını, özelliklerini ve kısıtlamalarını dikkate alarak, doğru boyutlarda ve doğru yerlerde mobilyalar tasarlamanızı sağlar. Bu hizmet, özellikle küçük alanlar, zorlu köşeler veya alışılmadık mimari özellikleri olan mekanlar için çok değerlidir.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const detailsRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Servis detaylarına scrolling yapacak fonksiyon
  const scrollToService = (serviceId: number) => {
    setActiveService(serviceId);
    if (detailsRefs.current[serviceId]) {
      detailsRefs.current[serviceId]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  // ref callback fonksiyonu
  const setRef = (el: HTMLDivElement | null, id: number) => {
    if (el) {
      detailsRefs.current[id] = el;
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hizmetlerimiz
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Mobilya tasarımı ve üretiminde sunduğumuz kapsamlı hizmetlerle hayallerinizi gerçeğe dönüştürüyoruz.
          </p>
        </div>
      </div>
      
      {/* Hizmet Kartları */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 ${activeService === service.id ? 'ring-2 ring-amber-500' : ''}`}
            >
              <div className="text-amber-600 mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5">
                {service.description}
              </p>
              <button 
                onClick={() => scrollToService(service.id)}
                className="text-amber-600 font-medium hover:text-amber-700 flex items-center transition-colors cursor-pointer"
              >
                Daha Fazla Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Detaylı Hizmet Açıklamaları */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Nasıl Çalışıyoruz?
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Projelerinizi hayata geçirirken izlediğimiz adımlar ve hizmet standartlarımız hakkında bilgi edinin.
            </p>
          </div>
          
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                ref={(el) => setRef(el, service.id)}
                id={`service-${service.id}`}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center ${activeService === service.id ? 'bg-amber-50 p-8 rounded-lg transform transition-all duration-500' : 'p-8 transition-all duration-500'}`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.longDescription}</p>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="mt-4 text-amber-600 font-medium hover:text-amber-700 flex items-center transition-colors"
                  >
                    Yukarı Dön
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sıkça Sorulan Sorular */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hizmetlerimiz hakkında en çok merak edilen soruların cevapları
            </p>
          </div>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Özel mobilya siparişi ne kadar sürede tamamlanır?</h3>
              <p className="text-gray-600">Projenin karmaşıklığına, kullanılan malzemelere ve iş yoğunluğumuza bağlı olarak değişir. Genellikle küçük projeler 2-4 hafta, büyük projeler 6-8 hafta içinde tamamlanır. Siparişinizin tahmini teslim süresi, tasarım aşamasında size bildirilir.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hangi malzemeleri kullanıyorsunuz?</h3>
              <p className="text-gray-600">Projelerimizde MDF, sunta, masif ahşap (meşe, ceviz, kayın vb.), metal, cam, mermer ve çeşitli kompozit malzemeler kullanıyoruz. Malzeme seçimi, mobilyanın kullanım amacına, bütçenize ve estetik tercihlerinize göre birlikte kararlaştırılır.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Tasarım sürecinde ne kadar söz sahibiyim?</h3>
              <p className="text-gray-600">Tamamen söz sahibisiniz! Biz sadece uzmanlığımızla size rehberlik ediyoruz. Tüm tasarım kararları sizin onayınızla alınır ve istediğiniz zaman değişiklik talep edebilirsiniz. Amacımız, sizin vizyonunuzu ve ihtiyaçlarınızı en iyi şekilde karşılayan mobilyalar üretmektir.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">3D görselleştirme hizmeti ek ücrete tabi mi?</h3>
              <p className="text-gray-600">Belirli bir büyüklüğün üzerindeki projelerde 3D görselleştirme hizmeti ücretsizdir. Küçük projeler veya sadece danışmanlık alınan durumlarda ise makul bir ücret karşılığında bu hizmeti sunuyoruz. Detaylı fiyatlandırma için lütfen bizimle iletişime geçin.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* İletişim CTA */}
      <div className="bg-amber-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Projenizi Bizimle Paylaşın
          </h2>
          <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
            Hayalinizdeki mobilyayı gerçeğe dönüştürmek için ilk adımı atın. İlk danışmanlık görüşmemiz ücretsizdir.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-amber-600 bg-white hover:bg-gray-100 transition shadow-lg"
          >
            Randevu Alın
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 