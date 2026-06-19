import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-slate-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 border border-blue-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          New Target Batches Live
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-slate-900">
          Dream Big. <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Test Smart.</span> Achieve More.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 mb-10 font-medium">India's most trusted exam prep platform. Experience real CBT interfaces and expert-curated content.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/mock-tests" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform">
            Start a Mock Test
          </Link>
        </div>
      </div>
    </section>
  );
}
