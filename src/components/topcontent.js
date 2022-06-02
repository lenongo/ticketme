import React from 'react'
import '../styles/top.css'
import gibier from '../public/gibier.png'

const topcontent = () => {
    return (
        <div className='topcontent'>
            <div className='categoly'>
                カテゴリー欄
            </div>
            <div className='search'>
                検索窓
            </div>
            <div className='top-container'>
                <div className='article 1'>
                    <p className='date 1'>
                        6/11    |
                    </p>
                    <div className='maincontent'>
                        <div className='content-sen'>
                            <a className='Link' href="/web3jibier"></a>
                            <p className='sentense one'>
                                土曜日　18:00
                            </p>
                            <p className='sentense two'>
                                会場:NEW YORKER'S Cafe 新宿エステックビル
                            </p>
                            <p className='sentense one'>
                                副業解禁　｜　初心者向け副業口座
                            </p>
                            <p className='sentense two'>
                                主催:初心者向け副業口座
                            </p>
                        </div>
                    </div>
                    <div className='img_container'>
                        <img className='img_file' src={gibier} alt="gibier" />
                    </div>
                </div>
                <div className='article 2'>
                    <p className='date 1'>
                        6/11    |
                    </p>
                    <div className='maincontent'>
                        <a className='Link' href="/web3jibier"></a>
                        <p className='sentense one'>
                            土曜日　18:00
                        </p>

                        <p className='sentense two'>
                            会場:NEW YORKER'S Cafe 新宿エステックビル
                        </p>
                        <p className='sentense one'>
                            副業解禁　｜　初心者向け副業口座
                        </p>
                        <p className='sentense two'>
                            主催:初心者向け副業口座
                        </p>
                        <img className='img_file' src={gibier} alt="gibier" />
                    </div>

                </div>
                <div className='article 2'>
                    <p className='date 1'>
                        6/11    |
                    </p>
                    <div className='maincontent'>
                        <p className='sentense one'>
                            土曜日　18:00
                        </p>

                        <p className='sentense two'>
                            会場:NEW YORKER'S Cafe 新宿エステックビル
                        </p>
                        <p className='sentense one'>
                            副業解禁　｜　初心者向け副業口座
                        </p>
                        <p className='sentense two'>
                            主催:初心者向け副業口座
                        </p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default topcontent