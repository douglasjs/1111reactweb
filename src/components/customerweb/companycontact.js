import React from 'react';

function CompanyContact() {
    const style = {
        backgroundImage: 'url(./image/bg-2-contact.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }
    return (
        <section id="contact" className="vc_row bg-cover bg-center">
            <div className="container-fluid">
                <div className="row d-flex flex-wrap align-items-stretch  box-shadow-3 " style={style}>
                    <div className="lqd-column col-md-6 col-xs-12 px-0 pt-20 pb-10" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"120","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":30,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

                        <div className="row">
                            <div className="lqd-column col-lg-6 col-md-10 col-lg-offset-3 col-md-offset-1 px-5">
                                <header className="fancy-title fancy-title-1111">
                                    <h2 className="mb-1">聯絡我們</h2>
                                    <p className="mt-0">有任何問題歡迎與我們聯繫</p>
                                </header>

									<div className="contact-form contact-form-inputs-filled contact-form-button-block font-size-14 pt-10">
                                    <form action="assets/php/mailer.php" method="post" noValidate>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input className="bg-white border-fade-black-03" type="text" name="name" aria-required="true" aria-invalid="false" placeholder="姓名" required />
												</div>
												<div className="col-md-6">
                                                    <input className="bg-white border-fade-black-03" type="tel" name="mobile" aria-required="true" aria-invalid="false" placeholder="電話" required />
												</div>
												<div className="col-md-12">
                                                        <input className="bg-white border-fade-black-03" type="email" name="email" aria-required="true" aria-invalid="false" placeholder="Email" required />
												</div>
                                                    
												<div className="col-md-12">
                                                            <textarea className="bg-white border-fade-black-03" cols="10" rows="3" name="message" aria-required="true" aria-invalid="false" placeholder="訊息" required></textarea>
                                                        </div>
												<div className="col-md-12 text-md-right">
                                                            <input className="font-weight-bold font-size-14 ltr-sp-1" type="submit" value="送出" />
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