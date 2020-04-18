import React from 'react';

function CompanyContact() {

    return (
        <section className="faq-contact-area pb-10 pt-0">
            <div id="contact" className="container">
                <div className="section-title">
                    <span className="sub-title">Message Us</span>
                    <h2>聯絡我們</h2>
             
                </div>

                <div className="faq-contact-form">
                    <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="姓名" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="您的信箱" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="電話" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="訊息"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <button type="submit" className="default-btn"> 送出 <span></span></button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div className="bg-map"><img src="assets/tp04/img/bg-map.png" alt="連絡我們" /></div>
        </section>
 
    )

}

export default CompanyContact;