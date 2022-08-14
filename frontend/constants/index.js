import dogeAbi from "../abis/Doge.json";
import bitcoinAbi from "../abis/Bitcoin.json";
import solanaAbi from "../abis/Solana.json";
import usdcAbi from "../abis/Usdc.json";
import daiAbi from "../abis/Dai.json";
import linkAbi from "../abis/Link.json";

export const allAddresses = {
  dogeCoin: {
    address: "0x1fFF4551195F3864Bc7547258AcC52D020db196d",
    abi: dogeAbi.abi,
  },
  bitCoin: {
    address: "0xB951a5DE51426E165aAC91166B684F9223951910",
    abi: bitcoinAbi.abi,
  },
  solana: {
    address: "0x3be29B22419B4A76c2Dd3112ed21eb4cee0D98E0",
    abi: solanaAbi.abi,
  },
  usdc: {
    address: "0xf73Fb6152713b18b597655E9FDB229bff7133641",
    abi: usdcAbi.abi,
  },
  dai: {
    address: "0xC6A245A71d5DE76c3544fA1CC073D9084712Eb7c",
    abi: daiAbi.abi,
  },
  link: {
    address: "0x6117D2C90B49072Dd234358BEbD7967E5269bD2F",
    abi: linkAbi.abi,
  },
};
