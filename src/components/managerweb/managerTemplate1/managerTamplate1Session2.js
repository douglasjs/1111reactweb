import React from 'react';

function Session2(){

    return(
        <div className="card shadow mb-4">
            <a href="#collapseCard2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
            <h6 className="m-0 font-weight-bold text-primary">設定區段-公司介紹</h6>
            </a>
            <div className="collapse show" id="collapseCard2">
            <div className="card-body">
                設定公司介紹
            </div>
            </div>
       </div>
    )

}
export default Session2;