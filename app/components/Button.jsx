import React from "react";
import Link from "next/link";  

const Button = ({ text, link, onClick }) => {
  // If a link is provided, wrap the button in the Link component for routing
  if (link) {
    return (
      <Link href={link}>
        <a
          className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-teal-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          {text}
        </a>
      </Link>
    );
  }

  // If onClick is provided, return a regular button element
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-teal-500 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
    >
      {text}
    </button>
  );
};

export default Button;
