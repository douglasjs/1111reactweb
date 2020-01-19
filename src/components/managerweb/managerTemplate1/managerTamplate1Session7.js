import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';

class Session7 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            qaEnable : false,
            qa1Title : ' ',
            qa1Content : ' ',
            qa2Title : ' ',
            qa2Content : ' ',
            qa3Title : ' ',
            qa3Content : ' ',
            qa4Title : ' ',
            qa4Content : ' ',
            qa5Title : ' ',
            qa5Content : ' ',
        };     
    }

    createQA = (number) =>{
        let qaArray = [];
        for(let i = 0 ; i < number ; i++){
            qaArray.push(`qa${i}`);
        }
        return qaArray; 
    }

    render(){

       // const cid = this.props.match.params.cid.trim();
        const sessionName=  "常見問題";
        const qaEnable = this.state.qaEnable;
        let actionType = 'create';

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard7" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard7">
                    <h6 className="m-0 font-weight-bold text-primary">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard7">
                <div className="card-body">
                        <form id='dataForm7'>
                            <InputSwitch sessionName={sessionName} inputName='qaEnable' inputState={qaEnable} stateObj={this} />
                            <div className="form-row">
                                <label> </label>
                            </div>
                            {this.createQA(5).map((preName, index)=>{
                                const titleName = `${preName}Title`;
                                const contentName = `${preName}Content`;
                                const thatState = this.state;
                                return(
                                    <div key={index}>
                                        <InputText  title= {`${sessionName}${index+1}標題`} notice='(字數限制為30個字以內)' inputName={titleName} inputState={thatState[titleName]}
                                            stateObj={this} required={false} />
                                        <InputTextArea title={`${sessionName}${index+1}內容`}notice='(字數限制為135個字以內)' inputName={contentName} inputState={thatState[contentName]}
                                            rows='4' stateObj={this} required={false} />
                                    </div>
                                )
                            })}
                        
                            <hr />
                            <button type='submit' id='action7' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                        </form>
                    </div>
                </div>
           </div>
        )
    }


}
export default Session7;