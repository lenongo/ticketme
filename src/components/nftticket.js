import React from 'react'
import instruction1 from '../public/instruction1.png'
import instruction2 from '../public/instruction2.png'
import instruction3 from '../public/instruction3.png'

const nftticket = () => {
  return (


<div  className='instruction-how-to-buy'>


<p>
                            A.NFTチケットの購入方法
                </p>
                <ol>
                <li>
                           「Walletに接続する」を押します。
                </li>
                <img className='instruction-image' src={instruction1} alt="instruction1" />
                <li>
                           MetaMaskに接続後、「MATIC/ETHで購入」を押します。
                </li>
                <img className='instruction-image' src={instruction2} alt="instruction2" />
               　<li>
                         NFTチケットが発行（Mint）されるまでしばらく待ちます。
                </li>
                <img className='instruction-image' src={instruction3} alt="instruction3" />
                </ol>

                <p>
                            B.NFTチケットとは
                </p>

                <ol><a>
                👍NFTチケットの利点<br></br>
<br></br>
①不正転売防止<br></br>
　チケットの不正転売は大きな問題です。正規価格で取引を行えなくなると、公平性が失われます。その結果、本当に買いたい人が買えなくなることになります。<br></br>
　NFTチケットはブロックチェーン技術を用いて、イベント前の転売を行えなくすることでこの問題を解決します。<br></br>
<br></br>
②プレファイナンス<br></br>
　イベント主催者やセミナー主催者などにとって、資金繰りは毎回頭を悩ませる課題です。一般的なチケット販売サービスでは主催者の元にチケット代金が支払われるのはイベント終了「後」、5日ほど経ってからです。その間主催者はイベントに必要になった資金を借金して賄わなければなりません。<br></br>
　しかしNFTチケットを使えば、着金までの期間が圧倒的に短くなり主催者は安心して当日を迎えられます。<br></br>
<br></br>
③記念品<br></br>
　紙のチケットにあってこれまでの電子チケットになかったもの。それはチケットの記念品的側面でしょう。NFTチケットならそれを実現できます。さらにチケットの半券の二次流通が可能になり、そこにも新たな市場が生まれることになります。<br></br>
<br></br>
④トークンゲート<br></br>
　イベント参加者限定ECサイト、セミナーのオンライン自主勉強会など、一度買ったチケットを用いて人を認証し、また新たなコミュニティを作れる機会はいろいろなところにあります。<br></br>
　また、メタバース空間で行われるライブイベント等とNFTチケットの相性が良いのは言うまでもないでしょう。<br></br>
<br></br>
⑤利便性の向上<br></br>
　これまでチケットの購入は面倒な作業が必要でした。チケット購入サイトのログイン情報を登録し、メールで認証をし、クレジットカード情報を登録するなどです。<br></br>
　NFTチケットを用いれば、この作業がWalletを接続するだけで完了します。<br></br>
<br></br>
👎NFTチケットの欠点<br></br>
<br></br>
①買える場所が少ない<br></br>
　そもそもCryptoCurrencyを持っている人が少ないこと、それからブロックチェーン自体が比較的新しい技術であるという理由で、NFTチケットを買える場所はほとんどありません。<br></br>
　しかしチケミーが想像するのは、世界全ての人々の携帯端末にWalletが標準装備され、ほとんどの経済活動がWalletを通じて行われる世界です。この時誰が管理が大変でなおかつ購入までに時間がかかる従来のチケットを買うでしょうか。その世界がやってくる前にチケミーがNFTチケットのインフラを整え、来る時代に必要な選択肢を提供します。<br></br>
<br></br>
②Cryptocurrencyのボラティリティの高さ<br></br>
　多くの人々がCryptocurrencyに疑義を持っている理由の一つとして、ボラティリティの大きさがあるでしょう。流通量が既存の通貨と比べて少なく、また現在は主な使い道が実生活であまりないことから、これは致し方のないことに思われます。そこでチケミーでは早い段階からよりボラティリティの小さいステーブルコインを決済手段として導入しつつ、それぞれの良さを最大限引き出せるような仕組みを整えていきます。<br></br>


                </a></ol>





            </div>

)
}

export default nftticket