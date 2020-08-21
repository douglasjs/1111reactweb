import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp06/vendors/modernizr.min.js',
        '/assets/tp06/js/theme-vendors.js',
        '/assets/tp06/js/theme.min.js',
        '/assets/tp06/js/liquidAjaxContactForm.min.js',
        '/assets/tp06/js/liquidAjaxMailchimp.min.js',
        '/assets/tp06/js/goTopButton.js'
       ]
    useScript(URL);


    return (
        
        <div id="wrap">
            <CustomerHeader {...props}/>
            <CustomerMain {...props}/>
            <CustomerFoot {...props}/>
        </div>
      
    )

}

export default CustomerWeb;