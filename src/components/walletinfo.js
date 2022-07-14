import { ethers } from "ethers";
import myNft from "../utils/MyNFT.json";
import React, { useEffect, useState } from "react";
import "../styles/App.css";



const walletinfo = (props) => {

  return (
    <div className="MyPage">
      <h1>
        MyPage
      </h1>

          <div class="your-information"><a>walletアドレス</a></div>
          <div class="wallet-address"><a>{props.currentAccount}</a></div>



        <ui>
          <div class="your-information"><a>保有NFTチケット</a></div>
          <div class="wallet-address"><a>※OpenSeaさんからのAPI発行が終わり次第実装します😇　実装後、リアルイベントではここの画面を見せてNFTチケットの有無を確認し、入場を行うことになります🤗</a></div>
        </ui>
    </div>
  );
};

export default walletinfo