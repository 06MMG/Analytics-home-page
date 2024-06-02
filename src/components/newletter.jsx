import React,{useState} from 'react'
import Airdrop from './Airdrop';

const Newletter = () => {

  const [showLoggedInContent, setShowLoggedInContent] = useState(false);

  const handleLoginClick = () => {
    setShowLoggedInContent(true);
  };
   

  return (
    <div className="w-full py-16 text-white px-4">
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-8">
      
      {/* 1st Portion: Pre-sale Information */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
          Pre-sale Information
        </h1>
        <p className="py-4">
          Participate in the pre-sale to acquire $NOT tokens before the public listing. The pre-sale price is 1 ETH = 1,000,000 $NOT.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="font-bold">Pre-sale Address:</p>
          <p className="text-[#00df9a] break-all">
            0x1234567890abcdef1234567890abcdef12345678
          </p>
        </div>
        <p className="py-4">
          Binance will list $NOT on 2024-05-16 at 12:00 (UTC).
        </p>
      </div>
      
      {/* 2nd Portion: Address Input and Login */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          {!showLoggedInContent ? (
            <>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
                Enter Address
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-4">
                <input
                  className="p-3 flex w-full rounded-md text-black mb-4 sm:mb-0"
                  type="text"
                  placeholder="Enter your address"
                />
                <button
                  className="bg-[#00df9a] text-black rounded-md font-medium w-full sm:w-auto px-6 py-3 sm:ml-4 transition duration-300"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            <Airdrop  />
          )}
        </div>
      </div>
    </div>
  )
}

export default Newletter

