export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-xl">
        P
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
        Welcome to <span className="text-blue-600">Padhai Pilot</span>
      </h1>
      <p className="text-lg text-slate-600 mb-8 max-w-lg">
        Your Next.js + Tailwind + Firebase architecture is successfully set up and live!
      </p>
      <div className="animate-pulse px-6 py-2 bg-green-100 text-green-700 font-bold rounded-full border border-green-300">
        System 100% Secure & Active
      </div>
    </main>
  );
}
