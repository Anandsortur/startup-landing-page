export default function Features() {
  const features = [
    {
      title: "Event Management",
      description:
        "Easily create, update, and manage campus events with a user-friendly interface.",
      icon: "🎉",
    },
    {
      title: "Club Collaboration",
      description:
        "Streamline communication and collaboration among clubs and members.",
      icon: "🤝",
    },
    {
      title: "Smart Attendance",
      description:
        "AI-powered smart attendance tracking with QR codes and real-time updates.",
      icon: "📊",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Track participation, engagement, and event success with visual insights.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Powerful Features for Smarter Campus Management
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore the tools designed to simplify your campus life, from event
          planning to AI-powered attendance tracking.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
