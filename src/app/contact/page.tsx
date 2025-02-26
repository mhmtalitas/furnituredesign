"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada normalde bir API endpointe form verileri gönderilir
    // Şimdilik sadece simüle ediyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Formu sıfırla
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            İletişim
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Mobilya tasarım projeleriniz için bize ulaşın. Sorularınızı yanıtlamaktan ve hayallerinizdeki mobilyaları gerçeğe dönüştürmekten mutluluk duyarız.
          </p>
        </div>
      </div>
      
      {/* İletişim Bilgileri ve Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">İletişim Bilgilerimiz</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 text-amber-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Adres</h3>
                  <p className="mt-1 text-gray-600">
                    Mobilya Sokak No:123<br />
                    Beşikdüzü, Trabzon<br />
                    Türkiye
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-amber-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Telefon</h3>
                  <p className="mt-1 text-gray-600">+90 555 123 45 67</p>
                  <p className="mt-1 text-gray-600">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-amber-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">E-posta</h3>
                  <p className="mt-1 text-gray-600">info@mobilyatasarim.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 text-amber-600 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Çalışma Saatleri</h3>
                  <p className="mt-1 text-gray-600">
                    Pazartesi - Cuma: 09:00 - 18:00<br />
                    Cumartesi: 10:00 - 15:00<br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sosyal Medya */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Bizi Takip Edin</h3>
              <div className="flex space-x-5">
                <a href="#" className="text-gray-500 hover:text-amber-600 transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-600 transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-600 transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-600 transition">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.878-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* İletişim Formu */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bize Ulaşın</h2>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                <p className="font-medium">Mesajınız başarıyla gönderildi!</p>
                <p>En kısa sürede size dönüş yapacağız.</p>
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                <p className="font-medium">Mesajınız gönderilirken bir hata oluştu.</p>
                <p>Lütfen daha sonra tekrar deneyin veya doğrudan bizi arayın.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Adınız Soyadınız *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-2 border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-posta Adresiniz *
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-2 border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefon Numaranız
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-2 border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Konu
                  </label>
                  <div className="mt-1">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-2 border-gray-400 rounded-md"
                    >
                      <option value="">Lütfen Seçin</option>
                      <option value="Özel Tasarım">Özel Tasarım</option>
                      <option value="Danışmanlık">Danışmanlık</option>
                      <option value="Mobilya Yenileme">Mobilya Yenileme</option>
                      <option value="Fiyat Teklifi">Fiyat Teklifi</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız *
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-500 focus:border-amber-500 border-2 border-gray-400 rounded-md"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Harita */}
      <div className="mt-16 relative h-96 w-full">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <p className="text-lg text-gray-900">Burada Google Maps veya başka bir harita servisi entegre edilebilir</p>
        </div>
      </div>
      
      {/* Showroom Görselleri */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Showroom&apos;umuz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2070&auto=format&fit=crop"
              alt="Showroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop"
              alt="Showroom"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
              alt="Showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 