import 'react';
import { assets } from '../assets/assets';

const products = [
    {
        icon: assets.heart_rate,
        iconBg: 'bg-pink-200',
        title:'Living Will',
        description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem tempora possimus alias dolorem excepturi quo, soluta doloremque obcaecati quam optio quod molestias dolor id.',
        text: 'Learn about living wills',
        link:'#'
    },
    {
        icon: assets.coins,
        iconBg: 'bg-orange-200',
        title:'Durable Financial Power of Attorney (DFPOA)',
        description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem tempora possimus alias dolorem excepturi quo, soluta doloremque obcaecati quam optio quod molestias dolor id.',
        text: 'Learn about DFPOAs',
        link:'#'
    },
    {
        icon: assets.certificate,
        iconBg: 'bg-green-200',
        title:'Beneficiary Designations',
        description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem tempora possimus alias dolorem excepturi quo, soluta doloremque obcaecati quam optio quod molestias dolor id.',
        text: 'Learn about beneficiary designations',
        link:'#'
    },
    {
        icon: assets.chest,
        iconBg: 'bg-blue-200',
        title:'Revocable Living Trusts',
        description:'lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem tempora possimus alias dolorem excepturi quo, soluta doloremque obcaecati quam optio quod molestias dolor id.',
        text: 'Learn about trust',
        link:'#',
        badge: 'Only in California',
    },
]

const Others = () => {
  return (
    <div className="max-w-5xl mx-auto my-12 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Other FreeWill products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div key={index} className="flex items-start space-x-4 p-4">
            <div className={`w-13 h-12 flex items-center justify-center rounded-full ${product.iconBg}`}>
              <img className='w-8' src={product.icon} alt="" />
            </div>
            
            <div className="w-full">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                {product.badge && (
                  <span className="bg-blue-800 text-white text-xs px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <a
                href={product.link}
                className="mt-3 inline-block text-pink-700 border border-pink-700 px-4 py-1 rounded-md text-sm hover:bg-pink-100 transition"
              >
                {product.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Others;
