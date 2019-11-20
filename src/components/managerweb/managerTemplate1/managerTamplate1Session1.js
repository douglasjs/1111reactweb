import React from 'react';

function Session1(){

    return(
        <div className="card shadow mb-4">
            <a href="#collapseCard1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard1">
            <h6 className="m-0 font-weight-bold text-primary">設定區段-公司標題</h6>
            </a>
            <div className="collapse show" id="collapseCard1">
            <div className="card-body">
                設定公司標題
            </div>
            </div>
       </div>
    )

}
export default Session1;