import "../styles/App.css";
import logo from "../public/logo.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer01">
            <p className="Title"><a href="/"><img className="Logo" src={logo} alt="logo" /></a></p>
                <ul className='menu'>
                <li><a href='/rules'>利用規約</a></li>
                    <li><a href='/privacy'>個人情報保護方針</a></li>
                    <li><a href='/law'>特定商取引法に基づく表記</a></li>                   
                   <li><a href='/nftticket' >NFTチケットとは</a></li>
                    <li><a href="https://corp.ticketme.jp/" target="_blank">会社ホームページ</a></li>
                    <li><a href="https://corp.ticketme.jp/contact" target="_blank">お問い合わせ</a></li>
                </ul>
                <hr className='footer-border'></hr>
                <p class="Fcopyright">
                    Copyright © TicketMe Inc.
                </p>
            </div>
        </div>
    );
};

export default Footer