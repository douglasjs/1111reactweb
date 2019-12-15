import React from 'react';
import useScript from '../sharecomponents/usescript';

function ManagerFoot (props){

    const URL=[
        '/assetsBK/vendor/jquery/jquery.min.js',
        '/assetsBK/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assetsBK/js/sb-admin-2.min.js',
        '/assetsBK/vendor/chart.js/Chart.min.js',
    ];

    useScript(URL);
     
    return(

        <div></div>

    )


}

export default ManagerFoot;