import React from 'react';

function CompanyBenifit() {

    return (
        <section  className="why-choose-us-area">
            <div id="benefit" className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="why-choose-us-slides owl-carousel owl-theme">
                            <div className="why-choose-us-image bg1">
                                <img src="image/tp04/why-choose-img1.jpg" alt="員工福利" />
                            </div>

                            <div className="why-choose-us-image bg2">
                                <img src="image/tp04/why-choose-img2.jpg" alt="員工福利" />
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="why-choose-us-content text-left">
                            <div className="content">
                                <div className="title">
                                    <span className="sub-title">Your Benefits</span>
                                    <h2>好 福 利</h2>
                                    <p>提供豐富的獎金福利制度，獎勵同仁的辛勞及貢獻</p>
                                </div>

                                <ul className="features-list">
                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-like"></i>
                                        </div>
                                        <span>獎金福利</span>
                                        全勤獎金、年終獎金、績效獎金
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-customer-service"></i>
                                        </div>
                                        <span>補助津貼</span>
                                        進修補助 全勤津貼 伙食津貼
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-care"></i>
                                        </div>
                                        <span>休閒娛樂</span>
                                        國內員工旅遊 國外員工旅遊 尾牙/不定期餐敘
                                        
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-team"></i>
                                        </div>
                                        <span>其他福利 </span>
                                        員工健康檢查 勞保、健保 福利制度
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-policy pl-10" ></i>
                                        </div>
                                        <span>福利設施</span>
                                        員工停車位
                                    </li>

                                    <li>
                                        <div className="icon">
                                            <i className="flaticon-education"></i>
                                        </div>
                                         <span>餐 飲 類</span>
                                        伙食津貼
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CompanyBenifit;