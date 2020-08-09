import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';

class Session7 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            qaEnable : '',
            qa1Title : '',
            qa1Content : '',
            qa2Title : '',
            qa2Content : '',
            qa3Title : '',
            qa3Content : '',
            qaImg : ' ',
            qaImgUpload : '',
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
            qa4Title : '',
            qa4Content : '',
            qa5Title : '',
            qa5Content : '',
            qaSubTitle : '',
            qaImg : event.target.qaImg.value,
            qaImgUpload : this.state.qaImgUpload ? this.state.qaImgUpload.value : null
        }

        if(event.target.action7.value === 'create'){
            this.props.createqa(submitObj);
        }
        if(event.target.action7.value === 'modify'){
            this.props.updateqa(submitObj);
        }
    }

    render(){
        const cid = this.props.match.params.cid.trim();
        const { qaData, qaErr, qaIsLoading} = this.props.qaReducer;

        let qaEnable = this.state.qaEnable;
        let qa1Title = this.state.qa1Title;
        let qa1Content = this.state.qa1Content;
        let qa2Title = this.state.qa2Title;
        let qa2Content = this.state.qa2Content;
        let qa3Title = this.state.qa3Title;
        let qa3Content = this.state.qa3Content;
        let qaImg = this.state.qaImg;

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
                qaImg = qaImg !== " " ? qaImg : element.qaImg;
            })
        }

        // image
        let qaImgUpload = "";
        if(qaImg === " "){
            qaImgUpload = "/image/logo-1111.png";
        }else{
            qaImgUpload = this.state.qaImg !== ' ' ?  this.state.qaImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${qaImg}`;
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
                                            <InputText title={`${sessionName}1標題`} notice='(建議字數為56個字以內)' inputName='qa1Title' inputState={qa1Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}1內容`} notice='(建議字數為155個字以內)' inputName='qa1Content' inputState={qa1Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}2標題`} notice='(建議字數為56個字以內)' inputName='qa2Title' inputState={qa2Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}2內容`} notice='(建議字數為155個字以內)' inputName='qa2Content' inputState={qa2Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}3標題`} notice='(建議字數為56個字以內)' inputName='qa3Title' inputState={qa3Title}
                                                stateObj={this} required={false} checkValue='100' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}3內容`} notice='(建議字數為155個字以內)' inputName='qa3Content' inputState={qa3Content}
                                                rows='4' stateObj={this} required={false} checkValue='500' />
                                        </div>
                                        
                                        <div className="form-row row-style-w95-pt1">
                                            <ImgUpload title='常見問題圖片' notice='(圖檔尺寸大小為 570*480  ，接受格式為png、jpg)' objName='qaImg'  imgUpload={qaImgUpload} 
                                                imgFileName={qaImg} parentObj={this} imgW={570} imgH={480} required={false} />
                                        </div>

                                        <hr />
                                        <div  align="center"><button type='submit' id='action7' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="pic-bigger"><img src="/image/sample_03/07.png" alt="Temp3_FAQ" width="100%"/></div>
                                        <div><a type="button" data-toggle="modal" href="#tmp3_faq">觀看放大圖例</a></div>
                                        <hr />
                                        <div>
                                        <table border='1'>
                                            <thead>
                                            <tr>
                                                <th width="20%">項目</th>
                                                <th width="35%">內容</th>
                                                <th width="15%">規格</th>
                                                <th width="20%">備註</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>常見問題標題</td>
                                                <td align='left'>京典臻品 JD Classic</td>
                                                <td>建議56個字以內</td>
                                                <td align='left'>3則常見問題</td>
                                            </tr>
                                            <tr>
                                                <td>常見問題內容</td>
                                                <td align='left'>京典臻品JD Classic｜天然水晶礦石提供多元招財水晶開運方法最佳選擇，風水師推薦招財進寶盆、咬錢貔貅水晶、淨化磁場能量鎮宅之寶，水晶之王燕尾鈦晶手排提升 .</td>
                                                <td>建議155個字以內</td>
                                                <td align='left'>3則常見問題內容</td>
                                            </tr>
                                            <tr>
                                                <td>常見問題圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>570*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_faq_pic">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </form>
                    
                        <div className="modal fade" id="tmp3_faq">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">常見問題範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/07.png" alt="tmp3_faq" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_faq_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">常見問題範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/07-1.png" alt="tmp3_faq_pic" width="100%" />
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