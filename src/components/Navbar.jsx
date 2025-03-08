import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white top-0 w-full z-50 shadow-md'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img className='h-8' src={assets.logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8'>
            <Link to='/individuals' className='text-gray-800 hover:text-pink-700 font-medium'>
              For individuals
            </Link>
            <Link to='/nonprofits' className='text-gray-800 hover:text-pink-700 font-medium'>
              For nonprofits
            </Link>
            <Link to='/advisor' className='text-gray-800 hover:text-pink-700 font-medium'>
              For advisors
            </Link>
            <Link to='/about' className='text-gray-800 hover:text-pink-700 font-medium'>
              About Us
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link to='/login' className='text-gray-600 hover:text-pink-700 font-medium'>
              Log in
            </Link>
            <Link to='/form' className='bg-pink-700 text-white px-4 py-1 rounded-sm hover:bg-pink-800'>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-gray-800 focus:outline-none'>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-md absolute w-full left-0 px-4 py-3'>
          <Link to='/individuals' className='block text-gray-800 py-2 hover:text-pink-700' onClick={() => setIsOpen(false)}>
            For individuals
          </Link>
          <Link to='/nonprofits' className='block text-gray-800 py-2 hover:text-pink-700' onClick={() => setIsOpen(false)}>
            For nonprofits
          </Link>
          <Link to='/advisor' className='block text-gray-800 py-2 hover:text-pink-700' onClick={() => setIsOpen(false)}>
            For advisors
          </Link>
          <Link to='/about' className='block text-gray-800 py-2 hover:text-pink-700' onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to='/login' className='block text-gray-600 py-2 hover:text-pink-700' onClick={() => setIsOpen(false)}>
            Log in
          </Link>
          <Link to='/form' className='block bg-pink-700 text-white text-center py-2 rounded-sm hover:bg-pink-800 mt-2' onClick={() => setIsOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;