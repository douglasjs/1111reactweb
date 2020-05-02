import React from 'react';

function CompanyQA() {

    let imgURL = "url('./image/tp05/bk.png')";

    return (

        <section id="faq" className="vc_row pt-150 pb-100">
			<div className="container">
				<div className="row" style={{backgroundImage: imgURL}}>

					<div className="lqd-column col-lg-4 col-md-12 pb-sm-5"  data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":1200,"delay":160,"initValues":{"translateY":50,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

						<header className="fancy-title mb-130">

							<h6 className="text-uppercase ltr-sp-2 font-size-13 font-weight-semibold text-secondary">Have a question?</h6>
							<h2 className="mt-1 mb-2">常見問題</h2>
							<p>提供員工最安心的成長環境與空間，特有的文化人才培養，一切由心開始</p>

						</header>

					</div>

					<div className="lqd-column col-lg-7 col-lg-offset-1 col-xs-12 mb-7 mb-md-0">

						<div className="carousel-container carousel-vertical-3d">

							<div className="carousel-items">	
								<div className="carousel-item is-active">	
									<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
										<div className="testimonial-info">
											<h6 className="font-weight-semibold">亞尼克客服資訊</h6>
										</div>
										<div className="testimonial-quote">
											<blockquote>
												<p className="font-size-16">訂單客服回覆時間：週一～週五9:00-18:00，例假日暫不回覆。<br />(如遇例假日，請先以電話方式聯絡，我們將會有客服專員協助處理)<br />客服專線：02-87978993#1<br />電話客服服務時間：週一~週日 9:00-18:00</p>
											</blockquote>
										</div>
									</div>	
								</div>
								
								<div className="carousel-item is-active">	
									<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
										<div className="testimonial-info">
											<h6 className="font-weight-semibold">如何選購亞尼克商品？</h6>
										</div>
										<div className="testimonial-quote">
											<blockquote>
												<p className="font-size-16">
                                                    線上購物：能列出所有亞尼克之商品（適用於選購少量品項、購買伴手禮、生日蛋糕）。<br />
                                                    捲派團購區：可享有大量團購生乳捲及派塔可享有團購優惠（適用大量團購生乳捲、派塔）。<br />
                                                    熱銷主打：亞尼克網站目前主打之促消活動。
												</p>
											</blockquote>
										</div>
									</div>	
								</div>
								
								<div className="carousel-item is-active">	
									<div className="bg-light-creative testimonial testimonial-whole-filled testimonial-whole-shadowed text-left testimonial-details-sm testimonial-avatar-sm">
										<div className="testimonial-info">
											<h6 className="font-weight-semibold">落實員工關懷</h6>
										</div>
										<div className="testimonial-quote">
											<blockquote>
												<p className="font-size-16">
                                                    安心食品以食品安全為己任，重視顧客健康與服務品質，提供健康、美味的商品給顧客，除餐點及舒適的用餐環境外，也照顧員工、提供區域就業機會、穩定社會，同時積極培育餐飲服務之產業人才，希望員工在為顧客服務的同時，也能體會幫助他人的快樂，在工作上獲得成就與滿足，實踐「貢獻人類，貢獻社會」的經營理念。
                                                </p>
											</blockquote>
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