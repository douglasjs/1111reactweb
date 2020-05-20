import React from 'react';

function CustomerFoot(props) {
    const { data } = props.datatableReducer;
    let companyName = '1111人力銀行' ;
    if(data && data.length > 0){
        companyName = data[0].companyName;
    }

    return (
        <footer className="main-footer pt-0">

            <section className="bt-fade-white-015 pt-10 pb-10">
                <div className="container">
                    <div className="row">
        
                        <div className="lqd-column col-md-6 col-md-offset-3 text-center">
                            <p className="mb-10px">
                                <span className="font-size-13 line-height-1_2em">
                                    上述內容由{companyName}提供並授權1111使用，內容含各公司與產品均分屬各相關公司與個別擁有者之商標。
                                    本網站內容享有著作權，禁止侵害，違者必究。
                                </span>
                            </p>
                            <p>1111人力銀行 All Rights Reserved</p>
        
                        </div>
        
                    </div>
                </div>
            </section>
            
        </footer>
    )
}

export default CustomerFoot;