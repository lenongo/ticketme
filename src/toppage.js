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
import Topcontent from './components/topcontent'
import App from './App'
import Title from './components/title';
import Detail from './components/detail';
import Table from '@mui/material/Table';
import Tablebody from '@mui/material/TableBody';
import Finish from './components/finish';
import Tweet from './components/tweetbutton';
import Triangle from "./components/triangle";
import Scroll from "./components/scroll"
import Nftticket from './components/nftticket'
import Rules from './components/rules'
import Privacy from './components/privacy'
import Law from './components/law'



const toppage = () => {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter basename="/">
                    <Routes>
                        <Route path="/" element={<>
                            <Header />
                            <Scroll/>
                            <Topcontent />
                            <Footer />
                        </>} />
                        <Route path="/web3gibier" element={<>
                            <Header />
                            <Triangle />
                            <Tweet/>
                            <Img />
                            <Title />
                            <Detail />
                            <div className="Table"><MTable /></div>
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
                        <Route path="/finish" element={<>
                        <Header />
                        <div><Finish/></div>
                        <Footer />
                        </>} />
                        <Route path="/wallet" element={<><Header /><div className="Wallet"><Wallet /></div><Footer /></>} />
                        <Route path="/account" element={<><Header /><div className="Acoount"><Account /></div><Footer /></>} />
                        <Route path="/tweet" element={<><Header /><div className="Tweet"><Tweet /></div><Footer /></>} />
                        <Route path="/nftticket" element={<><Header /><div><Nftticket/></div><Footer /></>} />
                        <Route path="/rules" element={<><Header /><div><Rules/></div><Footer /></>} />
                        <Route path="/privacy" element={<><Header /><div><Privacy/></div><Footer /></>} />
                        <Route path="/law" element={<><Header /><div><Law/></div><Footer /></>} />

                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default toppage