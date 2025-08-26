export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-center p-8">
      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
        Campus Club & Event Manager
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        A smart platform to manage campus events, streamline club activities, and
        enable AI-powered smart attendance tracking.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </main>
  );
}
