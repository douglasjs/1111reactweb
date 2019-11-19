import React from 'react';

function CompanyBrand() {

    const style = {
        maxHeight: '500px'
    }

    return (
        <section id="brand" className="vc_row pt-30 pb-30 bg-gray">
            <div className="container">
                <div className="row">

                    <div className="lqd-column col-lg-6">

                        <h2
                            className="font-size-38 lh-13 mt-0 mb-30"
                            data-split-text="true"
                            data-split-options='{"type":"lines"}'
                            data-text-rotator="true"
                        >
                            專業及熱情的有機生活管家

						</h2>

                        <div className="accordion accordion-md accordion-title-underlined accordion-expander-left accordion-active-color-primary" id="vc_accordion_5c77a7f9d2896" role="tablist">
                            <div className="accordion-item panel  active">
                                <div className="accordion-heading" role="tab" id="heading_accordion-1">
                                    <h4 className="accordion-title font-size-17 lh-15">
                                        <a data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-1" aria-expanded="true" aria-controls="accordion-1">
                                            安心宣言
											<span className="accordion-expander">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                            </span>
                                        </a>
                                    </h4>
                                </div>
								<div id="accordion-1" className="accordion-collapse collapse in" role="tabpanel" aria-labelledby="heading_accordion-1">
                                    <div className="accordion-content">
                                        <p>全方位的食材供應，從生產處理保存運送至宅配到府，層層把關，全程安心無污染，產品定期專業檢測。提昇您對於味覺的層次，講求食材的等級，與傳遞純淨飲食的生活態度。每週變化的菜單，提供搭配的烹調食譜，信手拈來，就是一桌美味盛宴。讓家人的健康，安心零負擔、三餐沒煩惱! </p>
                                    </div>
								</div>
							</div>

							<div className="accordion-item panel">
                                <div className="accordion-heading" role="tab" id="heading_accordion-2">
                                    <h4 className="accordion-title font-size-17 lh-15">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-2" aria-expanded="false" aria-controls="accordion-2">
                                            生態平衡
											<span className="accordion-expander">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                            </span>
                                        </a>
                                    </h4>
                                </div>
								<div id="accordion-2" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading_accordion-2">
                                    <div className="accordion-content">
                                        <p>夢中的淨土，得天獨厚的生產環境。遠眺，依山傍海的自然環境；近觀，質樸純善的人文氣息。豐收滿溢，開創了一片美好的自然天地。如此的好山、好水、好空氣，一切的視覺感動，幸福無限，生生不息</p>
                                    </div>
								</div>
							</div>

							<div className="accordion-item panel">
                                <div className="accordion-heading" role="tab" id="heading_accordion-3">
                                    <h4 className="accordion-title font-size-17 lh-15">
                                        <a className="collapsed" data-toggle="collapse" data-parent="#vc_accordion_5c77a7f9d2896" href="#accordion-3" aria-expanded="false" aria-controls="accordion-3">
                                            達人堅持
											<span className="accordion-expander">
                                                <i className="fa fa-angle-down"></i>
                                                <i className="fa fa-angle-up"></i>
                                            </span>
                                        </a>
                                    </h4>
                                </div>
								<div id="accordion-3" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="heading_accordion-3">
                                    <div className="accordion-content">
                                        <p>樸拙的生命，健康心靈；靈活身手，堅毅自信。嚴選的優良品種，以回歸大地的自然方式，用心栽培。每項食材的背後，近乎苛求，經歷了無數的執著篩選與專業考驗。一片菜葉、一顆果實，讓您每一口，都能體會到達人的精神與味覺滿足。慢慢喚醒您對於自然的記憶，進而更加珍惜大地的賜與。從外觀的包裝設計、到精選的純淨食材，交付到您手中的百寶箱，是我們謙卑的驕傲。 </p>
                                    </div>
								</div>
							</div>

						</div>

					</div>

					<div className="lqd-column col-xs-12 col-lg-6">

                        <div className="liquid-img-group-container">
                            <div className="liquid-img-group-inner">
                                <div className="liquid-img-group-single" data-reveal="true" data-reveal-options='{"direction":"lr"}'>
                                    <div className="liquid-img-group-img-container">
                                        <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"scaleX":1.25,"scaleY":1.25}' data-parallax-to='{"scaleX":1,"scaleY":1}' data-parallax-options='{"overflowHidden":true,"easing":"linear"}'>
                                            <figure>
                                                <img src="/image/brand-1.jpg" alt="1111人力銀行品牌介紹" style={style} />
											</figure>
										</div>
									</div>
								</div>
							</div>
						</div>
    
					</div>
    
				</div>
			</div>
		</section>
    )

}

export default CompanyBrand;