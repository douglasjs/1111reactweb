import React from 'react';
import TP01 from './tp01/customerweb';
import TP02 from './tp02/customerweb';


class customerIndex extends React.Component{

    constructor(props){
        super(props);
        this.state={theme : ''};
    }
    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getDataList(cid);
    }

    render(){
        const { data, isLoading } = this.props.datatableReducer;
        return(
            <div>
                {(!isLoading && data) && data.map( (items,index) =>{
                    switch(items.themeNum){
                        case "tp01":  return(<TP01 key={index} {...this.props}/>); 
                        case "tp02":  return(<TP02 key={index} {...this.props}/>); 
                        default:  return(<TP01 key={index} {...this.props}/>); 
                    }
                })}
            </div>
        )
    }

}

export default customerIndex;