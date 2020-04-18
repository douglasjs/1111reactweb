import React from 'react';

function CompanyJobs() {

    return (
        <section className="services-area bg-f8f8f8 pb-50 pt-70">
            <div id="jobs" className="container">
                <div className="section-title">
                   <span className="sub-title">Jobs</span>
                    <h2>職缺介紹</h2>
   
                </div>
                <div className="services-slides owl-carousel owl-theme">
                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-team"></i>

                        </div>

                        <h3><a href="/#">業務開發 - 外務</a></h3>

                        <p className="salary-fmt">論件計酬 1,000元 至 100,000元 </p>
						<p>台南市仁德區</p>
                       
                       	<a target="_blank" rel="noopener noreferrer" href="https://www.1111.com.tw/job/86013968/" className="default-btn">我要應徵 <span></span></a>

                        <div className="box-shape">
                            <img src="assets/tp04/img/box-shape1.png" alt="職缺介紹" />
                            <img src="assets/tp04/img/box-shape1g.png" alt="職缺介紹" />
                        </div>
                    </div>

                    <div className="single-services-box">
                        <div className="icon">
                            <i className="flaticon-insurance"></i>

                        </div>

                        <h3><a href="/#">業務人員 - 外務</a></h3>

                        <p className="salary-fmt">月薪 26,000元 至 30,000元 </p>
						<p>台南市仁德區</p>
             

                        <a target="_blank" rel="noopener noreferrer" href="https://www.1111.com.tw/job/85855649/" className="default-btn">我要應徵 <span></span></a>

                        <div className="box-shape">
                            <img src="assets/tp04/img/box-shape1.png" alt="職缺介紹" />
                            <img src="assets/tp04/img/box-shape1g.png" alt="職缺介紹" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default CompanyJobs;