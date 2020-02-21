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
            <a className="top-link-icon hide" href="/#" id="jstopicon"><i className="fa fa-angle-up"></i></a>
            <a className="top-link show" href="https://www.1111.com.tw/corp/50750609/" target='_blank' rel="noopener noreferrer">
                <img src="assets/img/join_icon_blue.png" alt="立即應徵" />
            </a>
        </div>    
      
    )

}

export default CustomerWeb;
