import { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

export const DexContext = createContext("");

export const DexProvider = ({ children }) => {
  const [shortAccountAddress, setShortAccountAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

  const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } =
    useMoralis();

  const connectWallet = async () => {
    await authenticate();
  };

  useEffect(() => {
    if (isAuthenticated) {
      const account = user.get("ethAddress");
      setCurrentAccount(account);

      let shortAddress = `${account.slice(0, 6)}...${account.slice(
        account.length - 4
      )}`;
      setShortAccountAddress(shortAddress);
    }
  }, [isAuthenticated, enableWeb3]);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentAccount) return;
      const response = await fetch("/api/createUser", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ walletAddress: currentAccount }),
      });
      const data = await response.json();
      console.log(data)
    };
    fetchData();
  }, [currentAccount]);

  return (
    <DexContext.Provider
      value={{
        connectWallet,
        logout,
        shortAccountAddress,
        isAuthenticated,
        currentAccount,
      }}
    >
      {children}
    </DexContext.Provider>
  );
};
