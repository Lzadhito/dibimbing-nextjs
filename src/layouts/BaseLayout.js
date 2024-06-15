import Link from "next/link";

export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen">
      <nav className="p-5 w-full bg-green-200 text-black">
        <Link href="/">
          <h1 className="text-xl font-bold uppercase">Restoran Dibimbing</h1>
        </Link>
      </nav>
      <div className="p-8 bg-gray-900 min-h-screen h-screen">{children}</div>
    </div>
  );
}
