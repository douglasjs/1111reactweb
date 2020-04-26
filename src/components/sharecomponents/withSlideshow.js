import React from 'react';
import envConfig from '../../config/env';

const Slideshow = Componet => props => {
    const companyData = props.companyData;
    const cid = props.match.params.cid;
    const url =  `${envConfig.WebAPI}/image/${cid}?fileName=`;
    let companyBackgroundImg1 =  '';
    let companyBackgroundImg2 =  '';

    console.log(companyData);

    if(companyData && companyData.length > 0){
        companyData.forEach(element => {
            companyBackgroundImg1 = element.companyBackgroundImg1;
            companyBackgroundImg2 =  element.companyBackgroundImg2;
        })
    }

    // image
    //companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
    //companyBackgroundImg2 = !companyBackgroundImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;
    companyBackgroundImg1 = `${url}${companyBackgroundImg1}`;
    companyBackgroundImg2 = `${url}${companyBackgroundImg2}`;
    const imageData = `{"delay":3000,"effect":"scale","imageArray":["${companyBackgroundImg1}","${companyBackgroundImg2}"]}`;

    return(
        <session>
                <Componet {...props}/>
        </session>
    )
}

export default Slideshow;