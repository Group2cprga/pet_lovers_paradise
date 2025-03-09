"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";


const DashboardPage = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return <h1 className="text-2xl font-bold text-center">Loading...</h1>;

  return (
    <main className="flex flex-col items-center justify-center max-w-full py-8">
      <section className="p-4 font-bold my-5 text-center">
        <h1 className="text-3xl font-bold tracking-wide mb-4">
          Welcome,{" "}
          <span className="text-teal-600">{user?.firstName} {user?.lastName || "Guest"}</span>!
          <br />
          This is a lovely place for pet lovers!
        </h1>
      </section>

      {/* Pet Overview Section */}
      <section className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Furry Friends Looking for a Home</h3>
      </section>

      {/* Pet Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        <section className="card">
          <Image className="card-image" src="/assets/dog.jpg" width={440} height={327} alt="Max" />
          <h2 className="card-title">Max</h2>
          <p className="card-text">Loyal</p>
        </section>

        <section className="card">
          <Image className="card-image" src="/assets/dog2.jpg" width={440} height={327} alt="Bella" />
          <h2 className="card-title">Bella</h2>
          <p className="card-text">Playful</p>
        </section>

        <section className="card">
          <Image className="card-image" src="/assets/cat.jpg" width={440} height={327} alt="Oliver" />
          <h2 className="card-title">Oliver</h2>
          <p className="card-text">Curious</p>
        </section>

        <section className="card">
          <Image className="card-image" src="/assets/cat2.jpg" width={440} height={327} alt="Luna" />
          <h2 className="card-title">Luna</h2>
          <p className="card-text">Independent</p>
        </section>

        <section className="card">
          <Image className="card-image" src="/assets/rabbit.jpg" width={440} height={327} alt="Thumper" />
          <h2 className="card-title">Thumper</h2>
          <p className="card-text">Energetic</p>
        </section>

        <section className="card">
          <Image className="card-image" src="/assets/rabbit2.jpg" width={440} height={327} alt="Cinnamon" />
          <h2 className="card-title">Cinnamon</h2>
          <p className="card-text">Sweet</p>
        </section>
      </section>

      {/* Add space before Service Section */}
      <div className="mt-8"></div>

      {/* Service Section */}
      <section className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Caring for Your Pet’s Health & Beauty</h3>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {/* Pet Grooming Card */}
        <section className="card bg-white p-4 rounded-xl shadow-lg">
          <Image
            className="card-image rounded-lg"
            src="/assets/grooming.jpg"
            width={440}
            height={327}
            alt="Pet Grooming"
          />
          <h2 className="card-title mt-2 text-center text-xl font-semibold text-gray-800">Pet Grooming</h2>
          <p className="text-center">Honey's Pet Grooming</p>
          <section className="text-center mt-4">
            <button className="button">
              Book Now
            </button>
          </section>
        </section>

        {/* Veterinary Card */}
        <section className="card bg-white p-4 rounded-xl shadow-lg">
          <Image
            className="card-image rounded-lg"
            src="/assets/veterinary.jpg"
            width={440}
            height={327}
            alt="Veterinary Services"
          />
          <h2 className="card-title mt-2 text-center text-xl font-semibold text-gray-800">Veterinary Care</h2>
          <p className="text-center">Trusted Veterinary Care</p>
          <section className="text-center mt-4">
            <button className="button">
              Book Now
            </button>
          </section>
        </section>

        {/* Pet Caregiver Card */}
        <section className="card bg-white p-4 rounded-xl shadow-lg">
          <Image
            className="card-image rounded-lg"
            src="/assets/petcaregiver.jpg"
            width={440}
            height={327}
            alt="Pet Caregiver"
          />
          <h2 className="card-title mt-2 text-center text-xl font-semibold text-gray-800">Pet Caregiver</h2>
          <p className="text-center">Loving Pet Caregiver</p>
          <section className="text-center mt-4">
            <button className="button">
              Book Now
            </button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default DashboardPage;
