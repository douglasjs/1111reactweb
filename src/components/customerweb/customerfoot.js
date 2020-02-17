import React from 'react';

function CustomerFoot(props) {
    const { data } = props.datatableReducer;
    let companyName = '1111人力銀行' ;
    if(data && data.length > 0){
        companyName = data[0].companyName;
    }
    return (
        <footer className="lqd-main-footer-bk bg-cape-cod">
            <section className="bt-fade-white-015 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="lqd-column col-md-12 text-md-right text-white mt-20">
                            <p className="my-0"><span>
                                上述內容由{companyName}提供並授權1111使用，內容含各公司與產品均分屬各相關公司與個別擁有者之商標。
                                本網站內容享有著作權，禁止侵害，違者必究。
                                <br />
                                © 2019 1111人力銀行.
                            </span></p>
                        </div>
					</div>
				</div>
			</section>
        </footer>

    )
}

export default CustomerFoot;