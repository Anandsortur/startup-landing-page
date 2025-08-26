export default function About() {
  return (
    <>
      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to simplify campus club and event management,
              bringing students and organizers together on one seamless
              platform.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/media/about.webp"
              alt="Mission illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/media/vision.webp"
              alt="Vision illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision smarter campuses where technology enhances
              participation, streamlines communication, and builds stronger
              communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              We believe in inclusivity, transparency, and innovation—ensuring
              every student has equal access to opportunities and resources.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/media/values.webp"
              alt="Values illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img
              src="/media/impact.webp"
              alt="Impact illustration"
              className="rounded-2xl shadow-lg w-full max-w-md"
              loading="lazy"
            />
          </div>
          {/* Right: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600">
              From boosting event participation to fostering leadership, our
              platform empowers students and creates a lasting positive impact
              on campus life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
