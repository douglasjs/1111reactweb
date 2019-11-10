import React from 'react';

function CompanyQA() {

    const style = {
        backgroundImage: 'url(image/bg-1-faq.jpg)'
    }

    return (

        <section id="faq" className="faq-padding-custom bg-cover box-shadow-3" style={style}>

            <div className="container">
                <div className="row">

                    <div className="lqd-column col-md-12">

                        <div className="carousel-container carousel-nav-left px-md-5 mx-md-5">


                            <div className="row" >


                                <div className="col-md-2 col-xs-6 col-xs-offset-3 col-md-offset-0 mb-4 mb-md-0 faq-hidden"></div>

								<div className="col-md-10 col-xs-12 pl-md-4">

                                    <div className="img-mask-custom carousel-items row testimonials-quotes row carousel-quotes-1 carousel-nav-light carousel-nav-hover-light carousel-nav-border-none " data-lqd-flickity='{ "prevNextButtons": true, "navStyle": 1, "navOffsets": { "nav": { "left": 15 } }, "rightToLeft": true }'>

                                        <div className="col-xs-12">
                                            <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                <div className="testimonial-quote">
                                                    <h6 className="mt-30 font-size-20 text-white">公司經營理念?</h6>
                                                    <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                        <p>本公司擁有優秀的經營團隊，秉持著『◆安心宣言◆生態平衡◆達人堅持』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提昇，是國內績優廠商之一。 我們更希望能屏除一般人對於天然食物口味上的既定印象，帶給消費者既健康又安全、可口的好味道。</p>
                                                    </blockquote>
                                                </div>
											</div>
										</div>
										<div className="col-xs-12">
                                            <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                <div className="testimonial-quote">
                                                    <h6 className="mt-30 font-size-20 text-white">員工有哪些福利?</h6>
                                                    <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                        <p>我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入 永豐餘生技股份有限公司的工作行列。在關愛家人、疼惜地球的理念下，創造了更勝於食材美味的深層意義與無限價值。</p>
                                                    </blockquote>
                                                </div>
											</div>
										</div>

										<div className="col-xs-12">
                                            <div className="testimonial testimonial-lg testimonial-details-sm text-left testimonials-quote-only mb-10">
                                                <div className="testimonial-quote">
                                                    <h6 className="mt-30 font-size-20 text-white">公司的介紹?</h6>
                                                    <blockquote className="font-size-16 lh-165 text-fade-white-08">
                                                        <p>永豐餘生技(股)公司是永豐餘投資控股股份有限公司旗下關係企業，創立於民國 89 年，主要從事食品生技業、有機農業、製造業、餐飲業等。打造真正的有機生活，是從生活之中去慢慢匯集，也讓土地擁有生生不息的再生力量！</p>
                                                    </blockquote>
                                                </div>
											</div>
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

export default CompanyQA;