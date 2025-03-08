import "react";
import { assets } from "../assets/assets";

const Legacy = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center pt-25 pb-20 px-6 md:px-5 lg:px-10 bg-white mt-10">
      <div className="w-full md:w-[450px] text-left md:text-left">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Leave a lasting legacy
        </h1>
        <p className="mt-4 text-gray-700 text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia Lorem ipsum dolor sit amet.
          totam vero!
        </p>
        <p className="mt-2 text-gray-700 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae, saepe ipsum praesentium libero iure natus tenetur quam repudiandae nulla aliquam deleniti cumque ex quos ducimus quia exercitationem.
        </p>
        <button className="mt-6 px-4 py-1 bg-pink-700 text-white font-medium text-lg rounded-sm hover:bg-pink-50 transition">
          Make my will today
        </button>
      </div>

      <div className="relative flex justify-end items-center px-5 md:pr-10 mt-10 md:mt-0">
        <div className="relative">
          <img className="w-[450px] h-auto" src={assets.image3} alt="" />

          <div className="absolute -top-0 -right-14 md:-top-16 md:right-0 w-65 h-16 md:w-68 md:h-16 bg-gray-300"></div>

          <div className="absolute bottom-0 -right-14 md:-bottom-16 md:right-0 w-65 h-16 md:w-68 md:h-16 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
