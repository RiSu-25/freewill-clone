import 'react';
import { assets } from '../assets/assets';

const Badge = () => {
  return (
    <div className='bg-gray-50 py-10 px-6 md:px-12'>
      <div className='max-w-5xl mx-auto flex flex-wrap items-center justify-between'>
        <div>
            <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Try Freewill today</h2>
            <div className='flex flex-wrap gap-4 mt-2 text-gray-600'>
                <div className='flex items-center space-x-2'>
                    <img className='w-4 h-4' src={assets.check} alt="" /> 
                    <span>100% free</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <img className='w-4 h-4' src={assets.check} alt="" /> 
                    <span>100% free</span>
                </div>
            </div>
        </div>

        <div className='flex items-center space-x-10 mt-6 md:mt-0'>
            <button className='bg-pink-600 text-white px-5 py-2 rounded-sm font-medium hover:bg-pink-700'>
                Create a will now-it&apos;s free
            </button>
            <img className='w-15 h-20' src={assets.block} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Badge;
