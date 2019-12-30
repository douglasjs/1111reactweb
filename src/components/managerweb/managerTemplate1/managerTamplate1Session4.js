import React from 'react';


class Session4 extends React.Component{

    constructor(props){
        super(props);
        this.state={}

    }

    render(){


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard4">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-職缺介紹</h6>
                </a>
                <div className="collapse show" id="collapseCard4">
                <div className="card-body">
                 職缺介紹
                </div>
                </div>
           </div>
        )

    }


}
export default Session4;