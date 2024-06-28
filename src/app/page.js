import { Meteors } from "@/components/Meteors";
import Link from 'next/link';

export default function Home() {
  const technologies = [
    "Next.js 13+ with App Router",
    "Server Actions",
    "Prisma ORM with SQLite",
    "Magic UI",
    "Tailwind CSS",
    "React Server Components",
    "Server-side Rendering",
    "CRUD Operations"
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="relative z-10 p-8 max-w-3xl w-full flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Next.js Project</h1>
        <p className="text-lg mb-8 font-semibold text-center text-gray-600">
          A modern web application built with cutting-edge technologies
        </p>
        <ul className="space-y-2 mb-8 text-center">
          {technologies.map((tech, index) => (
            <li key={index} className="text-sm font-semibold text-gray-700">{tech}</li>
          ))}
        </ul>
        <Link 
          href="/Posts" 
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors"
        >
          GoalKeeper
        </Link>
      </div>
      <Meteors number={30} />
    </div>
  );
}