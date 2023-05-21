import React from "react";

export const Banner = () => {
  return (
    <div className="flex mt-16 bg-gray-950">
      <div className="flex flex-col text-white mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <h1 className="font-bold text-3xl sm:text-5xl">Only on Netflix</h1>
        </div>
        <div className="mt-5 text-sm sm:text-base ">
          <p className=" md:w-1/2 text-lg font-medium">
            Netflix is the home of amazing original programming that you can’t
            find anywhere else. Movies, TV shows, specials and more, all
            tailored specifically to you.
          </p>
        </div>
      </div>
    </div>
  );
};
