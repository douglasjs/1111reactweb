import React from 'react';
import TP01 from './tp01/customerweb';
import TP02 from './tp02/customerweb';
import TP03 from './tp03/customerweb';
import TP04 from './tp04/customerweb';
import TP05 from './tp05/customerweb';


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
            case "tp01":  return(<TP01 key={index} themeNum={themNum} {...this.props} />); 
            case "tp02":  return(<TP02 key={index} themeNum={themNum} {...this.props}/>); 
            case "tp03":  return(<TP03 key={index} themeNum={themNum} {...this.props}/>);
            case "tp04":  return(<TP04 key={index} themeNum={themNum} {...this.props}/>);
            case "tp05":  return(<TP05 key={index} themeNum={themNum} {...this.props}/>);  
            default:  return(<TP01 key={index} {...this.props}/>); 
        }
    }

    render(){
        const { data, isLoading } = this.props.datatableReducer;
        const themNum = this.props.match.params.themNum;
        return(
            <div>
                {themNum ? this.chooseTemplate(themNum) :
                (!isLoading && data) && data.map( (items,index) =>{
                    return this.chooseTemplate(items.themeNum, index);
                })}
            </div>
        )
    }

}

export default customerIndex;