import 'react';
import { assets } from '../assets/assets';

const Trusted = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center pt-16 pb-10 px-4 sm:px-6 md:px-10 lg:px-20 bg-white max-w-screen-xl mx-auto gap-10 lg:gap-16">
      
      <div className="relative w-full md:w-1/2 flex justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="absolute -top-10 left-38 md:-top-10 md:left-16 w-12 h-12 bg-green-200 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
        <div className="absolute top-6 right-37.5 md:top-10 md:right-16 w-12 h-12 bg-red-200 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10"></div>
        
        <div className="absolute -bottom-10 left-37.5 md:-bottom-10 md:left-16 flex flex-row">
          <div className="w-12 h-12 bg-orange-200 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
          <div className="w-12 h-12 bg-orange-200 sm:w-16 sm:h-16 md:w-20 md:h-20"></div>
        </div>

        <img className="relative w-[400px] md:w-[400px] lg:w-[400px]" src={assets.image2} alt="Trusted" />
      </div>

      <div className="w-full md:w-1/2 md:text-left px-4 sm:px-6 mt-5">
        <h2 className="text-2xl sm:text-3xl font-semibold">Trusted by thousands</h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus sapiente nisi, maxime atque excepturi, animi, facilis voluptate et rerum saepe veniam iusto mollitia? Eos cum est delectus doloremque sequi suscipit?
        </p>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">
          Lorem, ipsum dolor {' '}
          <a href="#" className="text-blue-500 underline">
            Lorem ipsum dolor sit amet.
          </a>{' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, sit.
        </p>
      </div>
    </section>
  );
}

export default Trusted;
