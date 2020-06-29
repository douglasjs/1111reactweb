import React from 'react';
import useScript from '../sharecomponents/usescript';
import ManagerScollToTop from '../sharecomponents/managerScrollToTop';

function ManagerFoot (props){

    const URL=[
        '/assetsBK/vendor/jquery/jquery.min.js',
        '/assetsBK/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assetsBK/js/sb-admin-2.min.js'
    ];

    useScript(URL);
     
    return(

        <div>
            <ManagerScollToTop />
        </div>

    )


}

export default ManagerFoot;