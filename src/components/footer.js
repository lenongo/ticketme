import "../styles/App.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer01">
                <p className="footer-main1">サイトのご利用について</p>
                <ul className='menu'>
                    <li><a href='#'>利用規約</a></li>
                    <li><a href="#">個人情報保護方針</a></li>
                    <li><a href="#">特定商取引法に基づく表記</a></li>
                    <li><a href="#">会社ホームページ</a></li>
                    <li><a href="#">お問い合わせ</a></li>
                </ul>
                <p class="Fcopyright">
                    Copyright © TicketMe Inc.
                </p>
            </div>
        </div>
    );
};

export default Footer