import Link from 'next/link';

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">P</div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Padhai<span className="text-blue-600">Pilot</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <input type="text" placeholder="Search mock tests..." className="bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
            <Link href="/exams" className="text-sm font-semibold text-slate-600 hover:text-blue-600">Exams</Link>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md transition-all">Login / Signup</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
