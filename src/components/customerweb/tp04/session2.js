import React from 'react';

function CompanyInfo() {

    return (
        <section  className="about-area ptb-100 bg-f8f8f8">
            <div id="company" className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 hide-xs">
                        <div className="about-image">
                            <img src="image/tp04/about-1.jpg" alt="公司介紹" />
                            <img src="image/tp04/about-2.jpg" alt="公司介紹" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span>About Us</span>
                            <h2>集陽由來</h2>
                            <p>集陽綠能是由一群”熱血，瘋狂，健康”的好友們一同創建的團隊。
在一次的聚會中，大夥談及各自的工作近況，衍生聊到什麼行業是對社會有貢獻又能對自己未來交代的行業呢？
然而提及到〔太陽能〕，因看見這個行業有著友善環境又響應多年來”節能減碳推動再生能源”的趨勢，太陽能資源豐富，且無需運輸，對環境污染低。
進而感覺這是一份有責任感的行業，因此開啟了集陽綠能這班列車。</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.1111.com.tw/corp/72189449/#c1" className="default-btn">我要應徵 <span></span></a>
                        </div>
                    </div>
                </div>

                <div className="about-inner-area text-justify">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="about-text-box">
								<h3>安全</h3>
								<p>系統支架擁有結構技師簽證，且由結構技師設計規劃，並計算其結構強度及抗風係數，故結構及材料均符合結構設計規範要求，結構強度安全無虞。</p>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="about-text-box">
								<h3>整合服務</h3>
								<p>從太陽能系統評估、設計、申請台電併聯、簽證、施工、申請躉售及補助，到施工完成後的監控、保養、維修，
以上所有複雜的流程全部都可由集陽綠能幫您完成。</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 offset-lg-0 offset-md-0 offset-sm-3 col-sm-6">
							<div className="about-text-box">
								<h3>國家證照的施工保證
</h3>
								<p>集陽綠能有合格的甲級電器承裝業登記執照，具有專業的現場監造團隊 : 甲種電匠及太陽光電設置乙級技術士，及擁有經驗豐富的施工團隊。 </p>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
    )

}

export default CompanyInfo;