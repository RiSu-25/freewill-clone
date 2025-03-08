import "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-16 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-10 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">
            Why is FreeWill <span className="text-pink-600">free?</span>
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            obcaecati provident sunt assumenda, necessitatibus ducimus harum
            modi! Nemo porro quo itaque vel ducimus excepturi eum.
          </p>
          <p className="text-gray-700 mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A harum
            eum aliquam nam doloribus saepe fuga pariatur? Velit, dolorum. Iste.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition">
            Make your free will today
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-[1px] h-[300px] bg-gray-300"></div>
        </div>

        <div className="space-y-6 md:text-left text-left">
          <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-gray-300 md:hidden"></div>

          <div className="flex items-center space-x-4 relative">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
              <img className="w-7 h-7" src={assets.no_card} alt="No Card" />
            </div>
            <p className="text-gray-700 font-medium">
              100% free — no credit card required
            </p>
          </div>

          <div className="flex items-center space-x-4 relative">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
              <img className="w-7 h-7" src={assets.support} alt="Support" />
            </div>
            <p className="text-gray-700 font-medium">Supported by nonprofits</p>
          </div>

          <div className="flex items-center space-x-4 relative">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
              <img className="w-7 h-7" src={assets.heart_lock} alt="Heart Lock" />
            </div>
            <p className="text-gray-700 font-medium">
              We never sell your personal data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
