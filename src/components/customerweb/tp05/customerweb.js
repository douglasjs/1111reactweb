import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp05/vendors/modernizr.min.js',
        '/assets/tp05/vendors/jquery.min.js',
        '/assets/tp05/js/theme-vendors.js',
        '/assets/tp05/js/theme.min.js',
        '/assets/tp05/js/goTopButton.js'
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