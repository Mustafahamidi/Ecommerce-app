import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod'); // Corrected state name
  const { navigate } = useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[600px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        {/* Name Inputs */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="First Name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Last Name"
          />
        </div>

        {/* Full-width Email Input */}
        <input
          type="email"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          placeholder="Email Address"
        />

        {/* Full-width Street Input */}
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          placeholder="Street Address"
        />

        {/* City, State, Zip Code (Shared Width) */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="State"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Zip Code"
          />
        </div>

        {/* Country (Shared Width) & Phone (Full Width) */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-1/2"
            placeholder="Country"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Phone Number"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Payment Method Selection */}
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}
              ></p>
              <img src={assets.stripe_logo} alt="Stripe Logo" />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}
              ></p>
              <img src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
              <button onClick={() => navigate("/orders")} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
