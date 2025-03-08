import 'react';
import { assets } from '../assets/assets';

const Work = () => {
  return (
    <div>
      <div className='bg-[#487799] text-white px-6 py-12 md:py-16'>
        <div className='max-w-5xl mx-auto text-left'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-6'>How FreeWill works</h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8'>
            <div>
              <h3 className='text-lg md:text-xl font-semibold'>1. Fill out online</h3>
              <p className='text-base mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti aspernatur porro accusamus quidem veritatis?
              </p>
            </div>
            <div>
              <h3 className='text-lg md:text-xl font-semibold'>2. Print out documents</h3>
              <p className='text-base mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti aspernatur porro accusamus quidem veritatis?
              </p>
            </div>
            <div>
              <h3 className='text-lg md:text-xl font-semibold'>3. Sign and keep safe</h3>
              <p className='text-base mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corrupti aspernatur porro accusamus quidem veritatis?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#2a5474] text-white text-base p-6 md:p-8'>
        <div className='flex flex-row items-center max-w-5xl mx-auto'>
          
          <div className='flex items-center justify-center w-12 h-12 bg-white rounded-full shrink-0 mr-4'>
            <img className='w-6 h-6' src={assets.balance} alt="Balance Icon" />
          </div>
          <p className='text-left'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur accusantium voluptate aliquam repellendus cumque reiciendis sunt maiores quasi, 
            possimus maxime ipsam vel nulla fugit nesciunt aliquid explicabo repudiandae iste tenetur 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste dicta animi cupiditate necessitatibus ex.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
