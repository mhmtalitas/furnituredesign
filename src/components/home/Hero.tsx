import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* Background image from Unsplash */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70 z-10"></div>
          <div className="w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop"
              alt="Lüks mobilya"
              fill
              priority
              className="object-cover brightness-75"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 px-4 py-32 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <div className="text-center sm:text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            <span className="block">Hayalinizdeki Mobilyalar,</span>
            <span className="block text-amber-400">Evinizde Hayat Buluyor</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-100 max-w-2xl">
            Özel tasarım mobilyalarla yaşam alanlarınızı dönüştürüyoruz. Her bir parça, sizin tarzınızı ve ihtiyaçlarınızı yansıtacak şekilde özenle tasarlanıyor.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-start justify-center">
            <Link href="/portfolio" className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md text-lg shadow-lg transition duration-300 text-center">
              Çalışmalarımızı Keşfedin
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md text-lg shadow-lg transition duration-300 text-center">
              İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 