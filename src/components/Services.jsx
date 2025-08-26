import React from "react";

export default function Services() {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 - Event Management */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src="/media/events.webp"
                alt="Event Management"
                className="w-full h-40 object-cover block"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Event Management</h3>
                <p className="text-gray-600">
                  Organize and track campus events effortlessly with scheduling,
                  announcements, and participant management tools.
                </p>
              </div>
            </div>

            {/* Service 2 - Registration */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src="/media/registration.webp"
                alt="Registration"
                className="w-full h-40 object-cover block"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Easy Registration
                </h3>
                <p className="text-gray-600">
                  Streamline event registrations with a seamless process for
                  students and organizers, featuring digital forms and instant
                  confirmations.
                </p>
              </div>
            </div>

            {/* Service 3 - Networking Hub */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
              <img
                src="/media/networking.webp"
                alt="Networking Hub"
                className="w-full h-40 object-cover block"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Networking Hub</h3>
                <p className="text-gray-600">
                  Connect students, organizers, and clubs through a digital hub
                  that encourages collaboration, partnerships, and community
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
