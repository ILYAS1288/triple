// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    program: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form  submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <Image
          src="/images/2.jpg"
          alt="Contact Us"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40">
          <div className="max-w-4xl px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Let's shape the future of education together
            </p>
          </div>
        </div>
      </section>

      {/* Contact  Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="flex items-start gap-4">
              <MapPinIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Main Campus</h3>
                <p className="text-gray-600">
                  123 Education Boulevard<br />
                  Knowledge City, KC 12345<br />
                  Khaplu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">
                  Admissions: (123) 456-7890<br />
                  General Inquiries: (123) 456-7891
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <EnvelopeIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">
                  Admissions: admissions@tripleedu.org<br />
                  Support: support@tripleedu.org
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <AcademicCapIcon className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600">
                  Monday-Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 3:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>


          {/* Contact  Form */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                Program of Interest
              </label>
              <select
                id="program"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              >
                <option value="">Select a program</option>
                <option value="vocational">Vocational Training</option>
                <option value="digital">Digital Literacy</option>
                <option value="corporate">Corporate Training</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-semibold"
            >
              Send Message
            </button>
            
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.1234567890123!2d76.34567890123456!3d35.67890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e6a1234567890%3A0xabcdef1234567890!2sKhaplu%2C%20Gilgit-Baltistan%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-md"
      ></iframe>

        </div>
      </div>
    </div>
  );
}