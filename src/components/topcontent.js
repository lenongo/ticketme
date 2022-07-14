import React from 'react'
import '../styles/top.css'
import gibier from '../public/gibier.png'
import web3 from '../public/NFTcommunitymanager20220621.png'
import instruction1 from '../public/instruction1.png'
import instruction2 from '../public/instruction2.png'
import instruction3 from '../public/instruction3.png'

const topcontent = () => {
    return (




<div>

 
<div className='topcontent'>
            <a href="/web3gibier">
                    <div class="event-leftbox">
                         <p className='event-month'>
                            6月
                         </p>
                        <p className='event-day'>
                            13
                        </p>
                    </div>

                    <div class="event-rightbox">
                        <p className='event-time'>
                            月曜日 18:00〜21:00
                        </p>
                        <p className='event-place'>
                            六本木駅すぐ近く<br></br>（詳細は購入完了画面でお知らせします)
                        </p>
                        <p className='event-title'>
                            【対面イベント】第一回 Web3.0ジビエ会 山のめぐみをくらい、未来のWeb3.0を語り合う夜
                        </p>
                        <p className='event-host'>
                            合同会社gibierco
                        </p>
                    </div>
                            <img className='event-image' src={gibier} alt="gibier" />

            </a>
            
</div >
<div className='topcontent'>
            <a href="">
                    <div class="event-leftbox">
                         <p className='event-month'>
                            6月
                         </p>
                        <p className='event-day'>
                            21
                        </p>
                    </div>

                    <div class="event-rightbox">
                        <p className='event-time'>
                            火曜日 19:00〜20:00
                        </p>
                        <p className='event-place'>
                            会場:zoom             
                        </p>
                        <p className='event-title'>
                            【zoomセミナー】NFTコミュニティマネージャーの仕事とは？？運営をする中で見つかった課題と、将来の可能性を考えよう
                        </p>
                        <p className='event-host'>
                            縅プロジェクト
                        </p>
                    </div>
                            <img className='event-image' src={web3} alt="gibier" />

            </a>
            
</div >





            <div><button className="cta-button2">
            <a href="https://twitter.com/intent/tweet?text=NFTチケット売るなら、買うなら、チケミー！！　https://ticketme.jp/ @TicketMe_Yeah " target="_blank">
            Twitterで共有
            </a>

            </button>
            <button className="cta-button3">
            <a href="https://timeline.line.me/social-plugin/share?url=https%3A%2F%2Fticketme.jp%2F" target="_blank">
                LINEで共有
            </a>

            </button></div>







        











 



</div>
        
    )
}

export default topcontent