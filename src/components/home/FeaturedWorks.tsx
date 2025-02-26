import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Modern Mutfak Tasarımı",
    description: "Minimalist çizgiler ve doğal malzemelerle tasarlanmış modern mutfak dolabı.",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e97?q=80&w=2070&auto=format&fit=crop",
    category: "Mutfak",
    link: "/portfolio?category=Mutfak"
  },
  {
    id: 2,
    title: "Özel Yatak Odası Mobilyası",
    description: "Doğal ahşabın sıcaklığını, modern çizgilerle buluşturan yatak odası takımı.",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop",
    category: "Yatak Odası",
    link: "/portfolio?category=Yatak Odası"
  },
  {
    id: 3,
    title: "Lüks Oturma Odası",
    description: "Konfor ve estetiğin bir araya geldiği özel tasarım oturma odası.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop",
    category: "Oturma Odası",
    link: "/portfolio?category=Oturma Odası"
  },
  {
    id: 4,
    title: "Şık Ofis Mobilyaları",
    description: "Çalışma verimliliğini artıran ergonomik ve şık ofis mobilyaları.",
    image: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?q=80&w=2070&auto=format&fit=crop",
    category: "Ofis",
    link: "/portfolio?category=Ofis"
  }
];

const FeaturedWorks = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Öne Çıkan Çalışmalarımız
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Her mekan için özel olarak tasarlanan, kalite ve estetiği buluşturan mobilya çözümlerimiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
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
                <Link 
                  href={project.link}
                  className="text-amber-600 font-medium hover:text-amber-700 flex items-center"
                >
                  Detayları İncele
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition"
          >
            Tüm Projelerimizi Görün
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks; 