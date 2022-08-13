import { DexProvider } from "../context/DexContext";
import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_MORALIS_SERVER_URL, process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID )
  const APPID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID
  const SERVERURL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL
  return (
    <MoralisProvider appId={APPID} serverUrl={SERVERURL}>
     <DexProvider>
      <Component {...pageProps} />
     </DexProvider>
    </MoralisProvider>
  );
}

export default MyApp;
