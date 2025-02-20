import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 md:px-40 shadow-2xl h-16">
      <div
        className="flex justify-between text-center
items-center
 p-5 text-xl italic "
      >
        <h2 className="text-white font-bold text-3xl italic items-center
">
          WORD TO <span className="text-pink-400">PDF</span>
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
