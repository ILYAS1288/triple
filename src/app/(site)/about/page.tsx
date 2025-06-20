
import Image from 'next/image';
import { BookOpenIcon, AcademicCapIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src="/images/2.jpg"
          alt="Education Initiative"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transforming Through Education
            </h1>
            <p className="text-xl text-gray-200">
              Empowering communities with knowledge and skills for sustainable development
            </p>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Educational Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AcademicCapIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vocational Training</h3>
              <p className="text-gray-600">
                Practical skill development programs in emerging technologies and trades
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpenIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Literacy</h3>
              <p className="text-gray-600">
                Comprehensive computer and internet education for all age groups
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <UsersIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Learning</h3>
              <p className="text-gray-600">
                Collaborative learning hubs and peer-to-peer knowledge sharing
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Learning Community"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Educational Values</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Inclusive Access</h3>
                  <p className="text-gray-600">
                    Ensuring education opportunities for all regardless of background or ability
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
                  <p className="text-gray-600">
                    Focus on real-world application and hands-on experience
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold mb-2">Lifelong Learning</h3>
                  <p className="text-gray-600">
                    Supporting continuous personal and professional development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Educational Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-200">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-200">Learning Centers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-200">Employment Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-200">Partner Institutions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}