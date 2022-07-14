import React from 'react'
import '../styles/App.css'
import boar from "../public/NFTticket boar.png"
import deer from "../public/NFTticket deer.png"

const finish = () => {
  return (
    <div>

        <p class="finish0">購入が完了いたしました。</p>
        <div className='finish2'><a><b>6月13日（月）18:00〜21:00</b>当日の会場は、<b>「東京都港区六本木4-2-45 高會堂ビル2F（EastVentures六本木オフィス）」</b>です。皆様にお会いできるのを楽しみにしております。</a></div>

            <div className="NFTIcon">
                <img className="icon-boar" src={boar} alt="boar" />
                <img className="icon-deer" src={deer} alt="deer" />
            </div>
            <div className="Ticket-content">
            <div className="Ticket-content-left">
                <p className="Ticket-content1">先着</p>
            </div>
            <div className="Ticket-content-right">
                <p className="Ticket-content2">第一回web3.0ジビエ会 一般販売用　(50MATIC/0.017ETH,約4000円)</p>
            </div>

        </div>

        <br></br><br></br><button className="cta-button2">
            <a href="https://twitter.com/intent/tweet?text=チケミーで「第一回web3.0ジビエ会」のNFTチケットを購入しました！　@TicketMe_Yeah " target="_blank">
            NFTチケットの購入をTwitterで共有
            </a>

            </button>
     </div>


  )
}

export default finish