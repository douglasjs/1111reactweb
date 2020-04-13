import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp03/js/jquery.js',
        '/assets/tp03/js/popper.min.js',
        '/assets/tp03/js/bootstrap.min.js',
        '/assets/tp03/js/owl.js',
        '/assets/tp03/js/wow.js',
        '/assets/tp03/js/validation.js',
        '/assets/tp03/js/jquery.fancybox.js',
        '/assets/tp03/js/appear.js',
        '/assets/tp03/js/aos.js',
        '/assets/tp03/js/jquery.paroller.min.js',
        '/assets/tp03/js/script.js',
        '/assets/tp03/js/goTopButton.js',
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