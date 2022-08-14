import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/Navbar";
import Home from "../components/home/Home";
import Assets from "../components/right/Assets";
import { useState } from "react";
import axios from 'axios'

export default function Dashboard() {
  // const [myCoins] = useState([...coins.slice(0, 15)])
  return (
    <div classnames="  ">
      <Head>
        <title>Dex - Decentralized Exchange</title>
        <meta name="description" content="Exchange your tokens with another tokens or coins. Built by - SachinGurjar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-300 min-h-screen">
        <Navbar />
        <div className="flex justify-center gap-x-14 my-5">
          <div className="w-2/4">

          <Home />
          </div>
          <div className="bg-gray-400  w-1/5">
          {/* {myCoins.map(coin => {
            let price = parseFloat(coin.price)
            price = price.toFixed(2)

            return <Assets key={coin.uuid} coin={coin} price={price} />
          })} */}
          

          <Assets coin="BTC" price={0.89} />
          <Assets coin="Solana" price={-1} />
          <Assets coin="DOGE" price={7} />
          <Assets coin="ETH" price={53} />
          </div>
        </div>
      </main>
    </div>
  );
}



// export const getStaticProps = async () => {
//   console.log(process.env.NEXT_PUBLIC_COIN_RANKING_RAPIDAPI_HOST, process.env.NEXT_PUBLIC_COIN_RANKING_RAPIDAPI_KEY)
//   const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Host': process.env.NEXT_PUBLIC_COIN_RANKING_RAPIDAPI_HOST,
//       'X-RapidAPI-Key': process.env.NEXT_PUBLIC_COIN_RANKING_RAPIDAPI_KEY,
//     }
//   };

//   axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
  
//   const res = await axios.request(options).then()
//   const coins = res.data.data.coins

//   return {
//     props: { coins },
//   }
// }