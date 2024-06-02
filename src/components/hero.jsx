import React,{ useState, useEffect } from 'react'


const Hero = () => {

  const timeLeft = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  const timerComponents = [];




   Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-4xl font-bold md:text-5xl">{timeLeft[interval]}</span>
        <span className="text-sm text-[#00df9a] md:text-base">{interval}</span>
      </div>
    );
  });



  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Notcoin ($Not) Airdrop & Pre-Sale
      </h1>
      <p className='md:text-2xl text-xl font-bold text-gray-500 mx-4'>
        Notcoin started as a viral Telegram game that onboarded many users into web3 through a tap-to-earn mining mechanic.
      </p>
      <div className='mt-4'>
        <p className='md:text-2xl text-xl font-bold text-white'>
          Airdrop Countdown
        </p>
        <div className='flex justify-center mt-1 space-x-4'>
          {timerComponents}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6'>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black'>
          Pre-sale
        </button>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium py-3 text-black'>
          Airdrop
        </button>
      </div>
      <p className='md:text-xl text-lg font-bold text-white mt-6 mx-4'>
        🚫IMPORTANT: Binance & NOTdrop.live will be the first platform to list the token mentioned herein, with trade starting at 2024-05-16 12:00 (UTC)
      </p>
    </div>
  </div>
);
};


export default Hero