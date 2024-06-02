

const Airdrop = () => {
    const referralLink = "https://example.com/referral-link";
    const balance = "1000 NOT";
    const referredCount = 25;
    const rewards = "500 NOT";
  
    return (
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#00df9a]">
          Welcome!
        </h1>
        <p className="py-4">
          You have successfully logged in. Here you can access your dashboard and manage your account.
        </p>
        <div className="flex flex-col sm:flex-row justify-between mt-4 mb-8">
          <button className="bg-[#00df9a] text-black rounded-md font-medium px-6 py-3 mb-4 sm:mb-0 sm:mr-4 transition duration-300">
            Withdraw
          </button>
          <button className="bg-[#00df9a] text-black rounded-md font-medium px-6 py-3 transition duration-300">
            Withdraw History
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Referral Link</h2>
            <p className="text-[#00df9a] break-all">{referralLink}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Balance</h2>
            <p className="text-[#00df9a]">{balance}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Referred</h2>
            <p className="text-[#00df9a]">{referredCount}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Rewards</h2>
            <p className="text-[#00df9a]">{rewards}</p>
          </div>
        </div>
        <div className="mt-8">
          <button className="bg-[#00df9a] text-black rounded-md font-medium px-6 py-3 transition duration-300">
            Buy Notcoin
          </button>
        </div>
      </div>
    );
  };
  
  export default Airdrop;
  