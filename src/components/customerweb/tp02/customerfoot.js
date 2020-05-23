import React from 'react';

function CustomerFoot(props) {
    const { data } = props.datatableReducer;
    let companyName = '1111人力銀行' ;
    if(data && data.length > 0){
        companyName = data[0].companyName;
    }

    return (
        <footer className="main-footer" style={{backgroundColor: "#333"}}>
            <div className="container">

                <div className="footer-bottom clearfix">
                    <div className="left-content pull-left">
                        <div className="copyright" style={{color: "#fff"}}>
                            上述內容由{companyName}提供並授權1111使用，內容含各公司與產品均分屬各相關公司與個別擁有者之商標。
                            本網站內容享有著作權，禁止侵害，違者必究。<br />
                            1111人力銀行 All Rights Reserved
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default CustomerFoot;