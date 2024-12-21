import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center items-center text-5xl font-extrabold text-green-500 italic">
        Welcome  To learn Frontend
      </div>

    
      <Link href={'/index'}>
      <div>
        <button className="flex justify-center items-center text-2xl font-medium text-white px-4 py-2 rounded-3xl bg-blue-600">Get Start</button>
      </div>
      </Link>
      
    </div>
  );
}
