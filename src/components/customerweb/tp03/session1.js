import React from 'react';

function CompanyTitle() {

    let imgURL = "url(image/tp03/background/banner-1_red.png)";

    return (
        
        <section className="banner-section" style={{backgroundImage: imgURL}}>
            <div className="anim-icon">
                <div className="icon icon-1 float-bob-x"></div>
                <div className="icon icon-2"></div>
                <div className="icon icon-3"></div>
                <div className="icon icon-4 float-bob-y"></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box text-left">
                            <h1>和媽咪樂MHHS<br />一起創造未來！</h1>
                            <div className="text">如此偉大的旅程，我們才剛剛開始</div>
                            <div className="btn-box">
                                <a className="btn-style-two" target="_blank" rel="noopener noreferrer" href="https://www.1111.com.tw/corp/9635172/#c4">徵的就是你!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image float-bob-y clearfix">
                                <img src="image/tp03/banner-image-1.png" alt="1111人力銀行" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CompanyTitle;