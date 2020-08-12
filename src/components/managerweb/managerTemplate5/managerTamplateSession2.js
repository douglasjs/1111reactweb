import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import Msg from '../msg';
import envConfig from '../../../config/env';
import {strNumLimite} from '../../sharecomponents/toolFunction';

class Session2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            introTitle: '',
            introMainContent: '',
            introSubTitle1: '',
            introSubTitle1Content: '',
            introSubTitle1Img: ' ',
            introSubTitle1ImgUpload: '',
            introSubTitle2: '',
            introSubTitle2Content: '',
            introSubTitle2Img: ' ',
            introSubTitle2ImgUpload: '',
            introSubTitle3: '',
            introSubTitle3Content: ''
        }
    }

    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleFileUpload = (name, stateName, uploadName) => event =>{
        const infoArea = document.getElementById(name);
        const input = event.target;
   

        if (input.files && input.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                
                const img = new Image();
                const that = this;
                img.src=reader.result;

                img.onload = function() {
                   if(img.width > 360 || img.height > 300){
                       alert('上傳圖片尺寸不合');
                       return false;
                   }else{
                        that.setState( {...this.state,
                            [uploadName]: {
                                file: URL.createObjectURL(file),
                                value : reader.result
                            }
                        });
                        infoArea.textContent = '上傳檔案名稱: ' + file.name;
                        const fileFullName = stateName + "_"+ file.name;
                        that.setState({ ...this.state, [stateName]: fileFullName });
                   }
                };
            };
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid.trim();

        const submitObj={
            ono: cid,
                themeNum : event.target.themeNum2.value,
                introTitle: event.target.introTitle.value,
                introMainContent: event.target.introMainContent.value,
                introSubTitle1: event.target.introSubTitle1.value,
                introSubTitle1Content: event.target.introSubTitle1Content.value,
                introSubTitle1ImgText: '',
                introSubTitle1Img: event.target.introSubTitle1Img.value,
                introSubTitle1ImgUpload: this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,

                introSubTitle2: event.target.introSubTitle2.value,
                introSubTitle2Content: event.target.introSubTitle2Content.value,
                introSubTitle2ImgText: '',
                introSubTitle2Img: event.target.introSubTitle2Img.value,
                introSubTitle2ImgUpload: this.state.introSubTitle2ImgUpload ? this.state.introSubTitle2ImgUpload.value : null,

                introSubTitle3: event.target.introSubTitle3.value,
                introSubTitle3Content: event.target.introSubTitle3Content.value,
                introSubTitle3ImgText: '',
                introSubTitle3Img: '',
                introSubTitle3ImgUpload: null,

                intro1ImgUpload: null,
                intro1Img: "",
                intro2ImgUpload: null,
                intro2Img: "",
                intro3ImgUpload: null,
                intro3Img: "",
                intro4ImgUpload: null,
                intro4Img: "",
                intro5ImgUpload: null,
                intro5Img: "",
                intro6ImgUpload: null,
                intro6Img: "",
                intro7ImgUpload: null,
                intro7Img: "",
                intro8ImgUpload: null,
                intro8Img: "",
                intro9ImgUpload: null,
                intro9Img: "",
                intro10ImgUpload: null,
                intro10Img: "",
                introImgEnable: false
        }

        if(event.target.action2.value === 'create'){
            this.props.createintroduction(submitObj);            
        }
        if(event.target.action2.value === 'modify'){
            this.props.updateintroduction(submitObj);            
        }
    }
    
    render(){

        const { introductionData, introductionErr, introductionIsLoading } = this.props.introductionReducer;
        const { kind01_data } = this.props.kind01Reducer;
       

        const cid = this.props.match.params.cid.trim();

        let introTitle = this.state.introTitle;
        let introMainContent = this.state.introMainContent;
        let introSubTitle1 = this.state.introSubTitle1;
        let introSubTitle1Content = this.state.introSubTitle1Content;
        let introSubTitle1Img = this.state.introSubTitle1Img;
        let introSubTitle2 = this.state.introSubTitle2;
        let introSubTitle2Content = this.state.introSubTitle2Content;
        let introSubTitle2Img = this.state.introSubTitle2Img;
        let introSubTitle3 = this.state.introSubTitle3;
        let introSubTitle3Content = this.state.introSubTitle3Content;
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !=="" ? introTitle : element.introTitle;
                introMainContent = introMainContent !=="" ? introMainContent : element.introMainContent;

                introSubTitle1 = introSubTitle1 !=="" ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Content = introSubTitle1Content !=="" ? introSubTitle1Content : element.introSubTitle1Content;
                introSubTitle1Img = introSubTitle1Img !==" " ? introSubTitle1Img : element.introSubTitle1Img;

                introSubTitle2 = introSubTitle2 !=="" ? introSubTitle2 : element.introSubTitle2;
                introSubTitle2Content = introSubTitle2Content !=="" ? introSubTitle2Content : element.introSubTitle2Content;
                introSubTitle2Img = introSubTitle2Img !==" " ? introSubTitle2Img : element.introSubTitle2Img;

                introSubTitle3 = introSubTitle3 !=="" ? introSubTitle3 : element.introSubTitle3;
                introSubTitle3Content = introSubTitle3Content !=="" ? introSubTitle3Content : element.introSubTitle3Content;
            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === '' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
        }

         // image
         let introSubTitle1ImgUpload ="";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !==' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
         }

         let introSubTitle2ImgUpload ="";
         if(introSubTitle2Img === " "){
            introSubTitle2ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle2ImgUpload = this.state.introSubTitle2Img !==' ' ?  this.state.introSubTitle2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;
         }


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard2" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
                    <h6 className="m-0 font-weight-bold">設定區段-公司介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard2">
                    <div className="card-body">
                        
                        <Msg type ='LOADING'  value = {introductionIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {introductionErr} text= 'Opps! Error : ' />
                        <form id='dataForm2' className={introductionIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <input type="hidden" id="themeNum2" value={themeNum} />

                            <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                            
                            <div className="form-row">

                                <div className="col-md-6 mb-3">
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='主標題' notice='(建議字數為14個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(建議字數為270個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='5' stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片一 上傳' notice='(圖檔尺寸大小為 360*300，接受格式為png、jpg)' objName='introSubTitle1Img'  imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={360} imgH={300} required={true} />                                               
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片二 上傳' notice='(圖檔尺寸大小為 360*300，接受格式為png、jpg)' objName='introSubTitle2Img'  imgUpload={introSubTitle2ImgUpload} 
                                            imgFileName={introSubTitle2Img} parentObj={this} imgW={360} imgH={300} required={true} />                                          
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">                                    
                                    <div><img src="/image/sample_05/02.png" alt="Temp5_Company" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp5_company">觀看放大圖例</a></div>
                                    <hr />
                                    <div>
                                        <table border='1'>
                                            <thead>
                                                <tr>
                                                    <th width="10%">項目</th>
                                                    <th width="35%">內容範例</th>
                                                    <th width="15%">規格</th>
                                                    <th width="40%">備註</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>主標題</td>
                                                    <td align='left'>集陽由來</td>
                                                    <td>建議14個字以內</td>
                                                    <td>
                                                        不可空白<br />
                                                        <a type="button" data-toggle="modal" href="#tmp5_company_title">觀看範例圖片</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>主內容</td>
                                                    <td align='left'>
                                                        集陽綠能是由一群”熱血，瘋狂，健康”的好友們一同創建的團隊。
                                                        在一次的聚會中，大夥談及各自的工作近況，衍生聊到什麼行業是對社會有貢獻又能對自己未來交代的行業呢？
                                                        然而提及到〔太陽能〕，因看見這個行業有著友善環境又響應多年來”節能減碳推動再生能源”的趨勢，太陽能資源豐富，且無需運輸，對環境污染低。
                                                        進而感覺這是一份有責任感的行業，因此開啟了集陽綠能這班列車。
                                                    </td>
                                                    <td>建議270個字以內</td>
                                                    <td>
                                                        不可空白<br />
                                                        <a type="button" data-toggle="modal" href="#tmp5_company_content">觀看範例圖片</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片一</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>360*300</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp5_company_pic01">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片二</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>360*300</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp5_company_pic02">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp5_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02.png" alt="tmp5_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_title">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-1.png" alt="tmp5_company_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_content">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-2.png" alt="tmp5_company_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_pic01">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片一 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-3-1.png" alt="tmp5_company_pic01" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_pic02">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片二 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-3-2.png" alt="tmp5_company_pic02" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題一 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-1">
                                        <div className="card-header text-white bg-primary">小標題一</div>
                                    </a>                                    
                                    <div className="card-body collapse show" id="collapseCard2-1">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題1' notice='(建議字數為14個字以內)' inputName='introSubTitle1' inputState={introSubTitle1}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題1內容' notice='(建議字數為85個字以內)' inputName='introSubTitle1Content' inputState={introSubTitle1Content}
                                                        rows='3' stateObj={this} required={true} checkValue='500' />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_05/02-4-1.png" alt="Temp5_Company_subtitle01" width="100%"/></div>
                                                <div>
                                                    <a type="button" data-toggle="modal" href="#tmp5_company_subtitle01">
                                                        觀看放大圖例
                                                    </a>
                                                </div>
                                                <hr />
                                                <div>
                                                    <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題1</td>
                                                                <td align='left'>安全</td>
                                                                <td>建議14個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題1 內容</td>
                                                                <td align='left'>系統支架擁有結構技師簽證，且由結構技師設計規劃，並計算其結構強度及抗風係數，故結構及材料均符合結構設計規範要求，結構強度安全無虞。</td>
                                                                <td>建議85個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_subtitle01">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題一 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-4-1.png" alt="tmp5_company_subtitle01" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題二 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-2">
                                        <div className="card-header text-white bg-primary">小標題二</div>
                                    </a>                                    
                                    <div className="card-body collapse collapsed" id="collapseCard2-2">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題2' notice='(建議字數為14個字以內)' inputName='introSubTitle2' inputState={introSubTitle2}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題2內容' notice='(建議字數為85個字以內)' inputName='introSubTitle2Content' inputState={introSubTitle2Content}
                                                        rows='3' stateObj={this} required={true} checkValue='500' />
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_05/02-4-2.png" alt="Temp5_Company_subtitle02" width="100%"/></div>
                                                <div>
                                                    <a type="button" data-toggle="modal" href="#tmp5_company_subtitle02">
                                                        觀看放大圖例
                                                    </a>
                                                </div>
                                                <hr />
                                                <div>
                                                <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題2</td>
                                                                <td align='left'>整合服務</td>
                                                                <td>建議14個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題2 內容</td>
                                                                <td align='left'>從太陽能系統評估、設計、申請台電併聯、簽證、施工、申請躉售及補助，到施工完成後的監控、保養、維修，以上所有複雜的流程全部都可由集陽綠能幫您完成。</td>
                                                                <td>建議85個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_subtitle02">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題二 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-4-2.png" alt="tmp5_company_subtitle02" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
  
                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題三 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-3">
                                        <div className="card-header text-white bg-primary">小標題三</div>
                                    </a>                                    
                                    <div className="card-body collapse collapsed" id="collapseCard2-3">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題3' notice='(建議字數為14個字以內)' inputName='introSubTitle3' inputState={introSubTitle3}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題3內容' notice='(建議字數為85個字以內)' inputName='introSubTitle3Content' inputState={introSubTitle3Content}
                                                        rows='3' stateObj={this} required={true} checkValue='500' />
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_05/02-4-3.png" alt="Temp5_Company_subtitle03" width="100%"/></div>
                                                <div>
                                                    <a type="button" data-toggle="modal" href="#tmp5_company_subtitle03">
                                                        觀看放大圖例
                                                    </a>
                                                </div>
                                                <hr />
                                                <div>
                                                <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題3</td>
                                                                <td align='left'>國家證照的施工保證</td>
                                                                <td>建議14個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題3 內容</td>
                                                                <td align='left'>集陽綠能有合格的甲級電器承裝業登記執照，具有專業的現場監造團隊 : 甲種電匠及太陽光電設置乙級技術士，及擁有經驗豐富的施工團隊。</td>
                                                                <td>建議85個字以內</td>
                                                                <td>不可空白</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp5_company_subtitle03">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題三 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_05/02-4-3.png" alt="tmp5_company_subtitle03" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div align="center">
                                <button type='submit' id='action2' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                            </div>
                        </form>
                    </div>
                 </div>
           </div>
             
        )

    }


}
export default Session2;