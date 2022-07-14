import { ethers } from "ethers";
import myNft from "../utils/MyNFT.json";
import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Balance, WindowSharp } from "@mui/icons-material";


const Button = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            console.log("Make sure you have Metamask!");
            return;
        } else {
            console.log("We have the ethereum object", ethereum);
        }
        /* ユーザーが認証可能なウォレットアドレスを持っている場合は、
         * ユーザーに対してウォレットへのアクセス許可を求める。
         * 許可されれば、ユーザーの最初のウォレットアドレスを
         * accounts に格納する。
         */
        const accounts = await ethereum.request({ method: "eth_accounts" });

        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account);
        } else {
            console.log("No authorized account found");
        }
    };

    const connectWallet = async () => {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                window.location.href="https://metamask.app.link/dapp/ticketme.jp/web3gibier";
                return;
            }
            /*
             * ウォレットアドレスに対してアクセスをリクエストしています。
             */
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("Connected", accounts[0]);
            /*
             * ウォレットアドレスを currentAccount に紐付けます。
             */
            setCurrentAccount(accounts[0]);
        } catch (error) {
        console.log(error);
    }
};

const renderNotConnectedContainer = () => (
    <button
        onClick={connectWallet}
        className="cta-button connect-wallet-button"
    >
        Walletに接続する
    </button>
);
// App.js
const askContractToMintNft = async () => {
    const CONTRACT_ADDRESS = "0xA9d1f3A7218FAA92E6d02984829087620c5D46fd";
    let cost = 100000000000000000;
    let gasLimit = 30000000;
    console.log("Cost: ", cost);
    console.log("Gas limit: ", gasLimit);
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const network = await (await provider.getNetwork()).chainId;
            console.log("network:", network);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(
                CONTRACT_ADDRESS,
                myNft.abi,
                signer
            );

            const balance = await provider.getBalance(currentAccount);
            console.log("balance:", balance);

            {/*
                const tx = {
                    'from': PUBLIC_KEY,
                    'to': contractAddress,
                    'nonce': nonce,
                    'gas': 500000,
                    'maxPriorityFeePerGas': 2999999987,
                    'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
                };
                const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
                const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
               */}
            //console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
            if((network!=137)&&(network!=1)){
                alert("ネットワークを変更してください")
                return;
            }
            if(network==1){
                if(balance<=0.01){
                    alert("残高が足りません")
                    return;
                }
                let nftTxn = await connectedContract.createToken({value: ethers.utils.parseEther("0.017")});
                alert("NFTチケットを発行（Mint）中です。しばらくすると購入完了画面に遷移しますので、ブラウザを閉じずにお待ちください。");
                await nftTxn.wait();
                window.location.href = 'https://ticketme.jp/finish';
            }else if(network==137){
                if(balance<=40){
                    alert("残高が足りません")
                    return;
                }
            console.log("Going to pop wallet now to pay gas...");
            let nftTxn = await connectedContract.createToken({ value: ethers.utils.parseEther("50") });
            console.log("Mining...please wait.");
            alert("NFTチケットを発行（Mint）中です。しばらくすると購入完了画面に遷移しますので、ブラウザを閉じずにお待ちください。")
            await nftTxn.wait();
            window.location.href = 'https://ticketme.jp/finish';
            console.log(
                `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
            );
            }


        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log(error);
        alert("エラーが発生しました（残高が足りない場合があります）");
    }
};
useEffect(() => {
    checkIfWalletIsConnected();
}, []);

return (
    currentAccount === "" ? (
        renderNotConnectedContainer()
    ) : (
        <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
            MATICで購入する
        </button>
    )
);
};


export default Button