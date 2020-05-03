import React from 'react';

function CompanyContact() {

    return (
        
		<section id="contact" className="vc_row pt-25 pb-25 bg-gray">
			<div className="container">
				<div className="row">

					<div className="lqd-column col-md-12 px-4 pt-25 pb-25 bg-white box-shadow-1">

						<div className="row d-flex flex-wrap align-items-center">

							<div className="lqd-column col-md-6 col-md-offset-1">

								<header className="fancy-title">
									<h2>聯絡我們</h2>
									<p>We are here to answer any question you may have</p>
								</header>

							</div>

							<div className="lqd-column col-md-4 hidden-sm hidden-xs text-right">

								<div className="iconbox text-right iconbox-xl" data-animate-icon="true" data-plugin-options='{"resetOnHover":true,"color":"rgb(216, 219, 226)","hoverColor":"rgb(0, 0, 0)"}'>
									<div className="iconbox-icon-wrap">
										<span className="iconbox-icon-container">
											<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" space="preserve"> 
												<polygon stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="1,30 63,1 23,41" /> 
												<polygon stroke-width="2" stroke-linejoin="bevel" stroke-miterlimit="10" points="34,63 63,1 23,41" /> 
											</svg>
										</span>
									</div>
								</div>
							</div>

						</div>

						<div className="row">

							<div className="lqd-column col-md-10 col-md-offset-1">

								<div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
									<form action="assets/php/mailer.php" method="post" novalidate>
										<div className="row d-flex flex-wrap">
											<div className="lqd-column col-md-6 mb-20">
												<input className="lh-25 mb-30" type="text" name="name" aria-required="true" aria-invalid="false" placeholder="姓名" required />
												<input className="lh-25 mb-30" type="email" name="email" aria-required="true" aria-invalid="false" placeholder="Email" required />
												<input className="lh-25 mb-30" type="tel" name="mobile" aria-required="true" aria-invalid="false" placeholder="手機" required />
											</div>
											<div className="lqd-column col-md-6 mb-20">
												<textarea cols="10" rows="6" name="message" aria-required="true" aria-invalid="false" placeholder="訊息" required></textarea>
											</div>
											
											<div className="lqd-column col-md-6 text-md-right">
												<input type="submit" value="送出" className="font-size-17 ltr-sp-1 font-weight-bold" />
											</div>
										</div>
									</form>
									<div className="contact-form-result hidden"></div>
								</div>

							</div>

						</div>

					</div>

				</div>
			</div>
		</section>
 
    )

}

export default CompanyContact;