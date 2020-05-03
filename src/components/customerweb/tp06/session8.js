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

							

						</div>

						<div className="row">

							<div className="lqd-column col-md-10 col-md-offset-1">

								<div className="contact-form contact-form-inputs-underlined contact-form-button-circle">
									<form method="post">
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