"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Modern Mutfak Tasarımı",
    description: "Minimalist çizgiler ve doğal malzemelerle tasarlanmış modern mutfak dolabı.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?q=80&w=2070&auto=format&fit=crop",
    category: "Mutfak",
    client: "Yıldız Ailesi",
    date: "Ocak 2024",
    detailText: "Bu modern mutfak tasarımı, doğal ahşap ve beyaz yüzeylerin mükemmel uyumunu yansıtıyor. Ergonomik yerleşim planı, geniş depolama alanları ve entegre aydınlatma sistemleriyle fonksiyonellik ön planda tutuldu."
  },
  {
    id: 2,
    title: "Özel Yatak Odası Mobilyası",
    description: "Doğal ahşabın sıcaklığını, modern çizgilerle buluşturan yatak odası takımı.",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop",
    category: "Yatak Odası",
    client: "Demir Ailesi",
    date: "Şubat 2024",
    detailText: "Bu yatak odası takımında doğal ceviz ağacı kullanılarak sıcak bir atmosfer yaratıldı. Minimalist çizgiler ve gizli depolama çözümleriyle hem estetik hem de fonksiyonel bir yaşam alanı oluşturuldu."
  },
  {
    id: 3,
    title: "Lüks Oturma Odası",
    description: "Konfor ve estetiğin bir araya geldiği özel tasarım oturma odası.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop",
    category: "Oturma Odası",
    client: "Kaya Ailesi",
    date: "Mart 2024",
    detailText: "Bu lüks oturma odası tasarımında konfor ve estetik ön planda tutuldu. Özel üretim koltuklar, doğal ahşap sehpalar ve özel aydınlatma çözümleriyle etkileyici bir yaşam alanı yaratıldı."
  },
  {
    id: 4,
    title: "Şık Ofis Mobilyaları",
    description: "Çalışma verimliliğini artıran ergonomik ve şık ofis mobilyaları.",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=2070&auto=format&fit=crop",
    category: "Ofis",
    client: "Akıllı Yazılım Ltd. Şti.",
    date: "Nisan 2024",
    detailText: "Bu ofis mobilyaları, çalışma verimliliğini artırmak için ergonomik prensiplere uygun olarak tasarlandı. Şık görünüm ve fonksiyonellik bir arada düşünülerek modern bir çalışma ortamı yaratıldı."
  },
  {
    id: 5,
    title: "Klasik Yemek Odası",
    description: "Geleneksel çizgileri modern detaylarla buluşturan özel yemek odası takımı.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop",
    category: "Yemek Odası",
    client: "Yılmaz Ailesi",
    date: "Mayıs 2024",
    detailText: "Bu yemek odası takımında klasik ahşap işçiliği modern detaylarla bir araya getirildi. El işçiliği oyma detaylar ve doğal ahşabın sıcaklığı mekana sofistike bir hava katıyor."
  },
  {
    id: 6,
    title: "Minimalist Banyo Mobilyaları",
    description: "Sade ve şık çizgilerle tasarlanmış, fonksiyonel banyo mobilyaları.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    category: "Banyo",
    client: "Özcan Ailesi",
    date: "Haziran 2024",
    detailText: "Bu banyo mobilyaları, sınırlı alan içerisinde maksimum fonksiyonellik sağlamak için özel olarak tasarlandı. Su geçirmez malzemeler ve akıllı depolama çözümleriyle uzun ömürlü kullanım hedeflendi."
  }
];

export default function Portfolio() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);
  
  // Projeleri kategorilerine göre gruplandır - useMemo ile optimize edildi
  const categories = useMemo(() => {
    return ["Tümü", ...new Set(projects.map(project => project.category))];
  }, [projects]);
  
  // URL'den gelen kategoriyi kontrol et
  useEffect(() => {
    const category = searchParams.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    } else if (!category) {
      setSelectedCategory("Tümü");
    }
  }, [searchParams, categories]);
  
  // Kategori değiştirme işlevi
  const handleCategoryChange = (category: string) => {
    if (category === selectedCategory) return;
    
    // Geçiş animasyonu başlat
    setIsTransitioning(true);
    setOpacity(0);
    
    // URL'yi güncelle - scroll: false parametresi sayfanın yukarı kaymasını engeller
    if (category === "Tümü") {
      router.push("/portfolio", { scroll: false });
    } else {
      router.push(`/portfolio?category=${encodeURIComponent(category)}`, { scroll: false });
    }
    
    // Animasyon tamamlandıktan sonra kategoriyi değiştir
    setTimeout(() => {
      setSelectedCategory(category);
      
      // Yeni içeriği göster
      setTimeout(() => {
        setOpacity(1);
        setIsTransitioning(false);
      }, 50);
    }, 300); // Bu süre, aşağıdaki CSS geçiş süresine uygun olmalı
  };
  
  // Filtrelenmiş projeleri getir
  const filteredProjects = selectedCategory === "Tümü" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  // Proje detaylarını göster
  const showProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setShowModal(true);
  };
  
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Portfolyo
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Her biri özenle tasarlanmış özel mobilya projelerimizden bazıları. İhtiyacınıza uygun tasarımlar için ilham alın.
          </p>
        </div>
      </div>
      
      {/* Projeler */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Kategori Filtreleme */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button 
              key={category} 
              className={`px-5 py-2 rounded-full font-medium transition duration-300 ${
                selectedCategory === category 
                  ? "bg-amber-600 text-white" 
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
              onClick={() => handleCategoryChange(category)}
              disabled={isTransitioning}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Proje Galerisi */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ease-in-out min-h-[500px]"
          style={{ opacity }}
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-64">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <p>Müşteri: {project.client}</p>
                    <p>Tarih: {project.date}</p>
                  </div>
                  <button 
                    className="text-amber-600 font-medium hover:text-amber-700 flex items-center"
                    onClick={() => showProjectDetails(project)}
                  >
                    Detaylar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Proje bulunamadıysa */}
        {filteredProjects.length === 0 && !isTransitioning && (
          <div className="text-center py-12 transition-opacity duration-300 ease-in-out" style={{ opacity }}>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Bu kategoride proje bulunamadı</h3>
            <p className="text-gray-600">Lütfen başka bir kategori seçin veya tüm projeleri görüntüleyin.</p>
          </div>
        )}
      </div>
      
      {/* İletişim CTA */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hayalinizdeki Mobilyayı Beraber Tasarlayalım
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Siz de özel tasarım mobilyalarla yaşam alanlarınızı dönüştürmek istiyorsanız, hemen iletişime geçin.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition"
          >
            İletişime Geçin
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Proje Detay Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-80 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <div className="mb-2">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proje Detayları</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.detailText}</p>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1"><span className="font-medium">Müşteri:</span> {selectedProject.client}</p>
                    <p className="mb-1"><span className="font-medium">Tarih:</span> {selectedProject.date}</p>
                    <p className="mb-1"><span className="font-medium">Kategori:</span> {selectedProject.category}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Özellikler</h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Yüksek kalite işçilik</li>
                    <li>Özel tasarım detaylar</li>
                    <li>Dayanıklı malzemeler</li>
                    <li>Müşteri ihtiyaçlarına göre özelleştirme</li>
                    <li>Profesyonel montaj</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition"
                >
                  Benzer Proje Talep Et
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 