import React from 'react';

function CompanyInfo() {

    return (
        
        <section id="company" className="vc_row pt-60 pb-30">

				<div className="container">
					<div className="row d-flex flex-wrap align-items-center">
						
						<div className="lqd-column col-md-6">

							<div className="liquid-img-group-container mb-md-0">
								<div className="liquid-img-group-inner">
									<div className="liquid-img-group-single" data-shadow-style="4" data-roundness="4" data-inview="true" data-animate-shadow="true">
										<div className="liquid-img-group-img-container">
					
											<div className="liquid-img-container-inner">
												<figure>
													<img src="./image/tp06/company-1.jpg" alt="1111人力銀行公司介紹" />
												</figure>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<div className="lqd-column col-md-6 pl-md-6 pr-md-7 text-justify">

							<header className="fancy-title mb-15">
								<h3 className="mt-0">永豐餘生技股份有限公司</h3>
								<p className="text-justify">
									永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。 <br />
									1998年永豐餘生物科技在臺灣宜蘭成立了南澳豐園農場，投身有機的事業，致力於栽培各種有機的食材，積極推廣尊重自然的有機生活哲學，試圖扮演有機生活管家的角色。 
								</p>
							</header>

							<a href="https://www.1111.com.tw/corp/50750609/" target='_blank' rel='noopener noreferrer' className="btn btn-solid btn-sm semi-round btn-bordered border-thin fresco px-2 font-size-17">
								<span>
									<span className="btn-txt">我要應徵</span>
								</span>
							</a>

							<a href="https://www.1111.com.tw/corp/50750609/" target='_blank' rel='noopener noreferrer' className="btn btn-default btn-sm semi-round btn-bordered border-thin btn-light px-2 font-size-17">
								<span>
									<span className="btn-txt">了解更多</span>
								</span>
							</a>

						</div>

					</div>
				</div>

			</section>

    )

}

export default CompanyInfo;