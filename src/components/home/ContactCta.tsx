import Link from "next/link";

const ContactCta = () => {
  return (
    <section className="py-16 bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hayalinizdeki Mobilyaları Birlikte Tasarlayalım
            </h2>
            <p className="text-white text-lg max-w-2xl">
              Özel tasarım mobilyalar için hemen iletişime geçin. Ön danışmanlık hizmetimiz ücretsizdir.
            </p>
          </div>
          <div>
            <Link 
              href="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-amber-600 font-semibold px-8 py-4 rounded-md shadow-lg transition-colors duration-300"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta; 