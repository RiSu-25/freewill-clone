import 'react';
import { assets } from '../assets/assets';
import Media from '../components/Media';
import Others from '../components/Others';
import Trusted from '../components/Trusted';
import About from '../components/About';
import Work from '../components/Work';
import Legacy from '../components/Legacy';
import Number from '../components/Number';
import Question from '../components/Question';
import Badge from '../components/Badge';

const Home = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row items-center justify-center pt-25 pb-10 px-6 md:px-5 lg:px-10 bg-white'>

      <div className='w-full md:w-[450px] text-left md:text-left'>
        <h1 className='text-2xl md:text-4xl font-semibold text-gray-900'>
          Get peace of mind
        </h1>
        <p className='mt-4 text-gray-700 text-md'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia totam vero!
          {" "}<a href="#" className='text-blue-600 underline'> Why is it free?</a>
        </p>
        <button className='mt-6 px-4 py-1 bg-pink-700 text-white font-medium text-lg rounded-sm hover:bg-pink-50 transition'>
          Make my will
        </button>
        <hr className='mt-6 border-gray-300' />
        <p className='mt-4 text-gray-700'>
          Lorem ipsum dolor sit amet consectetur {" "}
          <a href="#" className='text-blue-600 underline'> Lorem ipsum dolor sit amet!</a>
        </p>
      </div>

      <div className='relative flex justify-end items-center px-5 md:pr-10 mt-10 md:mt-0'>
        <div className='relative'>
          <img className='w-[400px] h-auto' src={assets.image1} alt="" />

          <div className="absolute -top-0 -left-14 md:-top-0 md:-left-20 w-14 h-14 md:w-20 md:h-20 bg-pink-300"></div>

          <div className="absolute bottom-0 -right-14 md:-right-20 flex flex-col items-end">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-orange-200"></div>
            <div className="flex">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-green-200"></div>
              <div className="w-14 h-14 md:w-20 md:h-20 bg-blue-200"></div>
            </div>
            </div>
          </div>
      </div>
    </section>

    <Media />
    <Others />
    <Trusted />
    <About />
    <Work />
    <Legacy />
    <Number />
    <Question />
    <Badge />
    
    </>
   
  );
}

export default Home;
