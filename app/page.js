"use client";

import React from "react";
import { useUser } from "@clerk/nextjs"; 
import Image from "next/image"; 

export default function Home() {
  const { isSignedIn } = useUser(); 

  return (
    <div className="flex flex-col items-center justify-center px-8 pb-10 gap-12 sm:px-5 bg-white">
      <section className="text-center mt-4 mb-6 px-4 sm:px-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Find Your Perfect Pet, and Experience Unconditional Love!
        </h1>
        <p className="text-xl text-gray-700 mb-4">
          Looking for a loyal companion, a playful partner, or a cuddly friend? Whether you're a passionate dog lover, a proud cat parent, or a rabbit enthusiast, we've got the perfect pet waiting for you to give them a forever home!
        </p>
        <p className="text-lg text-gray-600">
          Explore each pet’s unique personality and discover how they can brighten your life! 🐾
        </p>
      </section>

      <section className="grid gap-8 sm:grid-cols-3 mx-2 w-full justify-items-center">
        {/* Dog Image */}
        <section className="card">
          <Image
            src="/assets/dog.jpg" 
            alt="A cute dog waiting for adoption"
            width={440}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center mt-2 text-2xl font-semibold text-gray-800">Adopt a Loyal Dog</h3>
        </section>

        {/* Cat Image */}
        <section className="card">
          <Image
            src="/assets/cat.jpg" 
            alt="A fluffy cat ready to be adopted"
            width={440}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center mt-2 text-2xl font-semibold text-gray-800">Find Your Purrfect Cat</h3>
        </section>

        {/* Rabbit Image */}
        <section className="card">
          <Image
            src="/assets/rabbit.jpg" 
            alt="A cute rabbit looking for a home"
            width={440}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-center mt-2 text-2xl font-semibold text-gray-800">Adopt a Lovable Rabbit</h3>
        </section>
      </section>

      {/* Dashboard Button */}
      <section className="mt-8">
        <button
          className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg transition duration-300 transform hover:bg-teal-500 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
          onClick={() => {
            if (isSignedIn) {
              window.location.href = "/dashboard"; 
            } else {
              alert("Please sign in to view the adoption and services.");
              window.location.href = "/sign-in"; 
            }
          }}
        >
          Find Your Perfect Pet & Services
        </button>
      </section>
    </div>
  );
}
