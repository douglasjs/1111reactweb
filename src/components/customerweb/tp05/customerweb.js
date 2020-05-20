import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp05/js/jquery.min.js',
        '/assets/tp05/js/popper.min.js',
        '/assets/tp05/js/bootstrap.min.js',
        '/assets/tp05/js/parallax.min.js',
        '/assets/tp05/js/owl.carousel.min.js',
        '/assets/tp05/js/slick.min.js',
        '/assets/tp05/js/jquery.meanmenu.js',
        '/assets/tp05/js/jquery.appear.min.js',
        '/assets/tp05/js/odometer.min.js',
        '/assets/tp05/js/jquery.nice-select.min.js',
        '/assets/tp05/js/jquery.magnific-popup.min.js',
        '/assets/tp05/js/wow.min.js',
        '/assets/tp05/js/jquery.ajaxchimp.min.js',
        '/assets/tp05/js/form-validator.min.js',
        '/assets/tp05/js/contact-form-script.js',
        '/assets/tp05/js/main.js',
        '/assets/tp05/js/goTopButton.js'
       ]
    useScript(URL);


    return (
         
        <div>

            <CustomerHeader {...props}/>
            <CustomerMain {...props}/>
            <CustomerFoot {...props}/>

        </div>    
      
    )

}

export default CustomerWeb;