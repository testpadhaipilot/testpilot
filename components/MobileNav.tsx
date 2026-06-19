import Link from 'next/link';

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 flex justify-around py-2 md:hidden z-50 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <Link href="/" className="flex flex-col items-center text-blue-600">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-bold mt-1">Home</span>
      </Link>
      <Link href="/exams" className="flex flex-col items-center text-slate-500">
        <span className="text-xl">📚</span>
        <span className="text-[10px] font-bold mt-1">Exams</span>
      </Link>
      <Link href="/mock-tests" className="flex flex-col items-center text-slate-500">
        <span className="text-xl">📝</span>
        <span className="text-[10px] font-bold mt-1">Tests</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-slate-500">
        <span className="text-xl">👤</span>
        <span className="text-[10px] font-bold mt-1">Profile</span>
      </Link>
    </nav>
  );
}
