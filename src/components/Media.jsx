import 'react';
import { assets } from '../assets/assets';

const Media = () => {
  return (
    <div className='bg-gray-200 py-5 mt-10'>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-gray-500 text-[12px] font-semibold uppercase mb-2 text-left'>Media Mentions</h2>
        <hr className='border-t border-gray-300 mb-4 w-32 shadow-md' />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 items-center justify-center'>
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.aarp} alt='AARP' />
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.new_york} alt='New York Times' />
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.yahoo} alt='Yahoo' />
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.forbes} alt='Forbes' />
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.good_house} alt='Good Housekeeping' />
          <img className='h-5 sm:h-6 md:h-8 lg:h-9 opacity-60 hover:opacity-100 transition mx-auto' src={assets.marie} alt='Marie Claire' />
        </div>
      </div>
    </div>
  );
}

export default Media;
