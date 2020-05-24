import React from 'react';

function CustomerFoot(props) {
    const { data } = props.datatableReducer;
    let companyName = '1111人力銀行' ;
    if(data && data.length > 0){
        companyName = data[0].companyName;
    }

    return (
        <footer className="footer-area bg-gray reveal-footer footer-area--layout-custom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 order-1 order-md-0 text-center text-md-left">
                        <div className="copyright-txt mt-sm-15">
                            <p className="text-center text-white">
                                <span>
                                    上述內容由{companyName}提供並授權1111使用，內容含各公司與產品均分屬各相關公司與個別擁有者之商標。<br />
                                    本網站內容享有著作權，禁止侵害，違者必究。<br />
                                    &copy; 1111人力銀行 All Rights Reserved.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default CustomerFoot;