import React from 'react';

function CompanyTitle() {

    return (
        
        <section
            className="vc_row height-60 d-flex flex-wrap align-items-end"
            data-parallax="true"
            data-parallax-options='{"parallaxBG":true}'
            data-slideshow-bg="true"
            data-slideshow-options='{"delay":3000,"effect":"scale","imageArray":["./image/slider-blue.jpg","./image/slider-2.jpg"]}'
        >

            <span className="row-bg-loader">
                <span className="row-bg-loader-inner"></span>
            </span>

            <div className="container">
                <div className="row">

                    <div className="lqd-column col-md-10 col-md-offset-1 text-center py-7" data-custom-animations="true" data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"150","easing":"easeOutQuint","direction":"forward","initValues":{"translateY":31,"translateZ":-108,"opacity":0},"animations":{"translateY":0,"translateZ":0,"opacity":1}}'>

                        <header className="fancy-title">
                            <h6 className="text-white lh-15 mb-4"><span className="font-size-3-3x lh-1 font-weight-bold text-shodow"> 永豐餘生技</span></h6>

                            <div className="row">
                                <div className="lqd-column col-md-8 col-md-offset-2">

                                    <p className="text-white text-shodow font-size-24 mb-1">期許作為一個專業及熱情的有機生活管家，貼心的讓客人輕鬆的享受有機生活。</p>

                                </div>
                            </div>

                            <h6 className="text-uppercase font-weight-bold ltr-sp-2 text-white text-shodow mb-5">歡迎優秀的朋友一起加入</h6>

                        </header>

                        <a href="https://m.1111.com.tw/corp/50750609/" className="btn btn-solid text-uppercase circle btn-bordered border-thin font-size-18 font-weight-bold ltr-sp-05 px-2 bg-hover-white text-hover-primary mb-2" data-localscroll="true" data-localscroll-options='{"scrollBelowSection":true}'>
                            <span>
                                <span className="btn-txt">我要應徵</span>
                            </span>
                        </a>

                    </div>

                </div>
            </div>

        </section>    
    )

}

export default CompanyTitle;