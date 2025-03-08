import { useState } from 'react';
import { assets } from '../assets/assets';
import { IoMdClose } from 'react-icons/io';

const steps = [
    { id: 1, title: "Basics", 
        subMenu: ["Getting started", "Basic details", "Marital status"] },
    { id: 2, title: "Nominees" },
    { id: 3, title: "Assets" },
    { id: 4, title: "Residuary" },
    { id: 5, title: "Gifts" },
    { id: 6, title: "Funeral" },
    { id: 7, title: "Provisions" },
    { id: 8, title: "Review" }
];

const Form = () => {

    const [selectedStep, setSelectedStep] = useState (null);

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        preferredName: '',
        email: '',
        agree: false,
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.agree) newErrors.agree = "You must agree to the terms";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form submitted", formData);
            setSelectedStep(1);
        }
    };

    return (
        <div className='w-full min-h-screen bg-white p-4 flex flex-col items-center'>
            <div className='w-full flex justify-between items-center px-6'>
                <div className='flex items-center space-x-2'>
                    <img className='h-8' src={assets.logo} alt="Logo" />
                </div>
                <IoMdClose className='h-6 w-6 hover:text-pink-500 cursor-pointer' />
            </div>
            
            <h2 className='text-lg text-[#477889] font-medium my-3 text-center'>LAST WILL & TESTAMENT</h2>
            
            <div className='w-full bg-gray-200 p-3 overflow-visible'>
                <div className='flex justify-center items-center space-x-6 min-w-max relative'>
                    {steps.map((step) => (
                        <div key={step.id} className='relative flex flex-col items-center'>
                            <div onClick={() => setSelectedStep(step.id)} 
                                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 cursor-pointer ${selectedStep === step.id ? 'bg-[#478899] text-white' : 'border-gray-400 text-gray-400'}`}>
                                    {step.id}
                            </div>
                            <span className={`text-sm ${selectedStep === step.id ? 'text-black font-semibold' : 'text-gray-400'}`}>
                                {step.title}
                            </span>
                            {step.subMenu && selectedStep === step.id && (
                            <div className="absolute top-15 left-0 w-60 bg-white shadow-lg rounded-sm z-50 overflow-visible">
                                {step.subMenu.map((item, index) => (
                                    <div key={index} className="px-4 py-2 hover:bg-gray-100 hover:text-[#407c8a] cursor-pointer text-gray-800">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center p-6 w-full max-w-5xl'>
                <div className='mb-4 text-left w-full'>
                    <h2 className='text-2xl font-semibold mb-1'>Getting started</h2>
                    <p className='text-gray-500 text-sm'>Fields marked with * are required.</p>
                </div>
                
                <div className='bg-white p-6 rounded-lg shadow-md w-full'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>First name*</label>
                                <input type="text" name='firstName' value={formData.firstName} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200' />
                                {errors.firstName && <p className='text-red-500 text-xs'>{errors.firstName}</p>}
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Middle name</label>
                                <input type="text" name='middleName' value={formData.middleName} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200' />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Last name*</label>
                                <input type="text" name='lastName' value={formData.lastName} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200' />
                                {errors.lastName && <p className='text-red-500 text-xs'>{errors.lastName}</p>}
                            </div>
                        </div>
                        
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Preferred name</label>
                            <input type="text" name='preferredName' value={formData.preferredName} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200' />
                        </div>
                        
                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700'>Email address*</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200' />
                            {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
                        </div>

                        <div className='w-full mt-4'>
                            <div className='flex flex-col sm:flex-row items-start sm:items-center mb-4'>
                                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className='mt-1 sm:mt-0 mr-2' />
                                <p className='text-lg text-gray-700'>
                                    By checking this box, I confirm that I am at least 18 years of age, and that I have read and agree to FreeWill&apos;s
                                    <a href="#" className='text-[#478899]'> terms of Service</a> & <a href="#" className='text-blue-600'> Privacy Notice</a>.
                                </p>
                            </div>
                            {errors.agree && <p className='text-red-500 text-xs'>{errors.agree}</p>}
                            <button className='bg-[#478899] text-white px-6 py-2 rounded-sm w-full sm:w-auto' type='submit'>
                               <a href='/formHeader'>Save & continue</a> 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
