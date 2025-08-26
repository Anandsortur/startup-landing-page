export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-blue-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Mission Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            We aim to simplify how campus events and clubs are managed. By
            combining modern tools with AI-powered attendance tracking, we
            ensure smooth event flow, reduced manual work, and a better
            experience for both organizers and participants.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            With a focus on transparency, collaboration, and efficiency, our
            platform empowers students, volunteers, and faculty to work together
            seamlessly in shaping engaging campus life.
          </p>
        </div>

        {/* Right: Supporting Image / Visual */}
        <div className="flex justify-center">
          <img
            src="/public/media/about.png"
            alt="Mission illustration"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
