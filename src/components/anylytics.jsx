import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Description = () => {
  return (
    <div className='w-full bg-gray-100 py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
  
        <div className='flex flex-col bg-white p-6 rounded-lg shadow-lg'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left text-[#00df9a]'>
            How to Claim Notcoin
          </h1>
          <p className='py-4 text-gray-700 text-justify'>
            The total supply of $NOT is 102,719,221,714 NOT tokens, with 3,081,576,651 tokens allocated for airdrop rewards, and 2,000,000,000 tokens for community pre-sale. The remaining 10,000,000,000 tokens will be used for the team and future project development.
            $NOT tokens can now be obtained by participating in the airdrop and pre-sale. After the airdrop and pre-sale, $NOT will be listed on top-tier exchanges such as Binance, Coinbase, ByBit, and OKX.
          </p>
          <button className='bg-[#00df9a] text-white w-[200px] rounded-lg font-medium my-6 py-3 hover:bg-[#00b57a] transition duration-300'>
            About Notcoin
          </button>
        </div>

    
        <div className='flex flex-col bg-white p-6 rounded-lg shadow-lg'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left text-[#00df9a]'>
            Airdrop Description
          </h1>
          <p className='py-4 text-gray-700 text-justify'>
            • Submit your ETH wallet address to participate in the airdrop, you can get 5000 $NOT tokens.
            • After submitting your ETH address, you will see your referral link. Copy and share your referral link with your friends, and you will receive a reward of 2000 $NOT tokens for each referral. You can invite unlimited people.
            • The $NOT airdrop will end on 2024-05-16 12:00 (UTC). After the airdrop ends, $NOT tokens will be automatically distributed to your submitted ETH wallet address. This airdrop is completely free of charge.
          </p>
        </div>

  
        <div className='flex flex-col bg-white p-6 rounded-lg shadow-lg'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left text-[#00df9a]'>
            Pre-sale Description
          </h1>
          <p className='py-4 text-gray-700 text-justify'>
            • Pre-sale price: 1 ETH = 1,000,000 $NOT. The minimum purchase is 0.04 ETH, and the maximum purchase is 30 ETH.
            • Send ETH from your wallet to the pre-sale address. Our system will automatically send $NOT tokens to your wallet instantly. You can send any amount of ETH.
            • The distribution of $NOT tokens will be based on ETH time arrived. First come, first served. If the pre-sale is sold out and you were unable to purchase, a refund will be automatically issued to your wallet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;

