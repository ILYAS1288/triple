// src/components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-10rem)] flex items-center">
      {/* Background Image with Overlay */}
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.jpg"
          alt="Triple Organization Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl ml-0 lg:ml-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-left">
            Triple Organization
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 text-left">
           Works to ensure that all children have access to quality education, regardless of their background or circumstances. Provides educational resources, supports teacher training, and promotes inclusive education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}