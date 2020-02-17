import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../sharecomponents/usescript';


function CustomerWeb(props) {


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
            <a className="top-link-icon hide" href="/#" id="js-top-icon"><i className="fa fa-angle-up"></i></a>
            <a className="top-link hide" href="/#" id="js-top">
                <img src="assets/img/join_icon_blue.png" alt="立即應徵" />
            </a>
        </div>    
      
    )

}

export default CustomerWeb;
