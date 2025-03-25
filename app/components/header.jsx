"use client"; 
import Link from 'next/link';
import { Rubik } from "next/font/google";

const rubikFont = Rubik({
  subsets:["latin"],
  weight:"900",
  variable:"--font-rubik",
});

export default function Header() {
  return (
    <div className={`${rubikFont.variable}`}>
    <header className="bg-teal-500 py-6 text-white text-center">
      <Link href="/">
        <h1 className={'text-4xl font-bold font-head'}>Pet Lovers' Paradise</h1>
      </Link>
    </header>
    </div>
  );
}
