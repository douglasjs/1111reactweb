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
    
    chooseTemplate= (themNum, themIndex) =>{
        const index = themIndex ? themIndex : 0;
        switch(themNum){
            case "tp01":  return(<TP01 key={index} {...this.props}/>); 
            case "tp02":  return(<TP02 key={index} {...this.props}/>); 
            default:  return(<TP01 key={index} {...this.props}/>); 
        }
    }

    render(){
        const { data, isLoading } = this.props.datatableReducer;
        return(
            <div>
                {this.props.themNum ? this.chooseTemplate(this.props.themNum) :
                (!isLoading && data) && data.map( (items,index) =>{
                    return this.chooseTemplate(items.themeNum, index);
                })}
            </div>
        )
    }

}

export default customerIndex;