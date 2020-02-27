import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp01/vendors/jquery.min.js',
        '/assets/tp01/js/theme-vendors.js',
        '/assets/tp01/js/theme.min.js',
        '/assets/tp01/js/liquidAjaxContactForm.min.js',
        '/assets/tp01/js/liquidAjaxMailchimp.min.js',
        '/assets/tp01/js/goTopButton.js',
        '/assets/tp01/vendors/modernizr.min.js'
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
