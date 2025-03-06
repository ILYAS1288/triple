// src/app/services/page.tsx
import Image from 'next/image';
import { AcademicCapIcon, BookOpenIcon, ComputerDesktopIcon, UserGroupIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function EducationServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src="/images/2.jpg"
          alt="Education Services"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Educational Services
            </h1>
            <p className="text-xl text-gray-200">
              Comprehensive learning solutions for individuals and organizations
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Educational Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <AcademicCapIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vocational Training Programs</h3>
              <p className="text-gray-600 mb-4">
                Industry-relevant skills development in emerging technologies and trades
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Technical skill certification</li>
                <li>Apprenticeship opportunities</li>
                <li>Career placement support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ComputerDesktopIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Digital Literacy Initiatives</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive technology education for all age groups
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Basic computer skills</li>
                <li>Internet safety training</li>
                <li>Software proficiency courses</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <UserGroupIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Corporate Training</h3>
              <p className="text-gray-600 mb-4">
                Workforce development programs for organizations
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Leadership development</li>
                <li>Technical upskilling</li>
                <li>Compliance training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center"> 
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Specialized Learning Programs</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <GlobeAltIcon className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Online Learning Platform</h3>
                    <p className="text-gray-600">
                      Access to our comprehensive digital learning environment with 500+ courses
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ChartBarIcon className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Skill Assessment</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation and personalized learning paths
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpenIcon className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Teacher Training</h3>
                    <p className="text-gray-600">
                      Professional development programs for educators
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/3.jpg"
                alt="Learning Programs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Learning Methodology</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-4">70%</div>
              <h3 className="text-xl font-semibold mb-2">Practical Training</h3>
              <p className="text-gray-200">Hands-on, project-based learning</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-4">25%</div>
              <h3 className="text-xl font-semibold mb-2">Peer Learning</h3>
              <p className="text-gray-200">Collaborative group activities</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-4">5%</div>
              <h3 className="text-xl font-semibold mb-2">Theory</h3>
              <p className="text-gray-200">Foundational knowledge sessions</p>
            </div>
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Learning Journey Today</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Join thousands of successful learners and transform your career
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors text-lg font-semibold"
            >
              Enroll Now
            </a>
            <a
              href="/courses"
              className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold border border-primary"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}