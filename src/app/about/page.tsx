import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Ahmet Yılmaz",
    role: "Kurucu ve Baş Tasarımcı",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "15 yılı aşkın mobilya tasarımı ve üretimi deneyimine sahip olan Ahmet, şirketin kurucusu ve yaratıcı vizyonerin arkasındaki güçtür. Milano Tasarım Akademisi mezunu olan Ahmet, her projede fonksiyonelliği ve estetiği mükemmel bir dengede bir araya getirmeyi hedefliyor."
  },
  {
    name: "Zeynep Kaya",
    role: "İç Mimar",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "İstanbul Teknik Üniversitesi İç Mimarlık Bölümü mezunu olan Zeynep, 8 yıldır mobilya tasarımı alanında çalışıyor. Detaylara olan tutkusu ve müşteri ihtiyaçlarını anlama konusundaki üstün yeteneği ile tanınıyor."
  },
  {
    name: "Mehmet Demir",
    role: "Üretim Müdürü",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "20 yılı aşkın ahşap işçiliği deneyimine sahip olan Mehmet, üretim süreçlerinin kusursuz işlemesini sağlıyor. Geleneksel el işçiliği tekniklerini modern teknolojilerle birleştirerek, her mobilyanın en yüksek kalite standartlarında üretilmesini garantiliyor."
  },
  {
    name: "Elif Öztürk",
    role: "Müşteri İlişkileri Yöneticisi",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    bio: "İletişim Fakültesi mezunu olan Elif, 6 yıldır müşteri ilişkileri alanında çalışıyor. Sıcak ve profesyonel yaklaşımıyla müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak konusunda uzmanlaşmıştır."
  }
];

export const metadata = {
  title: 'Hakkımızda | Mobilya Tasarım',
  description: 'Mobilya Tasarım ekibi, hikayemiz, değerlerimiz ve tasarım felsefemiz hakkında bilgi edinin.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hakkımızda
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Tutkumuz, zanaat geleneğimiz ve tasarım felsefemiz hakkında bilgi edinin.
          </p>
        </div>
      </div>
      
      {/* Hikayemiz */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Hikayemiz
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=2073&auto=format&fit=crop"
                  alt="Atölyemiz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 space-y-6 text-gray-600">
              <p>
                Mobilya Tasarım, 2010 yılında Ahmet Yılmaz tarafından, kişiye özel, kaliteli ve uzun ömürlü mobilyalar üretme vizyonuyla kuruldu. Küçük bir atölyede başlayan yolculuğumuz, bugün geniş bir üretim tesisine ve İstanbul&apos;un merkezinde bir showroom&apos;a dönüştü.
              </p>
              <p>
                İlk günden bu yana, her mobilyayı bir sanat eseri olarak görüyor ve en ince detayına kadar özenle tasarlıyoruz. Geleneksel el işçiliği tekniklerini modern teknoloji ile birleştirerek, hem estetik hem de dayanıklı mobilyalar üretiyoruz.
              </p>
              <p>
                Yıllar içinde büyüyerek, deneyimli ve tutkulu bir ekip kurduk. Her biri kendi alanında uzman olan ekip üyelerimiz, müşterilerimizin hayallerini gerçeğe dönüştürmek için bir araya geliyor. Bugün, yüzlerce memnun müşteriye ve onlarca ödüle sahip bir marka olmanın gururunu yaşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Değerlerimiz */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Değerlerimiz
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Bizi biz yapan ve her projede rehberlik eden temel değerlerimiz
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kalite
              </h3>
              <p className="text-gray-600">
                Her mobilyamızı en kaliteli malzemelerle, kusursuz işçilikle üretiyoruz. Ürünlerimizin uzun yıllar dayanması ve ilk günkü görünümünü koruması bizim için önemli.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Yaratıcılık
              </h3>
              <p className="text-gray-600">
                Her projeyi benzersiz bir sanat eseri olarak görüyoruz. Yaratıcı çözümler ve yenilikçi tasarımlarla, müşterilerimizin hayal ettiklerinin ötesine geçmeyi hedefliyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Kişiselleştirme
              </h3>
              <p className="text-gray-600">
                Her müşterimizin ihtiyaçları, zevkleri ve yaşam tarzı farklıdır. Bu nedenle her projemizi tamamen kişiye özel olarak tasarlıyor ve üretiyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                İşbirliği
              </h3>
              <p className="text-gray-600">
                Müşterilerimizle yakın iş birliği içinde çalışıyor, onların fikirlerini ve geri bildirimlerini tasarım sürecimizin merkezine alıyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verimlilik
              </h3>
              <p className="text-gray-600">
                Mobilyalarımızı sadece güzel değil, aynı zamanda işlevsel ve verimli olacak şekilde tasarlıyoruz. Her santimetrekareden maksimum fayda sağlamayı hedefliyoruz.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-amber-600 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5l-4 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sürdürülebilirlik
              </h3>
              <p className="text-gray-600">
                Çevreye duyarlı malzemeler ve üretim teknikleri kullanarak, gelecek nesiller için daha yaşanabilir bir dünya bırakmayı amaçlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ekibimiz */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Ekibimiz
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Mobilyalarımızın arkasındaki yaratıcı ve yetenekli profesyoneller
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Atölyemiz */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Atölyemiz
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Mobilyalarımızın hayat bulduğu yer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565372588246-d6dea13dbb60?q=80&w=2070&auto=format&fit=crop"
                  alt="Atölye"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1569950044272-a06e78ef8495?q=80&w=2070&auto=format&fit=crop"
                  alt="Ahşap işleme"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=2065&auto=format&fit=crop"
                  alt="Tasarım süreci"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-gray-600 space-y-6">
            <p>
              İstanbul&apos;un kalbinde yer alan 500 metrekarelik modern atölyemiz, en son teknoloji ile donatılmıştır. Burada, geleneksel el işçiliği ile modern üretim tekniklerini bir araya getirerek, her mobilyayı özenle üretiyoruz.
            </p>
            <p>
              Atölyemizde ahşap işleme, metal işleme, döşeme ve boyama gibi tüm üretim süreçleri kendi bünyemizde gerçekleştiriliyor. Bu sayede, her aşamada kalite kontrolü sağlıyor ve müşterilerimizin beklentilerine tam olarak karşılık veren ürünler ortaya çıkarıyoruz.
            </p>
          </div>
        </div>
      </div>
      
      {/* İletişim CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bizimle Tanışmak İster Misiniz?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
            Showroom&apos;umuzu ziyaret edin veya online bir görüşme ayarlayın. Size özel mobilya çözümlerimizi keşfedin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800 transition"
            >
              Çalışmalarımızı İnceleyin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 