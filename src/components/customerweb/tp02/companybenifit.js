import React from 'react';

function CompanyBenifit() {

    const style = {
        'backgroundImage' : 'url(./assets/img/benefit-bg_blue.png)'
    }

    return (
        <section id="benefit" className="vc_row bg-cover bg-center-bottom pt-10" style={style}>
            <div className="container">
                <div className="row d-flex flex-wrap align-items-center">

                    <div className="lqd-column col-xs-12 col-md-6">

                        <div className="liquid-img-group-container">
                            <div className="liquid-img-group-inner">
                                <div className="liquid-img-group-single" data-reveal="true" data-reveal-options='{"direction":"rl"}'>
                                    <div className="liquid-img-group-img-container liquid-img-group-container-benefit-sm">
                                        <div className="liquid-img-container-inner" data-parallax="true" data-parallax-from='{"scaleX":1.25,"scaleY":1.25}' data-parallax-to='{"scaleX":1,"scaleY":1}' data-parallax-options='{"overflowHidden":true,"easing":"linear"}'>
                                            <figure>
                                                <img src="image/benefit-1.png" alt="1111人力銀行員工福利" />
											</figure>
										</div>
									</div>
								</div>
							</div>
						</div>
    
					</div>
    
					<div className="lqd-column col-xs-12 col-md-6 pl-md-7">

                            <div className="ld-fancy-heading benefit-margin-custom">
                                <h2 className="text-black" data-text-rotator="true">
                                    <span className="ld-fh-txt">員工福利</span>
                                </h2>
                                <p className="benefit-hide-text text-black"><strong><span className="text-primary"> 法定項目</span></strong><br />
                                勞保、健保、男性員工陪產假、育嬰假、生理假、特別休假、員工體檢、勞退提撥金、職災保險<br />
							</p>
                        <p className="benefit-hide-text text-black">
                            <strong><span className="text-primary">福利制度</span></strong><br />
                                    獎 金 類：全勤獎金、年節獎金、員工生日禮金、年終獎金、三節獎金、禮品、績效獎金<br />
                                保 險 類：意外險、員工團保、員工及眷屬住院慰問金<br />
                            餐 飲 類：免費供餐<br />
                            娛 樂 類：自強活動、國內旅遊、尾牙、員工運動會<br />
								                補 助 類：員工結婚補助、生育補助、員工國內、外進修補助、員工及眷屬喪葬補助、員工購物優惠、社團補助<br />
                        其 　他：員工在職教育訓練、良好升遷制度
							</p>
						</div >

					</div>

				</div>
			</div>
		</section>
   
    )

}

export default CompanyBenifit;