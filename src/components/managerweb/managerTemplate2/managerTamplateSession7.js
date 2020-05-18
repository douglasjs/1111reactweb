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
            qaSubTitle:  '',
            qaImg:  event.target.qaImg.value,
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
        let qa4Title = this.state.qa4Title;
        let qa4Content = this.state.qa4Content;
        let qa5Title = this.state.qa5Title;
        let qa5Content = this.state.qa5Content;
        let qaImg = this.state.qaImg;

        const sessionName=  "常見問題";
        let themeNum = this.props.themeNum;
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
                qaImg = qaImg !==" " ? qaImg : element.qaImg;
            })
        }

        // image
        let qaImgUpload ="";
        if(qaImg === " "){
            qaImgUpload = "/image/logo-1111.png";
        }else{
            qaImgUpload = this.state.qaImg !==' ' ?  this.state.qaImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${qaImg}`;
        }
        
        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard7" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard7">
                    <h6 className="m-0 font-weight-bold">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard7">
                    <div className="card-body">
                        
                            <form id='dataForm7' className={qaIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                <Msg type ='LOADING'  value = {qaIsLoading} text='Processing ' /> 
                                <Msg type ='ERROR' value = {qaErr} text= 'Opps! Error : ' />
                                <input type="hidden" id="themeNum7" value={themeNum} />
                                <InputSwitch sessionName={sessionName} inputName='qaEnable' inputState={qaEnable} stateObj={this} />
                                
                                <div className="form-row row-style-pt1">
                                    <div className="col-md-6 mb-3">

                                        <div className="form-row row-style-w95">
                                            <InputText title={`${sessionName}1標題`} notice='(字數限制為30個字以內)' inputName='qa1Title' inputState={qa1Title}
                                                stateObj={this} required={false} checkValue='30' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}1內容`} notice='(字數限制為135個字以內)' inputName='qa1Content' inputState={qa1Content}
                                                rows='4' stateObj={this} required={false} checkValue='135' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}2標題`} notice='(字數限制為30個字以內)' inputName='qa2Title' inputState={qa2Title}
                                                stateObj={this} required={false} checkValue='30' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}2內容`} notice='(字數限制為135個字以內)' inputName='qa2Content' inputState={qa2Content}
                                                rows='4' stateObj={this} required={false} checkValue='135' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}3標題`} notice='(字數限制為30個字以內)' inputName='qa3Title' inputState={qa3Title}
                                                stateObj={this} required={false} checkValue='30' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}3內容`} notice='(字數限制為135個字以內)' inputName='qa3Content' inputState={qa3Content}
                                                rows='4' stateObj={this} required={false} checkValue='135' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}4標題`} notice='(字數限制為30個字以內)' inputName='qa4Title' inputState={qa4Title}
                                                stateObj={this} required={false} checkValue='30' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}4內容`} notice='(字數限制為135個字以內)' inputName='qa4Content' inputState={qa4Content}
                                                rows='4' stateObj={this} required={false} checkValue='135' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputText  title= {`${sessionName}5標題`} notice='(字數限制為30個字以內)' inputName='qa5Title' inputState={qa5Title}
                                                stateObj={this} required={false} checkValue='30' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <InputTextArea title={`${sessionName}5內容`} notice='(字數限制為135個字以內)' inputName='qa5Content' inputState={qa5Content}
                                                rows='4' stateObj={this} required={false} checkValue='135' />
                                        </div>
                                        <div className="form-row row-style-w95-pt1">
                                            <ImgUpload title='常見問題背景圖片' notice='(圖檔尺寸大小為 1920*1080  ，接受格式為png、jpg)' objName='qaImg'  imgUpload={qaImgUpload} 
                                                imgFileName={qaImg} parentObj={this} imgW={1920} imgH={1080} required={false} />
                                        </div>

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
                                        <div  align="center"><button type='submit' id='action7' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="pic-bigger"><img src="/image/sample_01/07.png" alt="Temp1_FAQ" width="100%"/></div>
                                        <div><a type="button" data-toggle="modal" href="#tmp1_faq">觀看放大圖例</a></div>
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
                                                <td align='left'>公司經營理念?</td>
                                                <td>30個字以內</td>
                                                <td>至少2則以上內容，才能輪播；<br />最多能輸入5則。</td>
                                            </tr>
                                            <tr>
                                                <td>常見問題內容</td>
                                                <td align='left'>本公司擁有優秀的經營團隊，秉持著『◆安心宣言◆生態平衡◆達人堅持』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提昇，是國內績優廠商之一。 我們更希望能屏除一般人對於天然食物口味上的既定印象，帶給消費者既健康又安全、可口的好味道。</td>
                                                <td>135個字以內</td>
                                                <td>至少2則以上內容，才能輪播；<br />最多能輸入5則。</td>
                                            </tr>
                                            <tr>
                                                <td>常見問題背景圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>1920*1080</td>
                                                <td>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </form>
                    
                        <div className="modal fade" id="tmp1_faq">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">常見問題範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/07.png" alt="tmp1_faq" width="100%" />
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