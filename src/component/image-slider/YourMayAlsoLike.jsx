import axios from "axios";
import React, { useEffect, useState } from "react";

const YourMayAlsoLike = () => {
  const [loading, setLaoding] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const fetchData = async () => {
    setLaoding(true);
    try {
      const responce = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (responce.data.coins) {
        setCoinData(responce.data.coins);
        setLaoding(false)
        console.log(coinData);

      }
    } catch (error) {
      console.log("There is an Error While Fetching The Details :", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-50%">
        Please wait while we are fetching details
      </div>
    );
  }
  return <div className="flex gap-4 p-3">
    {coinData && coinData.length ? 
    coinData.map((coin) => (
          <div
            key={coin.item.id}
            className="rounded-lg mr-2 border-2 p-4 w-[2000px] max-sm:w-[170px]"
          >
            <div className="flex gap-2 max-sm:gap-1">
              <img src={coin.item.large} alt={coin.item.name} className="w-6" />
              <p className="font-bold">{coin.item.symbol}</p>
              <p className="mt-[-4px] px-2 rounded-md text-green-600 bg-green-100 pt-[8px]">
                {coin.item.market_cap_rank} Rank
              </p>
            </div>
            <div className="py-2">
              {/* Display price and price change */}
              {/* Use sparkline image for price graph */}
              <h2 className="text-xl text-black font-medium">
                ${coin.item.data.price_change_percentage_24h.usd.toFixed(3)}
              </h2>
              <img
                src={coin.item.data.sparkline}
                alt={`${coin.item.name} Sparkline`}
                className="mt-2 w-[140px] pl-[10px]"
              />
            </div>
          </div>
        )) : null}
        
  </div>;
};

export default YourMayAlsoLike;
