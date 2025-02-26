import Hero from "@/components/home/Hero";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import ContactCta from "@/components/home/ContactCta";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedWorks />
      <Services />
      <Testimonials />
      <ContactCta />
    </div>
  );
}
