import React from 'react';

function CompanyInfo() {

    let imgURL = "url(images/background/about-bg.png)";

    return (
        <section id="company" className="about-section" style={{backgroundImage: imgURL}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column text-left">
                        <div className="content-box">
                            <div className="sec-title">
                                <h4>新一代 居家服務集團</h4>
                                <h1>媽咪樂MHHS</h1>
                            </div>
                            <div className="text">
                                以「滿足人的需求」為出發，成立於1996年的「順遠工程」，
                                秉持著服務社會的熱誠、改善環境的品質為理念，充分運用團隊管理的優勢，
                                兢兢業業地塑造出積極、創新的立業精神，期許以專業的清潔施工技術，
                                給予消費者一個最舒適的環境。
                                而企業內所提倡的三意，指的便是夥伴樂意、 顧客滿意、經營得意這三大目標。
                            </div>
                            <ul className="list">
                                <li>深耕二十餘年，100%正職嚴選管家</li>
                                <li>投入百萬教育訓練預算，培育專業職人</li>
                                <li>比照公家機關休，員工每年享有旅遊福利</li>
                            </ul>
                            <div className="btn-box">
                                <a className="btn-style-two" target="_blank" rel="noopener noreferrer" href="https://www.1111.com.tw/corp/9635172/#c4">立即應徵</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image paroller clearfix">
                                <img src="image/tp03/about-1.png" alt="1111人力銀行-公司介紹" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CompanyInfo;