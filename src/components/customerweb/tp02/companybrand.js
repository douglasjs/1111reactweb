import React from 'react';

function CompanyBrand() {

    return (
        <div id="brand" className="gallery-banner-area custom-top">
            <div className="row no-gutters">
                <div className="col-md-6 col-xl-6">
                    <div className="gallery-banner-item bg-img" data-bg="image/tp02/brand-1.jpg"></div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="gallery-banner-item bg-img" data-bg="image/tp02/brand-2.jpg"></div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="gallery-banner-item gallery-banner-item-txt bg-brand">
                        <div className="gallery-banner-txt">
                            <h5><strong>用心-提升職能 共同學習成長</strong></h5>
                            <p>
                                藉由各種課程的舉辦，不僅提升同仁全方位的職能，更用心照顧同仁身心平衡發展。
                                如：五五併行：提升同仁競爭力。
                                產地學習：對於食材的素養更加提升。
                                關係工作坊：建立團隊信任，尋求共識與分工。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="gallery-banner-item bg-img" data-bg="image/tp02/brand-3.jpg"></div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="gallery-banner-item gallery-banner-item-txt bg-secondary">
                        <div className="gallery-banner-txt">
                            <h5 className="text-brand"><strong>有情- 支持陪伴 珍惜每位夥伴的聲音</strong></h5>
                            <p className="text-gray">我們相信，透過對話處理人與自己、與他人、與事物，以及與環境之間的關係，能讓彼此間的能量持續正向流動。</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-6">
                    <div className="gallery-banner-item bg-img" data-bg="image/tp02/brand-4.jpg"></div>
                </div>
            </div>
        </div>
    )

}

export default CompanyBrand;