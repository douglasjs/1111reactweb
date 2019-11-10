import React from 'react';

function ManagerWeb(props) {
    const cid = props.match.params.cid;

    return (


        <div>
            <div>{cid} ManagerWeb</div>
        </div>    
    )

}

export default ManagerWeb;
