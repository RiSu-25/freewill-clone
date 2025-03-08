import { useState } from "react";
import { assets } from "../assets/assets";
import { IoMdClose } from "react-icons/io";

const steps = [
  {
    id: 1,
    title: "Basics",
    subMenu: ["Getting started", "Basic details", "Marital status"],
  },
  { id: 2, title: "Nominees" },
  { id: 3, title: "Assets" },
  { id: 4, title: "Residuary" },
  { id: 5, title: "Gifts" },
  { id: 6, title: "Funeral" },
  { id: 7, title: "Provisions" },
  { id: 8, title: "Review" },
];

const FormHeader = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    gender: "",
    birthdate: "",
    phoneNumber: "",
    streetAddress: "",
    city:"",
    state:"",
    zipCode:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.birthdate) newErrors.birthdate = "Birthdate is required";
    if (!formData.streetAddress) newErrors.streetAddress = "Street address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip Code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validate()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center px-6">
        <img className="h-8" src={assets.logo} alt="Logo" />
        <IoMdClose className="h-6 w-6 hover:text-pink-500 cursor-pointer" />
      </div>

      <h2 className="text-lg text-[#477889] font-medium my-3 text-center">
        LAST WILL & TESTAMENT
      </h2>

      {/* Progress Steps */}
      <div className="w-full bg-gray-200 p-3 overflow-x-auto">
        <div className="flex justify-center items-center space-x-6 min-w-max">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 cursor-pointer 
                  ${
                    currentStep === index
                      ? "bg-blue-900 text-white"
                      : "border-gray-400 text-gray-400"
                  }`}
                onClick={() => setCurrentStep(index)}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm ${
                  currentStep === index
                    ? "text-black font-semibold"
                    : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="flex flex-col justify-center items-center p-6 w-full max-w-5xl">
        <div className="mb-4 text-left w-full">
          <h2 className="text-2xl font-semibold mb-1">
            {steps[currentStep].title} Details
          </h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full">
          {currentStep === 0 && (
            <form>
              {/* Gender Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Gender*
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["Male", "Female", "Trans", "Non-binary"].map((gender) => (
                    <button
                      type="button"
                      key={gender}
                      className={`py-8 rounded-sm text-center 
                        ${
                          formData.gender === gender
                            ? "bg-[#488799] text-white"
                            : "bg-white shadow-md"
                        }`}
                      onClick={() =>
                        setFormData({ ...formData, gender: gender })
                      }
                    >
                      {gender}
                    </button>
                  ))}
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm">{errors.gender}</p>
                )}
              </div>

              {/* Birthdate Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Birthdate*
                </label>
                <span>Enter the date in mm/dd/yyyy order.</span>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                />
                {errors.birthdate && (
                  <p className="text-red-500 text-sm">{errors.birthdate}</p>
                )}
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <span>10 digits, U.S. only, for example (999) 999-9999.</span>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="(999) 999-9999"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                />
              </div>

              {/* Street Address Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Street Address 1*
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                />
                {errors.streetAddress && (
                  <p className="text-red-500 text-sm">{errors.streetAddress}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Street Address 2
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                  />
                   {errors.state && (
                    <p className="text-red-500 text-xs">{errors.state}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-sm bg-gray-200"
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs">{errors.zipCode}</p>
                  )}
                </div>
              </div>
            </form>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={prevStep}
                className="py-2 px-4 bg-gray-300 text-gray-700 rounded-sm"
                disabled={currentStep === 0}
              >
                Back
              </button>
            <button
              type="button"
              onClick={nextStep}
              className="py-2 px-4 bg-blue-600 text-white rounded-sm cursor-pointer"
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
