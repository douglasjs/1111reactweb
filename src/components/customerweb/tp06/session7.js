import React from 'react';

function CompanyQA() {

    return (

        <section id="faq" className="vc_row">
				<div className="container">
					<div className="row">
						
						<div className="lqd-column m-3">

							<header className="fancy-heading">
								<h2>常見問題</h2>
							</header>

							<div className="accordion accordion-tall accordion-body-underlined accordion-expander-lg accordion-active-color-primary" id="accordion-2" role="tablist">

								<div className="accordion-item panel  active">
									<div className="accordion-heading" role="tab" id="accordion-collapse-heading-1">
										<h4 className="accordion-title font-size-19">
											<a className="" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-panel-1" aria-expanded="true" aria-controls="accordion-collapse-panel-1">
												公司經營理念?
												<span className="accordion-expander">
													<i className="icon-arrows_circle_plus"></i>
													<i className="icon-arrows_circle_minus"></i>
												</span>
											</a>
										</h4>
									</div>
									<div id="accordion-collapse-panel-1" className="accordion-collapse collapse in" role="tabpanel" aria-labelledby="accordion-collapse-heading-1">
										<div className="accordion-content">
											<p>本公司擁有優秀的經營團隊，秉持著『◆安心宣言◆生態平衡◆達人堅持』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提昇，是國內績優廠商之一。 </p>
										</div>
									</div>
								</div>

								<div className="accordion-item panel">
									<div className="accordion-heading" role="tab" id="accordion-collapse-heading-2">
										<h4 className="accordion-title font-size-19">
											<a className="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-collapse-2" aria-expanded="false" aria-controls="accordion-collapse-collapse-2">
												員工有哪些福利?
												<span className="accordion-expander">
													<i className="icon-arrows_circle_plus"></i>
													<i className="icon-arrows_circle_minus"></i>
												</span>
											</a>
										</h4>
									</div>
									<div id="accordion-collapse-collapse-2" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="accordion-collapse-heading-2">
										<div className="accordion-content">
											<p>我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入 永豐餘生技股份有限公司的工作行列。</p>
										</div>
									</div>
								</div>

								<div className="accordion-item panel">
									<div className="accordion-heading" role="tab" id="accordion-collapse-heading-3">
										<h4 className="accordion-title font-size-19">
											<a className="collapsed" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-collapse-3" aria-expanded="false" aria-controls="accordion-collapse-collapse-3">
												公司的介紹?
												<span className="accordion-expander">
													<i className="icon-arrows_circle_plus"></i>
													<i className="icon-arrows_circle_minus"></i>
												</span>
											</a>
										</h4>
									</div>
									<div id="accordion-collapse-collapse-3" className="accordion-collapse collapse" role="tabpanel" aria-labelledby="accordion-collapse-heading-3">
										<div className="accordion-content">
											<p>永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。</p>
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

export default CompanyQA;