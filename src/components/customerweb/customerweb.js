import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../sharecomponents/usescript';


function CustomerWeb(props) {

    const { data } = props.datatableReducer;
    
    let companyNo = "1355006";
    if(data && data.length > 0){
        companyNo = data[0].oNo;
    }

    let companyurl = "https://www.1111.com.tw/corp/" + companyNo + "/#c4";

    const URL = [
        '/assets/vendors/jquery.min.js',
        '/assets/js/theme-vendors.js',
        '/assets/js/theme.min.js',
        '/assets/js/liquidAjaxContactForm.min.js',
        '/assets/js/liquidAjaxMailchimp.min.js',
        '/assets/js/goTopButton.js',
        '/assets/vendors/modernizr.min.js'
       ]
    useScript(URL);


    return (
         
        <div>
          
            <div id="wrap">
                <CustomerHeader {...props}/>
                <CustomerMain {...props}/>
                <CustomerFoot {...props}/>
            </div>
        </div>    
      
    )

}

export default CustomerWeb;
