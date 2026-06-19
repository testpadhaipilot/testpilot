import './globals.css';

export const metadata = {
  title: 'Padhai Pilot | Premium Exam Prep',
  description: 'Dream Big. Test Smart. Achieve More.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
