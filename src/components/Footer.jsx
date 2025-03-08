import 'react';
import { assets } from '../assets/assets'
import { CiFacebook, CiLinkedin } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className='text-gray-700 px-6 py-10 md:px-20 lg:px-32'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>

            <div>
                <img className='h-10' src={assets.logo} alt="" />
            </div>

            <div>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>FOR INDIVIDUALS</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='hover:text-pink-600 cursor-pointer'>Products</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Donate stock</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Donate crypto</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Glossary</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Blog</li>
                    <li className='hover:text-pink-600 cursor-pointer'>FAQ</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Sitemap</li>
                </ul>
            </div>

            <div>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>FOR NONPROFITS</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='hover:text-pink-600 cursor-pointer'>For nonprofits</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Resources</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Case Studies</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Nonprofit webinars</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Request a demo</li>
                </ul>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>FOR LAWYERS</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='hover:text-pink-600 cursor-pointer'>Support for T&E lawyers</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Become a FreeWill Fellow</li>
                </ul>
            </div>

            <div className='max-w-5xl '>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>ABOUT US</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='hover:text-pink-600 cursor-pointer'>Who we are</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Careers</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Security</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Accessibility</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Press</li>
                </ul>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>CONTACT US</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='hover:text-pink-600 cursor-pointer'>Help Center</li>
                    <li className='hover:text-pink-600 cursor-pointer'>Contact us</li>
                </ul>
                <h3 className='text-sm font-semibold text-[#487799] mb-2'>FOLLOW US</h3>
                <ul className='space-y-1 text-sm'>
                    <li className='flex items-center space-x-2 hover:text-pink-600'>
                        <CiFacebook className='text-gray-600 text-xl hover:text-pink-600' />
                        <a href="#">Facebook</a>
                    </li>
                    <li className='flex items-center space-x-2 hover:text-pink-600'>
                        <CiLinkedin className='text-gray-600 text-xl hover:text-pink-600' />
                        <a href="#">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>

        <hr className='border-t border-gray-300 my-6' />

        <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-6 md:space-y-0'>

            <div className='flex space-x-4 md:order-2'>
                <img className='h-10' src={assets.trust_pilot} alt="" />
                <img className='h-10' src={assets.bbb} alt="" />
                <img className='h-10' src={assets.soc} alt="" />
            </div>

            <div className='md:w-3/4 text-sm text-center md:text-left text-gray-600 md:order-1'>
                <p>
                    Copyright &copy; 2025 FreeWill clone., Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Enim cupiditate ipsam velit natus ipsa voluptatibus, ut, provident earum odio facere cum eum rem. 
                    Laboriosam voluptatem a voluptates libero perferendis obcaecati quisquam quos ad illum, quam magni sed, 
                    incidunt earum id quidem provident atque recusandae necessitatibus.
                </p>
                <p className='mt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, corrupti. Numquam rerum voluptatibus corporis temporibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, commodi.
                </p>
                <p className='mt-2'>
                    <a href="#" className='text-blue-600 underline'>Terms of Service </a>
                    {" "} & {" "}
                    <a href="#" className='text-blue-600 underline'>Privacy Notice</a>
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
