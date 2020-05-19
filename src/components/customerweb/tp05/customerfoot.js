import React from 'react';

function CustomerFoot(props) {
    const { data } = props.datatableReducer;
    let companyName = '1111人力銀行' ;
    if(data && data.length > 0){
        companyName = data[0].companyName;
    }

    return (
        <footer className="footer-area">
            <div className="container">   
                <div className="copyright-area">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <p>
                                <i className="far fa-copyright"></i> 
                                上述內容由{companyName}提供並授權1111使用，內容含各公司與產品均分屬各相關公司與個別擁有者之商標。 本網站內容享有著作權，禁止侵害，違者必究。
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default CustomerFoot;