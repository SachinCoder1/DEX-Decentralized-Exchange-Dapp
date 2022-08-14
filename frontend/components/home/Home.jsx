import React, { useContext } from "react";
import { DexContext } from "../../context/DexContext";
import SampleChart from "./SampleChart";
import TransferFundBox from "./TransferFundsBox";

export default function Home() {
  const {currentBalance} = useContext(DexContext)
  return (
    <div className="text-gray-700">
        <h1 className="text-3xl font-semibold">{currentBalance ? currentBalance + " ETH" : "N/A"}</h1>
      <div className="">
        <SampleChart />
      </div>
      <div className="flex my-5 p-3 justify-between items-center bg-white shadow-xl">
        <p>Buying Power</p>
        <p>12 ETH</p>
      </div>
      <div className="my-10 bg-white shadow-xl ">
        <h1 className="text-2xl text-center py-5 font-semibold">Transfer Your Funds</h1>
        <TransferFundBox />
      </div>
    </div>
  );
}
