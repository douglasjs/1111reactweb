import React from 'react';

function CompanyTitle() {

    let imgURL1 = "url(image/tp04/banner-5.jpg)";
    let imgURL2 = "url(image/tp04/banner-4.jpg)";

    return (        

        <div className="home-area home-slides-two owl-carousel owl-theme">
            <div className="banner-section" style={{backgroundImage: imgURL1}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-section" style={{backgroundImage: imgURL2}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default CompanyTitle;