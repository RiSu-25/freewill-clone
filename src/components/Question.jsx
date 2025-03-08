import 'react';
import { assets } from '../assets/assets';

const Question = () => {
  return (
    <div className='px-6 py-12 md:px-16 lg:px-24 bg-white'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
            <h2 className='text-3xl md:text-4xl font-semibold text-gray-800'>Frequently asked questions</h2>
        </div>
        <div>
            <h3 className='font-semibold text-md text-gray-800'>
                Can I edit my documents after I&apos;m done ?
            </h3>
            <p className='text-gray-600 text-sm mt-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Porro quaerat, reiciendis iste voluptatem commodi ex!
                Lorem ipsum dolor sit amet.
            </p>
            <h3 className='font-semibold text-md text-gray-700 mt-6'>
                Where can I learn more ?
            </h3>
            <p className='text-gray-600 text-sm mt-2'>
                <a href="#" className='text-blue-500 underline'>
                    Visit the FreeWill blog 
                </a>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className='mt-4 space-y-4'>
                <div className='flex items-center gap-3 p-4 border border-gray-300 rounded-sm shadow-md hover:shadow-md transition'>
                    <img className='w-6 h-6' src={assets.book} alt="" />
                    <p className='text-gray-800 text-sm font-medium hover:text-pink-500'>Estate planing 101</p>
                </div>

                <div className='flex items-center gap-3 p-4 border border-gray-300 rounded-sm shadow-md hover:shadow-md transition'>
                    <img className='w-6 h-6' src={assets.book} alt="" />
                    <p className='text-gray-800 text-sm font-medium hover:text-pink-500'>10 reasons to have a will</p>
                </div>

                <div className='flex items-center gap-3 p-4 border border-gray-300 rounded-sm shadow-md hover:shadow-md transition'>
                    <img className='w-6 h-6' src={assets.book} alt="" />
                    <p className='text-gray-800 text-sm font-medium hover:text-pink-500'>Last will vs. living will</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
