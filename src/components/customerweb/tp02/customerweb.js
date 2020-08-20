import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp02/js/jquery.js',
        '/assets/tp02/js/popper.min.js',
        '/assets/tp02/js/bootstrap.min.js',
        '/assets/tp02/js/owl.js',
        '/assets/tp02/js/wow.js',
        '/assets/tp02/js/jquery.fancybox.js',
        '/assets/tp02/js/jquery.paroller.min.js',
        '/assets/tp02/js/script.js',
        '/assets/tp02/js/goTopButton.js',
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