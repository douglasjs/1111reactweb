import React from 'react';

function CompanyContact() {

    return (
        <div id="contact" className="finance-contact-area">
            <div className="contact-request-area">
                <div className="row no-gutters">
                    <div className="col-lg-3 col-xl-5">
                        <div className="requested-thumb bg-img" data-bg="image/tp02/contact-1.jpg"></div>
                    </div>
                    <div className="col-lg-9 col-xl-7">
                        <div className="requested-content-wrap pt-30 bg-secondary">
                            <div className="requested-content-inner">
                                <div className="requested-content-header">
                                    <h5 className="text-white">Contact</h5>
                                    <h4 className="font-weight-bold">聯絡我們</h4>
                                </div>
                                <div className="contact-form-wrap pt-30 pb-30">
                                    <form id="contact-form" action="http://whizthemes.com/mail-php/raju/arden/mail.php" method="post">
                                        <div className="contact-from-content mtn-70 mtn-sm-30">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-input-item light">
                                                        <input type="text" name="con_name" placeholder="姓名" required />
                                                    </div>
                                                </div>                                                
                                                <div className="col-md-6">
                                                    <div className="form-input-item light">
                                                        <input type="text" name="con_phone" placeholder="連絡電話" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-input-item light">
                                                        <input type="email" name="con_email" placeholder="電子郵件" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row align-items-end">
                                                <div className="col-lg-12">
                                                    <div className="form-input-item light">
                                                        <label htmlFor="message" className="sr-only">Message</label>
                                                        <textarea name="con_message" id="message" cols="30" rows="4" placeholder="您的訊息" required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-input-item light mt-i-30">
                                                        <button className="btn btn-brand2">送出</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-message"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
 
    )

}

export default CompanyContact;