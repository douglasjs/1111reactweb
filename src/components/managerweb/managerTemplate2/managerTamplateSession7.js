import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import Msg from '../msg';

class Session7 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            qaSubTitle : '',
            qaEnable : '',
            qa1Title : '',
            qa1Content : '',
            qa2Title : '',
            qa2Content : '',
            qa3Title : '',
            qa3Content : '',
            qa4Title : '',
            qa4Content : '',
            qa5Title : '',
            qa5Content : ''
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
            ono : cid,
            themeNum : event.target.themeNum7.value,
            qaEnable : event.target.qaEnable.checked,
            qa1Title : event.target.qa1Title.value,
            qa1Content : event.target.qa1Content.value,
            qa2Title : event.target.qa2Title.value,
            qa2Content : event.target.qa2Content.value,
            qa3Title : event.target.qa3Title.value,
            qa3Content : event.target.qa3Content.value,
            qa4Title : event.target.qa4Title.value,
            qa4Content : event.target.qa4Content.value,
            qa5Title : event.target.qa5Title.value,
            qa5Content : event.target.qa5Content.value,
            qaSubTitle : '',
            qaImg : ' ',
            qaImgUpload : null
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
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(qaData && qaData.length > 0){
            actionType = 'modify';
            qaData.forEach(element => {
                qaEnable = qaEnable  !== "" ? qaEnable : element.qaEnable;
                qa1Title = qa1Title !== "" ? qa1Title : element.qa1Title;
                qa1Content = qa1Content !== "" ? qa1Content : element.qa1Content;
                qa2Title = qa2Title !== "" ? qa2Title : element.qa2Title;
                qa2Content = qa2Content !== "" ? qa2Content : element.qa2Content;
                qa3Title = qa3Title !== "" ? qa3Title : element.qa3Title;
                qa3Content = qa3Content !== "" ? qa3Content : element.qa3Content;
                qa4Title = qa4Title !== "" ? qa4Title : element.qa4Title;
                qa4Content = qa4Content !== "" ? qa4Content : element.qa4Content;
                qa5Title = qa5Title !== "" ? qa5Title : element.qa5Title;
                qa5Content = qa5Content !== "" ? qa5Content : element.qa5Content;
            })
        }
        
        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard7" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard7">
                    <h6 className="m-0 font-weight-bold">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard7">
                    <div className="card-body">
                            <Msg type ='LOADING'  value = {qaIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {qaErr} text= 'Opps! Error : ' />
                            <form id='dataForm7' className={qaIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>

                                <input type="hidden" id="themeNum7" value={themeNum} />
                                <InputSwitch sessionName={sessionName} inputName='qaEnable' inputState={qaEnable} stateObj={this} />
                                
                                <div className="form-row row-style-pt1">
                                    <div className="col-md-6 mb-3">

                                        <div className="form-row row-style-w95">
                                            <InputText title={`${sessionName}1標題`} notice='(建議字數為20個字以內)' inputName='qa1Title' inputState={qa1Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}1內容`} notice='(建議字數為180個字以內)' inputName='qa1Content' inputState={qa1Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}2標題`} notice='(建議字數為20個字以內)' inputName='qa2Title' inputState={qa2Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}2內容`} notice='(建議字數為180個字以內)' inputName='qa2Content' inputState={qa2Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}3標題`} notice='(建議字數為20個字以內)' inputName='qa3Title' inputState={qa3Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}3內容`} notice='(建議字數為180個字以內)' inputName='qa3Content' inputState={qa3Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}4標題`} notice='(建議字數為20個字以內)' inputName='qa4Title' inputState={qa4Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}4內容`} notice='(建議字數為180個字以內)' inputName='qa4Content' inputState={qa4Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}5標題`} notice='(建議字數為20個字以內)' inputName='qa5Title' inputState={qa5Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}5內容`} notice='(建議字數為180個字以內)' inputName='qa5Content' inputState={qa5Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>

                                        <hr />
                                        <div  align="center"><button type='submit' id='action7' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="pic-bigger"><img src="/image/sample_02/07.png" alt="Temp2_FAQ" width="100%"/></div>
                                        <div><a type="button" data-toggle="modal" href="#tmp2_faq">觀看放大圖例</a></div>
                                        <hr />
                                        <div>
                                            <table border='1'>
                                                <thead>
                                                    <tr>
                                                        <th width="10%">項目</th>
                                                        <th width="35%">內容</th>
                                                        <th width="15%">規格</th>
                                                        <th width="40%">備註</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>常見問題標題</td>
                                                        <td align='left'>過期或喝完的茶包丟掉就虧大了</td>
                                                        <td>建議20個字以內</td>
                                                        <td>至少2則以上才能輪播；<br />最多能輸入5則。</td>
                                                    </tr>
                                                    <tr>
                                                        <td>常見問題內容</td>
                                                        <td align='left'>天天下雨下到都快發霉了，衣櫃、鞋櫃都好潮濕怎麼辦呢?拿出泡過的茶包曬乾後，放置在冰箱、或易受潮處，吸飽濕氣後茶葉會膨脹，等到一定程度再更換，散發淡淡的茶香，除濕還可除臭。若要放置在衣櫃中，擺放時最好不要直接接觸衣物，以免產生變色或變味的情形。也可以製作茶葉薰香燈，將乾茶葉放置在香薰燈的精油放置處，點上蠟燭加熱後，不僅能吸附溼氣，還能讓空間充滿自然茶香氣，不妨在浴室、廁所試用看看。</td>
                                                        <td>建議180個字以內</td>
                                                        <td>至少2則以上內容才能輪播；<br />最多能輸入5則。</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    
                            <div className="modal fade" id="tmp2_faq">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">常見問題範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_02/07.png" alt="tmp2_faq" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
           </div>
        )
    }


}
export default Session7;