"use client"; 
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-teal-500 py-6 text-white text-center">
      <Link href="/">
        <h1 className="text-4xl font-bold">Pet Lovers' Paradise</h1>
      </Link>
    </header>
  );
}
