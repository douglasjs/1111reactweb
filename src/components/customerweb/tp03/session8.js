import React from 'react';

function CompanyContact() {

    let imgURL = "url(image/tp03/background/testimonial-bg.png)";

    return (
        <section id="contact" className="contact-section" style={{backgroundImage: imgURL}}>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                        <div className="contact-form-area">
                            <div className="sec-title centred">
                                <h4 className="m-b-0">Contact</h4>
                                <h1>聯絡我們</h1>
                            </div>

                            <form method="post" id="register_form" className="default-form" action="http://azim.commonsupport.com/Rivox/sendemail.php"> 
                                <div className="row p-t-20">
                                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="username" placeholder="姓名*" required data-error="格式錯誤" />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="電子郵件*" data-error="郵件格式錯誤" required />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="phone" placeholder="電話" required />
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="subject" placeholder="主題" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="問題"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                        <button type="submit" className="btn-style-two" name="submit-form">送出</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
    )

}

export default CompanyContact;