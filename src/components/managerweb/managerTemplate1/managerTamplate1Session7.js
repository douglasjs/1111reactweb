import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import Msg from '../msg';

class Session7 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            qaEnable : ' ',
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

    
    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono: cid,
            themeNum : event.target.themeNum7.value,
            qaEnable:  event.target.qaEnable.checked,
            qa1Title:  event.target.qa1Title.value,
            qa1Content:  event.target.qa1Content.value,
            qa2Title:  event.target.qa2Title.value,
            qa2Content:  event.target.qa2Content.value,
            qa3Title:  event.target.qa3Title.value,
            qa3Content:  event.target.qa3Content.value,
            qa4Title:  event.target.qa4Title.value,
            qa4Content:  event.target.qa4Content.value,
            qa5Title:  event.target.qa5Title.value,
            qa5Content:  event.target.qa5Content.value,
        }

        if(event.target.action7.value === 'create'){
            this.props.createqa(submitObj);
        }
        if(event.target.action7.value === 'modify'){
            this.props.updateqa(submitObj);
        }
    }

    render(){
        const { qaData, qaErr, qaIsLoading} = this.props.qaReducer;

        let qaEnable = this.state.qaEnable;
        let qa1Title = this.state.qa1Title;
        let qa1Content = this.state.qa1Content;
        let qa2Title = this.state.qa2Title;
        let qa2Content = this.state.qa2Content;
        let qa3Title = this.state.qa3Title;
        let qa3Content = this.state.qa3Content;
        let qa4Title = this.state.qa4Title;
        let qa4Content = this.state.qa4Content;
        let qa5Title = this.state.qa5Title;
        let qa5Content = this.state.qa5Content;

        const sessionName=  "常見問題";
        let themeNum = 'tp01';
        let actionType = 'create';

        if(qaData && qaData.length > 0){
            actionType = 'modify';
            qaData.forEach(element => {
                qaEnable = qaEnable  !==" " ? qaEnable : element.qaEnable;
                qa1Title = qa1Title !==" " ? qa1Title : element.qa1Title;
                qa1Content = qa1Content !==" " ? qa1Content : element.qa1Content;
                qa2Title = qa2Title !==" " ? qa2Title : element.qa2Title;
                qa2Content = qa2Content !==" " ? qa2Content : element.qa2Content;
                qa3Title = qa3Title !==" " ? qa3Title : element.qa3Title;
                qa3Content = qa3Content !==" " ? qa3Content : element.qa3Content;
                qa4Title = qa4Title !==" " ? qa4Title : element.qa4Title;
                qa4Content = qa4Content !==" " ? qa4Content : element.qa4Content;
                qa5Title = qa5Title !==" " ? qa5Title : element.qa5Title;
                qa5Content = qa5Content !==" " ? qa5Content : element.qa5Content;       
            })
        }
        
        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard7" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard7">
                    <h6 className="m-0 font-weight-bold text-primary">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard7">
                <div className="card-body">
                        <form id='dataForm7' className={qaIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <Msg type ='LOADING'  value = {qaIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {qaErr} text= 'Opps! Error : ' />
                            <input type="hidden" id="themeNum7" value={themeNum} />
                            <InputSwitch sessionName={sessionName} inputName='qaEnable' inputState={qaEnable} stateObj={this} />
                            <div className="form-row">
                                <label> </label>
                            </div>
                            <InputText  title= {`${sessionName}1標題`} notice='(字數限制為30個字以內)' inputName='qa1Title' inputState={qa1Title}
                                            stateObj={this} required={false} />
                            <InputTextArea title={`${sessionName}1內容`}notice='(字數限制為135個字以內)' inputName='qa1Content' inputState={qa1Content}
                                            rows='4' stateObj={this} required={false} />
                            <InputText  title= {`${sessionName}2標題`} notice='(字數限制為30個字以內)' inputName='qa2Title' inputState={qa2Title}
                                            stateObj={this} required={false} />
                            <InputTextArea title={`${sessionName}2內容`}notice='(字數限制為135個字以內)' inputName='qa2Content' inputState={qa2Content}
                                            rows='4' stateObj={this} required={false} />
                            <InputText  title= {`${sessionName}3標題`} notice='(字數限制為30個字以內)' inputName='qa3Title' inputState={qa3Title}
                                            stateObj={this} required={false} />
                            <InputTextArea title={`${sessionName}3內容`}notice='(字數限制為135個字以內)' inputName='qa3Content' inputState={qa3Content}
                                            rows='4' stateObj={this} required={false} />
                            <InputText  title= {`${sessionName}4標題`} notice='(字數限制為30個字以內)' inputName='qa4Title' inputState={qa4Title}
                                            stateObj={this} required={false} />
                            <InputTextArea title={`${sessionName}4內容`}notice='(字數限制為135個字以內)' inputName='qa4Content' inputState={qa4Content}
                                            rows='4' stateObj={this} required={false} />
                            <InputText  title= {`${sessionName}5標題`} notice='(字數限制為30個字以內)' inputName='qa5Title' inputState={qa5Title}
                                            stateObj={this} required={false} />           
                            <InputTextArea title={`${sessionName}5內容`}notice='(字數限制為135個字以內)' inputName='qa5Content' inputState={qa5Content}
                                            rows='4' stateObj={this} required={false} />

                            {/*this.createQA(5).map((preName, index)=>{
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
                            })*/}
                        
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