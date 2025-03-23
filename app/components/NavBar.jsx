"use client";
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

export default function NavBar() {
  const { userId } = useAuth();

  return (
    <nav className="bg-teal-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <section className="flex items-center justify-between w-full sm:w-auto">
          <section className="flex items-center justify-start space-x-4 sm:space-x-6 w-full">
            <Link href="/" className="text-lg sm:text-xl">Home</Link>
            <Link href="/about" className="text-lg sm:text-xl">About</Link>
            <Link href="/contact" className="text-lg sm:text-xl">Contact</Link>
          </section>
        </section>

        <section className="flex items-center space-x-4 sm:space-x-6">
          {!userId ? (
            <>
              <Link href="/sign-in" className="text-white text-sm sm:text-xl hover:text-gray-300">
                Sign in
              </Link>
              <Link href="/sign-up" className="text-white text-sm sm:text-xl hover:text-gray-300">
                Sign up
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="text-white text-sm sm:text-xl hover:text-gray-300">
                Profile
              </Link>
              <UserButton className="flex" afterSignOutUrl="/" />
            </>
          )}
        </section>
      </div>
    </nav>
  );
}
