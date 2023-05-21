import React from "react";

export const Navbar = () => {
  return (
   <div className="flex justify-between fixed top-0 w-full mx-auto bg-black h-16 sm:h-20 md:h-16 lg:h-16">
  <img
    className="fixed top-5  left-2 sm:top-5 sm:left-3 md:top-4 md:left-4 lg:top-5 lg:left-5 w-28 sm:w-24 md:w-28"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
    alt="logo"
  />
  <div className="fixed top-2 right-2 text-xs text-white p-4 flex items-center font-medium mb-3">
    <p className="hidden sm:block mr-4 font-semibold">UNLIMITED TV SHOWS & MOVIES</p>
    <button className="ml-3 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded  ">JOIN NOW</button>
    <button className="ml-3 border border-white text-white py-2 px-4 rounded ">SIGN IN</button>
  </div>
</div>

  
  );
};
