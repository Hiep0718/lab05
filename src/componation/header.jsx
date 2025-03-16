import React from "react";
export default function Header (){
  return (
    <header className="flex items-center justify-between p-2 bg-white shadow-md w-7xl  ">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505119/chefify_fba9ar.png"
          alt="Chefify Logo"
          className="h-10"
        />

        {/* Search Bar */}
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Salad"
            className="w-full p-2 pl-10 border-0 rounded-xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <img
            src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741504590/search_reepez.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
          />
        </div>
      </div>

      {/* Navigation & User Avatar */}
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-pink-600">What to cook</a>
          <a href="#" className="hover:text-pink-600">Recipes</a>
          <a href="#" className="hover:text-pink-600">Ingredients</a>
          <a href="#" className="hover:text-pink-600">Occasions</a>
          <a href="#" className="hover:text-pink-600">About Us</a>
        </nav>

        {/* Avatar */}
        <img
          src="https://res.cloudinary.com/dzg9a53dm/image/upload/v1741505119/avatar_jnpmzk.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full border-2 border-pink-500"
        />
      </div>
    </header>
  );
};

