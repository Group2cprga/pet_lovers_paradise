"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import Card from "../components/Card";

const DashboardPage = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return <h1 className="text-2xl font-bold text-center">Loading...</h1>;

  // Pet cards data
  const petCards = [
    {
      imageSrc: "/assets/dog.jpg",
      altText: "Max",
      title: "Max",
      description: "Loyal"
    },
    {
      imageSrc: "/assets/dog2.jpg",
      altText: "Bella",
      title: "Bella",
      description: "Playful"
    },
    {
      imageSrc: "/assets/cat.jpg",
      altText: "Oliver",
      title: "Oliver",
      description: "Curious"
    },
    {
      imageSrc: "/assets/cat2.jpg",
      altText: "Luna",
      title: "Luna",
      description: "Independent"
    },
    {
      imageSrc: "/assets/rabbit.jpg",
      altText: "Thumper",
      title: "Thumper",
      description: "Energetic"
    },
    {
      imageSrc: "/assets/rabbit2.jpg",
      altText: "Cinnamon",
      title: "Cinnamon",
      description: "Sweet"
    }
  ];

  // Services data
  const serviceCards = [
    {
      imageSrc: "/assets/grooming.jpg",
      altText: "Pet Grooming",
      title: "Pet Grooming",
      description: "Honey's Pet Grooming",
      buttonText: "Book Now"
    },
    {
      imageSrc: "/assets/veterinary.jpg",
      altText: "Veterinary Services",
      title: "Veterinary Care",
      description: "Trusted Veterinary Care",
      buttonText: "Book Now"
    },
    {
      imageSrc: "/assets/petcaregiver.jpg",
      altText: "Pet Caregiver",
      title: "Pet Caregiver",
      description: "Loving Pet Caregiver",
      buttonText: "Book Now"
    }
  ];

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
        {/* Loop through the petCards array */}
        {petCards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>

      {/* Add space before Service Section */}
      <div className="mt-8"></div>

      {/* Service Section */}
      <section className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800">Caring for Your Pet’s Health & Beauty</h3>
      </section>

      {/* Service Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {/* Loop through the serviceCards array */}
        {serviceCards.map((service, index) => (
          <Card
            key={index}
            imageSrc={service.imageSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
          />
        ))}
      </section>
    </main>
  );
};

export default DashboardPage;
