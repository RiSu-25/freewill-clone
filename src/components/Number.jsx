import 'react';

const Number = () => {
  return (
    <section className='mt-20 bg-red-100 py-10 px-5 md:px-15'>
      <div className='max-w-5xl mx-auto flex flex-row items-center justify-around text-center md:text-left'>
        
        <div className='mb-5 md:mb-0'>
            <h2 className='text-6xl md:text-7xl font-semibold text-gray-900 mb-10'>1.2M+</h2>
            <p className='text-gray-600 text-lg'>Wills created</p>
        </div>

        <div className='mb-5 md:mb-0'>
            <h2 className='text-6xl md:text-7xl font-semibold text-gray-900 mb-10'>$11.3B+</h2>
            <p className='text-gray-600 text-lg'>Committed to nonprofits</p>
        </div>
        
      </div>
    </section>
  );
}

export default Number;
