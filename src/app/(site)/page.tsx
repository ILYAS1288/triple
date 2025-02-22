import HeroSection from '../../components/HeroSection';
import ServiceCard from '../../components/SerivceCard';

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Consulting"
              description="Professional consulting services"
            />
            <ServiceCard 
              title="Development"
              description="Custom software solutions"
            />
            <ServiceCard 
              title="Training"
              description="Technical training programs"
            />
          </div>
        </div>
      </section>
    </>
  );
}