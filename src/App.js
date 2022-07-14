// useEffect と useState 関数を React.js からインポートしています。
import { ethers } from "ethers";
//import AddToHomeScreenIcon from '@material-ui/icons-material/AddToHomeScreen';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import React, { useEffect, useState } from "react";
import "./styles/App.css";
import myNft from "./utils/MyNFT.json";
import Header from './components/header'
import Img from './components/img'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MTable from './components/MTable2';
import Icon from './components/icon';
import Button from './components/button';
import Footer from './components/footer';
import SelectButton from './components/SelectButton';
import Content from './components/content';
import Wallet from './components/wallet'
import Account from './components/account'
import { minWidth } from "@mui/system";
import Table from '@mui/material/Table';
import Tablebody from '@mui/material/TableBody';
import { TableContainer } from "@mui/material";
import Title from './components/title';
import Detail from './components/detail'
import Nftticket from './components/nftticket'

// Constantsを宣言する: constとは値書き換えを禁止した変数を宣言する方法です。
const TWITTER_HANDLE = "あなたのTwitterのハンドルネームを貼り付けてください";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = "";
const TOTAL_MINT_COUNT = 50;
const App = () => {
  /*
   * ユーザーのウォレットアドレスを格納するために使用する状態変数を定義します。
   */
  const [currentAccount, setCurrentAccount] = useState("");
  /*この段階でcurrentAccountの中身は空*/
  console.log("currentAccount: ", currentAccount);
  /*
   * ユーザーが認証可能なウォレットアドレスを持っているか確認します。
   */
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

  /*
   * connectWallet メソッドを実装します。
   */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        window.location.href = "https://metamask.app.link/dapp/ticketme.jp/web3jibier";
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

  // renderNotConnectedContainer メソッドを定義します。
  const renderNotConnectedContainer = () => (
    <button
      onClick={connectWallet}
      className="cta-button connect-wallet-button"
    >
      Walletに接続する
    </button>
  );
  // App.js

  //以下Drawer用に追加
  const [drawerOpen, setDrawerOpen] = React.useState(false);//

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
  };
  /*
   * ページがロードされたときに useEffect()内の関数が呼び出されます。
   */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Header />
              <Img />
              <Title />
              <Detail />
              <div className="Table"><MTable /></div>
              <p className="information" id="buyticket">NFTチケット購入</p>
              <div className="NFTIcon">
                <Table sx={{ minWidth: 400 }} aria-label='simple table'>
                  <Tablebody>
                    <Icon />
                    <Content />
                    <Button />
                  </Tablebody>
                </Table>
              </div>
              <Footer />
            </>} />
            <Route path="/table" element={<MTable />} />
            <Route path="/wallet" element={<><Header /><div className="Wallet"><Wallet /></div><Footer /></>} />
            <Route path="/account" element={<><Header /><div className="Acoount"><Account /></div><Footer /></>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div >
  );
};
export default App;