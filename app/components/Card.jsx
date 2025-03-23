import React from "react";
import Image from "next/image";

const Card = ({ imageSrc, altText, title, description, buttonText, onClick }) => {
  return (
    <section className="bg-white p-4 rounded-xl shadow-lg">
      <Image
        className="rounded-lg"
        src={imageSrc}
        width={440}
        height={327}
        alt={altText}
      />
      <h2 className="mt-2 text-center text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-center">{description}</p>
      {buttonText && (
        <section className="text-center mt-4">
          <button
            onClick={onClick}
            className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg transition transform hover:bg-teal-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {buttonText}
          </button>
        </section>
      )}
    </section>
  );
};

export default Card;
