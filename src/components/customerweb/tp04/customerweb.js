import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp04/js/jquery.min.js',
        '/assets/tp04/js/popper.min.js',
        '/assets/tp04/js/bootstrap.min.js',
        '/assets/tp04/js/parallax.min.js',
        '/assets/tp04/js/owl.carousel.min.js',
        '/assets/tp04/js/slick.min.js',
        '/assets/tp04/js/jquery.meanmenu.js',
        '/assets/tp04/js/jquery.appear.min.js',
        '/assets/tp04/js/odometer.min.js',
        '/assets/tp04/js/jquery.nice-select.min.js',
        '/assets/tp04/js/jquery.magnific-popup.min.js',
        '/assets/tp04/js/wow.min.js',
        '/assets/tp04/js/jquery.ajaxchimp.min.js',
        '/assets/tp04/js/form-validator.min.js',
        '/assets/tp04/js/contact-form-script.js',
        '/assets/tp04/js/main.js',
        '/assets/tp04/js/goTopButton.js'
       ]
    useScript(URL);


    return (
         
        <div>

            {/*<div className="preloader">
                <div className="loader">
                    <div className="shadow"></div>
                    <div className="box"></div>
                </div>
            </div>*/}

            <CustomerHeader {...props}/>
            <CustomerMain {...props}/>
            <CustomerFoot {...props}/>

        </div>    
      
    )

}

export default CustomerWeb;