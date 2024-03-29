﻿import React from 'react';
import CustomerHeader from './customerheader';
import CustomerMain from './customermain';
import CustomerFoot from './customerfoot';
import useScript from '../../sharecomponents/usescript';


function CustomerWeb(props) {

    const URL = [
        '/assets/tp03/js/modernizr-3.6.0.min.js',
        '/assets/tp03/js/jquery-3.3.1.min.js',
        '/assets/tp03/js/jquery-migrate-1.2.1.min.js',
        '/assets/tp03/js/popper.min.js',
        '/assets/tp03/js/bootstrap.min.js',
        '/assets/tp03/js/counterup.min.js',
        '/assets/tp03/js/isotope.pkgd.min.js',
        '/assets/tp03/js/jquery.ajaxchimp.min.js',
        '/assets/tp03/js/jquery.appear.js',
        '/assets/tp03/js/jquery.countdown.min.js',
        '/assets/tp03/js/jquery.easypiechart.min.js',
        '/assets/tp03/js/jquery.fullpage.min.js',
        '/assets/tp03/js/jquery.justifiedGallery.min.js',
        '/assets/tp03/js/jquery.magnific-popup.min.js',
        '/assets/tp03/js/jquery.matchHeight-min.js',
        '/assets/tp03/js/jquery.mCustomScrollbar.min.js',
        '/assets/tp03/js/jquery.multiscroll.min.js',
        '/assets/tp03/js/jquery.nice-select.min.js',
        '/assets/tp03/js/jquery.slicknav.min.js',
        '/assets/tp03/js/jquery.sticky-sidebar.min.js',
        '/assets/tp03/js/jquery-ui.min.js',
        '/assets/tp03/js/leaflet.min.js',
        '/assets/tp03/js/lightslider.min.js',
        '/assets/tp03/js/parallax.min.js',
        '/assets/tp03/js/tippy.all.min.js',
        '/assets/tp03/js/typed.min.js',
        '/assets/tp03/js/waypoint.min.js',
        '/assets/tp03/js/active.js',
        '/assets/tp03/js/revslider/jquery.themepunch.tools.min.js',
        '/assets/tp03/js/revslider/jquery.themepunch.revolution.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.actions.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.carousel.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.kenburn.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.layeranimation.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.migration.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.navigation.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.parallax.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.slideanims.min.js',
        '/assets/tp03/js/revslider/extensions/revolution.extension.video.min.js',
        '/assets/tp03/js/revslider/rev-active.js',
        '/assets/tp03/js/goTopButton.js',
        '/assets/tp03/js/clickclose.js',
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