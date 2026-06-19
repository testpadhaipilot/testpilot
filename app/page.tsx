import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ExamCard from '@/components/ExamCard';
import MobileNav from '@/components/MobileNav';

const popularExams = [
  { id: "jee", title: "JEE Main & Adv", desc: "Top engineering mock tests.", icon: "📐", colorClass: "text-blue-600 bg-blue-100" },
  { id: "neet", title: "NEET UG", desc: "Full-length biology focus.", icon: "🧬", colorClass: "text-green-600 bg-green-100" },
  { id: "upsc", title: "UPSC CSE", desc: "Prelims & Current Affairs.", icon: "🏛️", colorClass: "text-amber-600 bg-amber-100" },
  { id: "ssc", title: "SSC CGL", desc: "Tier 1 & 2 latest pattern.", icon: "📊", colorClass: "text-purple-600 bg-purple-100" }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Popular Exams</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Select your target exam and access personalized mock tests, previous year questions, and curated notes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularExams.map(exam => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <MobileNav />
    </>
  );
}
  
