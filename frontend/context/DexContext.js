import { createContext, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { allAddresses } from "../constants";

export const DexContext = createContext("");

export const DexProvider = ({ children }) => {
  const [shortAccountAddress, setShortAccountAddress] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [fromCoinSelected, setFromCoinSelected] = useState("DOGE");
  const [toCoinSelected, setToCoinSelected] = useState("");
  const [amountEntered, setAmountEntered] = useState("");

  const { isAuthenticated, authenticate, user, logout, Moralis, enableWeb3 } =
    useMoralis();

  const connectWallet = async () => {
    await authenticate();
  };

  const getFromContractAddress = async () => {
    if (fromCoinSelected == "DOGE") return allAddresses.dogeCoin.address;
    if (fromCoinSelected == "BTC") return allAddresses.bitCoin.address;
    if (fromCoinSelected == "SOL") return allAddresses.solana.address;
    if (fromCoinSelected == "USDC") return allAddresses.usdc.address;
  };

  const getToContractAddress = async () => {
    if (toCoinSelected == "DOGE") return allAddresses.dogeCoin.address;
    if (toCoinSelected == "BTC") return allAddresses.bitCoin.address;
    if (toCoinSelected == "SOL") return allAddresses.solana.address;
    if (toCoinSelected == "USDC") return allAddresses.usdc.address;
    if (toCoinSelected == "DAI") return allAddresses.dai.address;
  };

  const getToContractABI = async () => {
    if (toCoinSelected == "DOGE") return allAddresses.dogeCoin.abi;
    if (toCoinSelected == "BTC") return allAddresses.bitCoin.abi;
    if (toCoinSelected == "SOL") return allAddresses.solana.abi;
    if (toCoinSelected == "USDC") return allAddresses.usdc.abi;
    if (toCoinSelected == "DAI") return allAddresses.dai.abi;
  };

  const mint = async () => {
    try {
      if (fromCoinSelected === 'ETH') {
        if (!isAuthenticated) return
        await Moralis.enableWeb3()
        const contractAddress = await getToContractAddress()
        const abi = await getToContractABI()

        let options = {
          contractAddress: contractAddress,
          functionName: 'mint',
          abi: abi,
          params: {
            _to: currentAccount,
            _amount: Moralis.Units.Token('50', '18'),
          },
        }
        sendETH()
        const transaction = await Moralis.executeFunction(options)
        const receipt = await transaction.wait(4)
        console.log(receipt)
        saveTransaction(receipt.transactionHash, amountEntered, receipt.to)
      } else {
        swapTokens()
        saveTransaction(receipt.transactionHash, amountEntered, receipt.to)
      }
    } catch (error) {
      console.error("Error while minting ", error)
    }
  }

  const swapTokens = async () => {
    try {
      if (!isAuthenticated || !currentAccount || !amountEntered) return;
      await Moralis.enableWeb3();
      if (fromCoinSelected == toCoinSelected) return;
      const fromOptions = {
        type: "erc20",
        amount: Moralis.Units.Token(amountEntered, "18"),
        receiver: getFromContractAddress(),
        contractAddress: getFromContractAddress(),
      };

      const toMintOptions = {
        contractAddress: await getToContractAddress(),
        functionName: "mint",
        abi: await getToContractABI(),
        params: {
          _to: currentAccount,
          _amount: Moralis.Units.Token(amountEntered, "18"),
        },
      };
      let fromTransaction = await Moralis.transfer(fromOptions);
      let toMintTransaction = await Moralis.executeFunction(toMintOptions);
      let fromReceipt = await fromTransaction.wait();
      let toReceipt = await toMintTransaction.wait();
      console.log(fromReceipt);
      console.log(toReceipt);
    } catch (err) {
      console.log("Error while swapping tokens.. ", err);
    }
  };

  const sendETH = async () => {
    try {
      if (!isAuthenticated) return;
      const contractAddress = await getToContractAddress();

      let options = {
        type: "native",
        amount: Moralis.Units.ETH("0.01"),
        receiver: contractAddress,
      };
      const transaction = await Moralis.transfer(options);
      const receipt = await transaction.wait();
      console.log(receipt);
      saveTransaction(receipt.transactionHash, "0.01", receipt.to);
      setAmountEntered("");
    setFromCoinSelected("DOGE")
    setToCoinSelected("")
    } catch (err) {
      console.log("Error while sending ETH.. ", err);
    }
  };

  const saveTransaction = async (txHash, amount, toAddress) => {
    await fetch("/api/swapTokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        txHash: txHash,
        from: currentAccount,
        to: toAddress,
        amount: parseFloat(amount),
      }),
    });

    
  };

  useEffect(async () => {
    if (isAuthenticated) {
      const account = user.get("ethAddress");
      setCurrentAccount(account);

      let shortAddress = `${account.slice(0, 6)}...${account.slice(
        account.length - 4
      )}`;
      setShortAccountAddress(shortAddress);
      const balance = await Moralis.Web3API.account.getNativeBalance({
        chain: "rinkeby",
        address: currentAccount,
      });
      const convertedBalanceToEth = Moralis.Units.FromWei(balance.balance);
      const formattedBalance = parseFloat(convertedBalanceToEth).toFixed(3);
      setCurrentBalance(formattedBalance);
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
      console.log(data);
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
        setAmountEntered,
        mint,
        setFromCoinSelected,
        setToCoinSelected,
        fromCoinSelected,
        toCoinSelected,
        currentBalance,
        swapTokens,
        amountEntered,
        setAmountEntered,
      }}
    >
      {children}
    </DexContext.Provider>
  );
};
