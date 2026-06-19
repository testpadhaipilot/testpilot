import Link from 'next/link';

type Exam = { id: string; title: string; desc: string; icon: string; colorClass: string };

export default function ExamCard({ exam }: { exam: Exam }) {
  return (
    <Link href={`/exams/${exam.id}`}>
      <div className="block p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${exam.colorClass}`}>
          {exam.icon}
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-2">{exam.title}</h2>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">{exam.desc}</p>
        <div className="flex items-center text-blue-600 font-semibold text-sm">
          Explore Exam <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}
