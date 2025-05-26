import React from "react";

const GoldenSubscription = () => {
  return (
    <div className="bg-yellow-500 text-white p-4 rounded-md">
      <h3 className="text-xl font-bold">Golden Subscription</h3>
      <p className="text-lg">One-time payment of $289</p>
      <a
        href="https://t.growth4ch.shop/"
        className="bg-white text-yellow-500 py-2 px-4 rounded-md inline-block mt-2 hover:bg-yellow-300 hover:text-white"
      >
        Get Golden Subscription
      </a>
    </div>
  );
};

export default GoldenSubscription;